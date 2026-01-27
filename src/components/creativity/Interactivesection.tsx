import { INTERACTIVE_ELEMENTS } from "../../constants/interactivelements"
import FallingElements from "./FallingElements"

const Interactivesection = () => {
    return (
        <div className="bg-[#FFFFFF] h-full w-full rounded-3xl flex px-4 relative overflow-hidden interactive-section">
            <FallingElements
                elements={INTERACTIVE_ELEMENTS}
                trigger="scroll"
                gravity={0.6}
                mouseConstraintStiffness={0.1}
                backgroundColor="transparent"
            />
        </div>
    )
}

export default Interactivesection