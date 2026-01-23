import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface SimilarTopicCardProps {
    id: number;
    title: string;
    category: string;
    image: string;
}

const SimilarTopicCard = ({ id, title, category, image }: SimilarTopicCardProps) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/blog-detail/${id}`)}
            className="flex-shrink-0 flex flex-col gap-6 cursor-pointer group w-[300px] md:w-[544px]"
        >
            <div className="w-full h-[300px] md:h-[542px] rounded-[28px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="font-chillax text-[20px] font-normal leading-[57px] tracking-[-1px] text-gray-500">
                            {category}
                        </span>
                        <h3
                            className="font-chillax text-[24px] md:text-[37.5px] font-normal leading-tight md:leading-[57px] tracking-[-2px] text-black pr-4"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-red-primary-400 flex items-center justify-center mt-4 group-hover:bg-red-500 transition-colors">
                        <ArrowUpRight color="white" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimilarTopicCard;
