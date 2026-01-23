import { Staricon } from "../../icons";
import type { RatingsCardProps } from "../../types/ratingscardprops";
import Goggleratings from "./goggleratings";

const Ratingscard = ({ showgoggleratings = true, isClientReview = true }: RatingsCardProps) => {
  return (
    <div className={`p-3 rounded-lg bg-linear-to-b from-background-white to-red-primary-100 cursor-pointer relative flex flex-col justify-between h-full`}>
      <div>

        <h1 className="font-chillax text-[96px] md:text-[7vw] 2xl:text-[15vh] font-medium !mb-0">4.9</h1>
        <div className="flex gap-x-0.5">
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
        <p className="font-chillax  text-[38px] md:text-[2vw] 2xl:text-[3.5vh] font-medium my-2 tracking-tighter">Overall Rating</p>
        <p className={`font-chillax font-medium  max-w-[80%] ${isClientReview ? "text-[16px] md:text-[1.17vw] 2xl:text-[2.5vh]" : "text-[24px] md:text-[1.3vw] 2xl:text-[3vh]"} tracking-tighter`}>
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
