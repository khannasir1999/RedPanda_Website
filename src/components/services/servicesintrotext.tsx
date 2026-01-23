import { useRef } from "react";
import { useTextScrollFillAnimation } from "../../hooks/useTextScrollFillAnimation";

const Servicesintrotext = () => {
  const textRef = useRef(null);

  useTextScrollFillAnimation({
    targetRef: textRef,
    initialColor: "#555",
    finalColor: "#FFFFFF",
    highlightColor: "#EA2227",
    highlightSelector: "[data-fill='red']"
  });

  return (
    <div>
      <p
        ref={textRef}
        className="font-chillax text-[24px] md:text-[2.56vw] leading-relaxed space-y-2 font-light break-normal hyphens-none"
      >
        Expert UI/UX design that transforms ideas into intuitive, <br className="hidden md:block"/>
        engaging{" "}
        <span
          data-fill="red"
          className="font-bold"
        >
          digital experiences.
        </span>{" "}
        Let's build something remarkable <br className="hidden md:block"/> together.
      </p>
    </div>
  );
};

export default Servicesintrotext;