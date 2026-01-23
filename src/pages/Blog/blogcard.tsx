import JourneyBadge from '../../components/journeys/journeybadge';
import { ArrowUpRight } from "lucide-react";
import type { Blog } from '../../types/blog';
import { useNavigate } from "react-router"

const Blogcard = (props: Blog & { lastitem?: boolean }) => {
    const { title, category, badges, image, lastitem } = props;
    const navigate = useNavigate();

    return (
        <div className={`p-3 md:p-6 flex md:flex-row flex-col-reverse justify-between gap-8 md:gap-0 border-[1px] border-black blog-card rounded-2xl ${lastitem ? "mb-0" : "mb-5"}`}>
            <div className='flex flex-col-reverse md:justify-between md:flex-col gap-5 md:gap-50 w-full'>
                <div className="flex gap-2 2xl:gap-5 flex-wrap md:max-w-[70%] lg:max-w-[60%]">
                    {badges.map((badge) => {
                        return (
                            <JourneyBadge
                                key={badge}
                                text={badge}
                                className="py-1 px-4"
                            />
                        );
                    })}
                </div>
                <div>
                    <p className='font-chillax mb-1 font-semibold text-red-primary-400 text-sm md:text-[1.46vw] tracking-tighter'>{category}</p>
                    <div className='flex gap-2 md:gap-15 md:flex-row flex-col '>
                        <h1 dangerouslySetInnerHTML={{ __html: title }} className='text-2xl md:text-[2.74vw] font-chillax' />
                        <div
                            onClick={() => navigate(`/blog-detail/${props.id}`)}
                            className={"w-10 h-10 md:w-[3vw] md:h-[3vw] cursor-pointer shrink-0 select-none flex items-center justify-center rounded-full bg-red-primary-400"}
                        >
                            <ArrowUpRight color='white' className='w-[23px] h-[23px] md:w-[1.68vw] md:h-[1.68vw]' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-lg overflow-hidden w-full'>
                <img src={image} className='min-h-80 h-full w-full object-cover' alt={title} />
            </div>
        </div>
    )
}

export default Blogcard