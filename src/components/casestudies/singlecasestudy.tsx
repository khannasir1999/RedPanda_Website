import { useNavigate } from "react-router";
import { STUDY_CARD_BADGES } from "../../constants/studycardbadges";
import type { Badge } from "../../types/badge";
import Casebadge from "./casebadge";
import Overlay from "./overlay";

const Singlecasestudy = ({ caseStudy }: { caseStudy: { image: string; slug?: string } }) => {

  const navigate = useNavigate();

  const handleViewClick = () => {
    if (caseStudy.slug) {
      navigate(`/casestudy/${caseStudy.slug}`);
    } else {
      navigate("/portfolio");
    }
  };

  return (
    <div
      className={"aspect-square w-full rounded-[28px] relative overflow-hidden bg-center bg-cover case-study"}
      style={{
        backgroundImage: `url(${caseStudy.image})`,
      }}
    >
      <Overlay />
      <div className="absolute right-3 top-4">
        <Casebadge onClick={handleViewClick} isPrimary text="View Now" />
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
