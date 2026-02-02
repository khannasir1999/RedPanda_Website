import { Staricon } from "../../icons";
import type { RatingsCardProps } from "../../types/ratingscardprops";
import Goggleratings from "./goggleratings";

const Ratingscard = ({ showgoggleratings = true, isClientReview = true }: RatingsCardProps) => {
  return (
    <div className={`rounded-[20px] sm:rounded-[25px] bg-[#EA2227] cursor-pointer relative flex flex-col justify-around h-full w-full max-w-[220px] sm:max-w-none py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-[48px] lg:px-[48px] gap-3 backdrop-blur-[92.60401153564453px]`}>
      <div>

        <h1 className="font-chillax text-[44px] sm:text-[56px] md:text-[72px] lg:text-[86px] font-medium mb-0! leading-none text-[#FFFFFF]">4.9</h1>
        <div className="flex gap-x-0.5 -mt-1">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <div className="cursor-pointer">
                  <Staricon key={i} className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px]" />
                </div>
              );
            })}
        </div>
        <p className="font-chillax text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] font-medium my-2 tracking-tighter mt-4 sm:mt-6 lg:mt-[30px] text-[#FFFFFF]">Overall Rating</p>
        <p className={`font-chillax font-normal max-w-[80%] ${isClientReview ? "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] tracking-tighter text-[#FFFFFF]" : "text-[12px] sm:text-[14px] md:text-[16px] tracking-tighter text-[#FFFFFF]"}`}>
          Many CEO’s Prefer Red Panda Networks
        </p>
      </div>

      <div>
        {showgoggleratings && <Goggleratings />}
      </div>
    </div>
  );
};

export default Ratingscard;
