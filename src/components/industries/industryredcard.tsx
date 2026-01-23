import type { IndustryRedCardProps } from '@/types/Industryredcardprops'
import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

const Industryredcard = ({ containerClassName,children }: IndustryRedCardProps & PropsWithChildren) => {
    return (
        <div className={cn("bg-red-primary-400 gsap-red-card flex justify-center items-center rounded-[28px] relative", containerClassName)}>
           {children}
        </div>
    )
}

export default Industryredcard