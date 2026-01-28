import { useRef } from "react";
// import Workflowchip from "../../components/workflows/workflowchip";
// import Workflowchipslines from "../../components/workflows/chipsconnectorlines";
// import Spline from "@splinetool/react-spline";
import Workflowelements from "../../components/workflows/workflowelements";
import Workflowtext from "../../components/workflows/workflowtext";
// import type { WorkflowChip } from "../../types/workflowchip";
// import { WORKFLOW_CHIPS } from "../../constants/workflowchips";



const Designflowsection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const designFlowTexts = Array(4).fill("DESIGNFLOW");

  return (
    <section
      ref={sectionRef}
      className='bg-black flex justify-center flex-col py-10 relative overflow-x-hidden'
    >
      {/* <div className="pointer-events-none absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full">
          <Spline
            scene="https://prod.spline.design/tsuXkyAXIxOjjtG8/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div> */}

      <div className="overflow-hidden flex items-center justify-center md:h-screen">
        <div className="relative z-20 ">
          {designFlowTexts.map((text, index) => (
            <Workflowtext
              key={index}
              text={text}
              index={index}
              sectionRef={sectionRef}
            />
          ))}
          <Workflowelements />
        </div>
      </div>

      {/* <div className="px-7 pt-10 relative z-10">
        {WORKFLOW_CHIPS.map(({ key, ...rest }: WorkflowChip, index, arr) => (
          <Workflowchip
            key={key}
            index={index}
            showlastitem={index !== arr.length - 1}
            {...rest}
          />
        ))}
        <Workflowchipslines />
      </div> */}
    </section>
  );
};

export default Designflowsection;
