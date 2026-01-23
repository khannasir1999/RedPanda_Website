import Button from "@/ui/button"
import designmig from "../../../public/assets/images/portfolio/designimg.jpg"
import { RoundedCornersIcon } from "@/icons"


const Designpreview = () => {
  return (
    <div className='p-5 py-8 h-screen bg-white'>
      <div className="w-full h-full relative">
        <img src={designmig} className="w-full h-full object-cover" alt="Loading..." />
        <div className="absolute right-0 bottom-[-1px]">
          <RoundedCornersIcon className="h-[120px] w-[295px] md:h-[8.7vw] md:w-[21vw]" />
        </div>
        <div className="absolute right-0 w-[18vw] bottom-0 flex">
          <Button
            text="View Site"
            variant="filled"
            btnclassname="w-full"
          />
        </div>
      </div>
    </div >
  )
}

export default Designpreview