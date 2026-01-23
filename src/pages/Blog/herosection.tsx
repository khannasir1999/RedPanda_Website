import LeftAnimater from "@/components/animations/leftanimator";
import blogpanda from "../../../public/assets/images/blogs/blog-panda.png";
import RightAnimator from "@/components/animations/rightanimator";

const Herosection = () => {

    return (
        <section className="h-screen w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 bg-background-white overflow-hidden">
            <h1 className="text-5xl md:text-[4.5vw] font-chillax tracking-tighter leading-15  md:leading-[5vw]">
                <LeftAnimater>
                    View Insights On Latest{" "}
                    <span className="font-medium text-red-primary-400">Design</span> News
                </LeftAnimater>
            </h1>
            <div className="hidden md:flex h-full w-full items-end justify-end">
                <RightAnimator>
                    <img src={blogpanda} className="h-[550px] 2xl:h-full object-contain" alt="Red Panda Blog" />
                </RightAnimator>
            </div>
        </section >
    );
};

export default Herosection;
