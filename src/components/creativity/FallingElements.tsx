import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import type { FallingElementsProps } from "../../types/fallingelementsprops";



const FallingElements: React.FC<FallingElementsProps> = ({
    elements,
    trigger = "auto",
    backgroundColor = "transparent",
    wireframes = false,
    gravity = 1,
    mouseConstraintStiffness = 0.2,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const canvasContainerRef = useRef<HTMLDivElement | null>(null);

    const [effectStarted, setEffectStarted] = useState(false);

    // handle trigger (scroll / auto / click / hover)
    useEffect(() => {
        if (trigger === "auto") {
            setEffectStarted(true);
            return;
        }
        if (trigger === "scroll" && containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setEffectStarted(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [trigger]);

    useEffect(() => {
        if (!effectStarted) return;

        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body, Events } =
            Matter;

        if (!containerRef.current || !canvasContainerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;

        if (width <= 0 || height <= 0) return;

        const engine = Engine.create();
        engine.world.gravity.y = gravity;

        // Stabilize solver
        engine.positionIterations = 10;
        engine.velocityIterations = 8;
        engine.constraintIterations = 4;
        engine.enableSleeping = true;

        const render = Render.create({
            element: canvasContainerRef.current,
            engine,
            options: {
                width,
                height,
                background: backgroundColor,
                wireframes,
            },
        });

        // Boundaries (exactly matching container)
        const boundaryOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" },
        };

        const wallThickness = 100;
        const boundaryPadding = 20;

        const floor = Bodies.rectangle(
            width / 2,
            height - boundaryPadding + wallThickness / 2,
            width * 2,
            wallThickness,
            boundaryOptions
        );

        const ceiling = Bodies.rectangle(
            width / 2,
            boundaryPadding - wallThickness / 2,
            width * 2,
            wallThickness,
            boundaryOptions
        );

        const leftWall = Bodies.rectangle(
            boundaryPadding - wallThickness / 2,
            height / 2,
            wallThickness,
            height * 2,
            boundaryOptions
        );

        const rightWall = Bodies.rectangle(
            width - boundaryPadding + wallThickness / 2,
            height / 2,
            wallThickness,
            height * 2,
            boundaryOptions
        );

        if (!wrapperRef.current) return;
        const childElems = wrapperRef.current.querySelectorAll(".falling-element");

        const elementBodies = [...childElems].map((elem) => {
            const rect = elem.getBoundingClientRect();
            const x = rect.left - containerRect.left + rect.width / 2;
            const y = rect.top - containerRect.top + rect.height / 2;

            const body = Bodies.rectangle(x, y, rect.width, rect.height, {
                render: { fillStyle: "transparent" },
                restitution: 0.35,
                frictionAir: 0.02,
                friction: 0.08,
                frictionStatic: 0.2,
            });

            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 5,
                y: 0,
            });
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

            return { elem: elem as HTMLElement, body };
        });

        // set absolute positioning
        elementBodies.forEach(({ elem, body }) => {
            elem.style.position = "absolute";
            elem.style.left = `${body.position.x}px`;
            elem.style.top = `${body.position.y}px`;
            elem.style.transform = "translate(-50%, -50%)";
        });

        // mouse control
        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: mouseConstraintStiffness,
                damping: 0.25,
                render: { visible: false },
            },
        });
        render.mouse = mouse;

        mouseConstraint.mouse.element.removeEventListener("wheel", () => { });
        mouseConstraint.mouse.element.removeEventListener("touchmove", () => { });

        // Track if mouse left - disable clamping temporarily
        let mouseHasLeft = false;
        let fallTimeout:any = null;

        // Handle mouse leave - release grabbed elements and make them fall
        const handleMouseLeave = () => {
            mouseHasLeft = true;
            
            // Release any currently grabbed body
            if (mouseConstraint.body) {
               (mouseConstraint as any).body = null;
            }
            
            // Make all elements fall by giving them strong downward velocity
            elementBodies.forEach(({ body }) => {
                // Wake up sleeping bodies first
                body.isSleeping = false;
                Body.setStatic(body, false);
                
                // Apply strong downward velocity to overcome any boundary constraints
                Body.setVelocity(body, {
                    x: body.velocity.x * 0.3, // reduce horizontal velocity significantly
                    y: Math.max(body.velocity.y, 8) // strong downward push
                });
            });

            // Re-enable clamping after elements have had time to fall
            if (fallTimeout) clearTimeout(fallTimeout);
            fallTimeout = setTimeout(() => {
                mouseHasLeft = false;
            }, 1000); // 1 second delay
        };

        // Handle mouse enter - re-enable clamping
        const handleMouseEnter = () => {
            if (fallTimeout) {
                clearTimeout(fallTimeout);
                fallTimeout = null;
            }
            mouseHasLeft = false;
        };

        // Add mouse event listeners
        containerRef.current.addEventListener('mouseleave', handleMouseLeave);
        containerRef.current.addEventListener('mouseenter', handleMouseEnter);

        World.add(engine.world, [
            floor,
            leftWall,
            rightWall,
            ceiling,
            mouseConstraint,
            ...elementBodies.map((eb) => eb.body),
        ]);

        const clampBodiesInside = () => {
            // Skip clamping when mouse has left to allow falling
            if (mouseHasLeft) return;

            elementBodies.forEach(({ body }) => {
                const halfWidth = (body.bounds.max.x - body.bounds.min.x) / 2;
                const halfHeight = (body.bounds.max.y - body.bounds.min.y) / 2;

                const minX = boundaryPadding + halfWidth;
                const maxX = width - boundaryPadding - halfWidth;
                const minY = boundaryPadding + halfHeight;
                const maxY = height - boundaryPadding - halfHeight;

                let nextX = body.position.x;
                let nextY = body.position.y;

                if (nextX < minX) nextX = minX;
                else if (nextX > maxX) nextX = maxX;

                if (nextY < minY) nextY = minY;
                else if (nextY > maxY) nextY = maxY;

                if (nextX !== body.position.x || nextY !== body.position.y) {
                    Body.setPosition(body, { x: nextX, y: nextY });
                    Body.setVelocity(body, {
                        x:
                            nextX === minX || nextX === maxX
                                ? -body.velocity.x * 0.35
                                : body.velocity.x,
                        y: nextY === maxY ? -Math.abs(body.velocity.y) * 0.35 : body.velocity.y,
                    });
                }
            });
        };

        clampBodiesInside();
        Events.on(engine, "afterUpdate", clampBodiesInside);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        let animationFrameId = requestAnimationFrame(function updateLoop() {
            elementBodies.forEach(({ body, elem }) => {
                const { x, y } = body.position;
                elem.style.left = `${x}px`;
                elem.style.top = `${y}px`;
                elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
            });
            animationFrameId = requestAnimationFrame(updateLoop);
        });

        return () => {
            // Clean up event listeners and timeout
            if (containerRef.current) {
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
                containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
            }
            if (fallTimeout) clearTimeout(fallTimeout);
            Events.off(engine, "afterUpdate", clampBodiesInside);
            cancelAnimationFrame(animationFrameId);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas && canvasContainerRef.current) {
                canvasContainerRef.current.removeChild(render.canvas);
            }
            World.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

    const handleTrigger = () => {
        if (!effectStarted && (trigger === "click" || trigger === "hover")) {
            setEffectStarted(true);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden"
            onClick={trigger === "click" ? handleTrigger : undefined}
            onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
        >
            {/* Elements wrapper */}
            <div ref={wrapperRef} className="inline-block relative">
                {elements.map((el, i) => (
                    <div
                        key={i}
                        className="falling-element inline-block mx-[8px] select-none"
                    >
                        {el}
                    </div>
                ))}
            </div>

            <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
        </div>
    );
};

export default FallingElements;
