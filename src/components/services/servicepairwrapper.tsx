import Spline from "@splinetool/react-spline";
import { type ReactNode } from "react";

type ServicePairWrapperProps = {
  children: ReactNode;
  splineUrl: string;
  splineScale?: string;
};

const ServicePairWrapper = ({
  children,
  splineUrl,
  splineScale = "scale-250",
}: ServicePairWrapperProps) => {
  return (
    <div className="relative w-full">

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
        <div className={`w-full h-full md:h-screen opacity-40 ${splineScale}`}>
          <Spline scene={splineUrl} className="flex justify-center items-center" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ServicePairWrapper;