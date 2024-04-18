import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PortfolioCard = ({data}) => {
    return (
        <div className="relative">
                <img className="rounded-[22px] h-full" src={data?.image} alt="" />
                <div className="absolute bottom-0 bg-[#B216E0] bg-opacity-50 text-white rounded-b-[22px] w-full h-[120px] md:h-[170px]">
                    <h2 className="text-2xl md:text-4xl font-semibold p-3 border-b border-white h-2/3">{data?.name}</h2>
                    <Link to={`/${data?.name}`} className="flex justify-between items-center p-3 h-1/3">
                        <p>View More</p>
                        <FaArrowRightLong></FaArrowRightLong>
                    </Link>
                </div>
            </div>
    );
};

export default PortfolioCard;