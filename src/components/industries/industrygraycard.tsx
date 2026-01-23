import type { IndustryGrayCardProps } from '@/types/industrygraycardprops'
import { cn } from '@/utils/cn';


const Industrygraycard = ({ title, description, containerClassName, headingClassName, descClassName, imgClassName, imgsrc }: IndustryGrayCardProps) => {
    return <div className={cn("bg-[#F0EEEE] gsap-gray-card rounded-[28px] relative overflow-hidden isolate", containerClassName)}>
        <h1 className={cn("text-bg-black-100  text-[24px] leading-[38px] md:text-[1.75vw] md:leading-[2.78vw] mb-2 tracking-[-2px] font-chillax font-medium", headingClassName)}>{title}</h1>
        <p className={cn("font-chillax font-[400] text-[15px] leading-[25px] md:text-[1vw] md:leading-[1.83vw] tracking-[0px] ", descClassName)}>{description}</p>
        <img src={imgsrc} className={cn('absolute z-[-1]', imgClassName)} alt="Loading..." />
    </div>
}

export default Industrygraycard