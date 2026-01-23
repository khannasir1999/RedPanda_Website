import { useNavigate } from "react-router";
import { StarburstIcon } from "../../icons";
import { ArrowUpRight } from "lucide-react";

const Herostudycard = ({ bgimage }: { bgimage: string }) => {

    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/portfolio")}
            className={'bg-blue-300 h-[386px] md:h-[29.9vw] rounded-4xl relative bg-center bg-cover cursor-pointer'}
            style={{
                backgroundImage: `url(${bgimage})`,
            }}
        >
            <StarburstIcon className="absolute m-5 w-[30px] h-[30px] md:w-[2.19vw] md:h-[2.19vw]" />
            <ArrowUpRight className="text-red-primary-400 absolute bottom-0 right-0 m-5 w-[35px] h-[35px] md:w-[2.5vw] md:h-[2.5vw]" />
        </div>
    )
}

export default Herostudycard