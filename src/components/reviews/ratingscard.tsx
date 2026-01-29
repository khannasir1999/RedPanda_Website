import { Staricon } from "../../icons";
import type { RatingsCardProps } from "../../types/ratingscardprops";
import Goggleratings from "./goggleratings";

const Ratingscard = ({ showgoggleratings = true, isClientReview = true }: RatingsCardProps) => {
  return (
    <div className={`p-3 rounded-[25px] bg-[#EA2227] cursor-pointer relative flex flex-col justify-around h-full py-[48px] px-[48px] backdrop-blur-[92.60401153564453px]`}>
      <div>

        <h1 className="font-chillax text-[86px] font-medium !mb-0 leading-none text-[#FFFFFF]">4.9</h1>
        <div className="flex gap-x-0.5 -mt-1">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <div className="cursor-pointer">
                  <Staricon key={i} className="w-[25px] h-[25px] md:w-[1.8vw] md:h-[1.8vw] 2xl:w-[3.5vh] 2xl:h-[3.5vh]" />
                </div>
              );
            })}
        </div>
        <p className="font-chillax  text-[38px] md:text-[2vw] 2xl:text-[3.5vh] font-medium my-2 tracking-tighter mt-[30px] text-[#FFFFFF]">Overall Rating</p>
        <p className={`font-chillax font-normal  max-w-[80%] ${isClientReview ? "text-[20px] tracking-tighter text-[#FFFFFF]" : "text-[16px] tracking-tighter text-[#FFFFFF]"}`}>
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
