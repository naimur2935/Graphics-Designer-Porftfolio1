import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaBehance, FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Banner = () => {
    const [projectNumberCount, setProjectNumberCount] = useState(0); //happy client numbers

    useEffect(() => {
        if (projectNumberCount < 1000) {
            // Continue counting if not reached 1000
            const intervalId = setInterval(() => {
                setProjectNumberCount((prevCount) => prevCount + 20);
            }, 10);

            // Clear the interval when the component unmounts or when counter reaches 1000
            return () => clearInterval(intervalId);
        }
    }, [projectNumberCount]);
    return (
        <div className="mx-auto pt-32 md:pt-44 pb-28 px-4">

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">

                {/* banner text section */}
                <div className="lg:w-1/2 space-y-2">
                    <h1 className="text-4xl md:text-5xl lg:text-[55px] font-semibold text-white">Elevate Your Brand with Stunning <span className="bg-gradient-to-r from-[#B216E0] bg-clip-text to-[#425EFF] text-transparent line-hight">Graphic Designs</span></h1>
                    <p className="text-[#ffffff] md:text-xl">Welcome to Bm Badhon's graphic design portfolio. With a passion for creativity and a keen eye for detail, Bm Badhon brings your ideas to life through stunning visuals. Explore his work and get inspired today.</p>

                    <div className="pt-8">
                        <button className="bg-gradient-to-r from-[#B216E0] to-[#425EFF] px-8 py-3 rounded-lg font-medium flex items-center">Explore <IoIosArrowForward className="ml-3 animate-lr"></IoIosArrowForward></button>
                    </div>
                    <div className="text-white flex items-center pt-6">
                        Follow Me ---- <FaFacebook className="ml-4"></FaFacebook> <FaBehance className="ml-4"></FaBehance><TbWorld className="ml-4"></TbWorld>
                    </div>

                </div>

                {/* banner image */}
                <div className="relative h-[400px] md:h-[525px]">
                    <div className="relative h-[250px] md:h-[380px] w-[250px] md:w-[380px] animate-rotate rounded-full lg:mr-10 ">
                        <img className="h-7 md:h-10 w-7 md:w-10 absolute right-10 top-10 animate-rotate" src={'./Ai.png'} alt="" />
                        <img className="h-7 md:h-10 w-7 md:w-10 absolute left-10 top-10 animate-rotate" src={'./id.png'} alt="" />
                        <img className="h-7 md:h-10 w-7 md:w-10 absolute bottom-10 left-10 animate-rotate" src={'./ps.png'} alt="" />
                        <img className="h-7 md:h-10 w-7 md:w-10 absolute right-10 bottom-10 animate-rotate" src={'./fig.png'} alt="" />
                    </div>

                    <img className="h-[350px] md:h-[450px] absolute bottom-0" src="./images/clients/akasha.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;