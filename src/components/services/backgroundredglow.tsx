import { cn } from "../../utils/cn";

const Backgroundredglow = ({
    className,
}: {
    className: React.ComponentProps<"div">["className"];
}) => {
    return (
        <div
            className={cn(
                "absolute bg-red-500 rounded-full blur-[200px] w-[450px] h-[450px] opacity-40 z-[-1]",
                className
            )}
        />
    );
};

export default Backgroundredglow;
