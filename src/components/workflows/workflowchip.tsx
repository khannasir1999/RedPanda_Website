import { WokrflowChipsBottomArrowIcon } from "../../icons";
import type { WorkflowChip } from "../../types/workflowchip";

const Workflowchip = ({ text, bgcolor, mb, justifyclass, index,showlastitem }: Omit<WorkflowChip, "key"> & { index: number,showlastitem:boolean }) => {
    return (

        <div className={`relative z-10 flex md:flex-row flex-col ${justifyclass}`}>
            <div className={`px-6 cursor-pointer ${index === 0 ? "md:ml-15" : ""} py-3 md:py-1 rounded-full md:w-auto w-full flex items-center justify-center ${mb} ${bgcolor} transition-colors duration-[300ms] ease-out`}
            >
                <p className='font-chillax text-white text-[24px] md:text-[2.5vw] whitespace-nowrap tracking-[-2.51px]'>{text}</p>
            </div>
            {showlastitem && <div className="md:hidden flex justify-center items-center my-4">
                <WokrflowChipsBottomArrowIcon/>
            </div>}

        </div>
    )
}

export default Workflowchip