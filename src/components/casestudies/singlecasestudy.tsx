import { useNavigate } from "react-router";
import { STUDY_CARD_BADGES } from "../../constants/studycardbadges";
import type { Badge } from "../../types/badge";
import Casebadge from "./casebadge";
import Overlay from "./overlay";

const Singlecasestudy = ({ stdy }: { stdy: string }) => {

  const navigate = useNavigate();

  return (
    <div
      className={'h-[408px] md:h-[48.3vw] rounded-[28px] relative overflow-hidden bg-center bg-cover case-study'}
      style={{
        backgroundImage: `url(${stdy})`,
      }}
    >
      <Overlay />
      <div className="absolute right-3 top-4">
        <Casebadge onClick={() => navigate("/portfolio")} isPrimary text="View Now" />
      </div>
      <div className="absolute flex flex-wrap gap-2 2xl:gap-4 mx-2 sm:mx-4 bottom-2 sm:bottom-4 max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-2rem)]">
        {STUDY_CARD_BADGES.map(({ label, id }: Badge) => (
          <Casebadge key={id} text={label} />
        ))}
      </div>
    </div>
  );
};

export default Singlecasestudy;
