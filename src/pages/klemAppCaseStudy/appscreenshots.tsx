import Klems1 from "../../assets/images/KlemApp/Klems1.png";
import Klems2 from "../../assets/images/KlemApp/Klems2.png";
import Klems3 from "../../assets/images/KlemApp/Klems3.png";
import Klems4 from "../../assets/images/KlemApp/Klems4.png";
import Klems5 from "../../assets/images/KlemApp/Klems5.png";
import Klems6 from "../../assets/images/KlemApp/Klems6.png";
import Klems7 from "../../assets/images/KlemApp/Klems7.png";
import Klems8 from "../../assets/images/KlemApp/Klems8.png";
import Klems9 from "../../assets/images/KlemApp/Klems9.png";
import Klems10 from "../../assets/images/KlemApp/Klems10.png";
import Klems11 from "../../assets/images/KlemApp/Klems11.png";

const AppScreenshots = () => {

  const screenshot1 = [
    Klems5,
    Klems1
  ]
  const screenshot2 = [
    Klems10,
    Klems9
  ]
  const screenshot3 = [
    Klems11,
    Klems4,
    Klems8
  ]
  const screenshot4 = [
    Klems3,
    Klems2
  ]
  const screenshot5 = [
    Klems6,
    Klems7
  ]

  return (
    <section className="relative w-full h-screen bg-[#C9C9C9] overflow-hidden">
      <div className="w-full h-full relative flex">
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 2xl:gap-20 h-full w-full items-start">
          {/* screenshot1 - leftmost, flex-col */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-start">
            {screenshot1.map((screenshot, index) => (
              <div
                key={index}
                className="relative min-h-2.5"
              >
                <img
                  src={screenshot}
                  alt={`Klem App screenshot 1-${index + 1}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* screenshot2 */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-start">
            {screenshot2.map((screenshot, index) => (
              <div
                key={index}
                className="relative min-h-2.5"
              >
                <img
                  src={screenshot}
                  alt={`Klem App screenshot 2-${index + 1}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* screenshot3 */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center">
            {screenshot3.map((screenshot, index) => (
              <div
                key={index}
                className="relative min-h-2.5"
              >
                <img
                  src={screenshot}
                  alt={`Klem App screenshot 3-${index + 1}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* screenshot4 */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-end">
            {screenshot4.map((screenshot, index) => (
              <div
                key={index}
                className="relative min-h-2.5"
              >
                <img
                  src={screenshot}
                  alt={`Klem App screenshot 4-${index + 1}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* screenshot5 */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-end">
            {screenshot5.map((screenshot, index) => (
              <div
                key={index}
                className="relative min-h-2.5"
              >
                <img
                  src={screenshot}
                  alt={`Klem App screenshot 5-${index + 1}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
