import JourneyBadge from "@/components/journeys/journeybadge";
import Informationheading from "@/components/portfolio/Informationheading";
import { CLIENT_SERVICE_BADGES } from "@/constants/clientservicebadges";
import { useActive } from "@/hooks/useActive";

const Clientserviceinformation = () => {
  const {
    setActive: setClientActiveService,
    checkIsActive: checkClientActiveService,
  } = useActive(null);

  return (
    <div className="p-5 py-8 w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 gap-y-20">
        <div>
          <Informationheading text={"Services"} />
          <div className="flex gap-3 flex-wrap">
            {CLIENT_SERVICE_BADGES.map((b, i) => (
              <JourneyBadge
                key={b}
                text={b}
                handleClick={() => setClientActiveService(i)}
                active={checkClientActiveService(i)}
                className="py-1 px-5"
              />
            ))}
          </div>
        </div>
        <div>
          <Informationheading
            text={
              <>
                About <span className="text-red-primary-400">Client</span>
              </>
            }
          />
          <p className="font-chillax font-[400] text-[24px] md:text-[1.75vw] leading-[35px] md:leading-[2.56vw] tracking-[-3%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div>
          <Informationheading
            text={
              <>
                The <span className="text-red-primary-400">Solution</span>
              </>
            }
          />
          <p className="font-chillax font-[400] text-[24px] md:text-[1.75vw] leading-[35px] md:leading-[2.56vw] tracking-[-3%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div>
          <Informationheading
            text={
              <>
                <span className="text-red-primary-400">Problems</span> Client
                was Facing / or The{" "}
                <span className="text-red-primary-400">Challenge</span>
              </>
            }
          />
          <p className="font-chillax font-[400] text-[24px] md:text-[1.75vw] leading-[35px] md:leading-[2.56vw] tracking-[-3%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clientserviceinformation;
