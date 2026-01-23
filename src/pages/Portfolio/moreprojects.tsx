import Sectionheading from "@/components/shared/Sectionheading";
import moreproject1 from "../../../public/assets/images/moreprojects/more-project-1.png"
import moreproject2 from "../../../public/assets/images/moreprojects/more-project-2.png"
import Moreprojectcard from "@/components/portfolio/moreprojectcard";

const Moreprojects = () => {
    return (
        <div className="w-full px-4 py-12">
            <Sectionheading
                heading={
                    <>
                        More{" "}
                        <span className="font-medium text-red-primary-400">
                            Projects
                        </span>
                    </>
                }
            />
            <div className="flex gap-5 md:flex-row flex-col">
                <Moreprojectcard isNext={false} img={moreproject1} />
                <Moreprojectcard isNext img={moreproject2} />
            </div>
        </div>
    );
};

export default Moreprojects;
