import { BsTelephoneInbound } from "react-icons/bs";
import { FaCheck, FaLocationArrow } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {

    return (
        <div className="py-20 px-4">
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="x-full lg:w-1/2">
                    <h4 className="text-xl md:text-2xl font-medium">Have Any Project?</h4>
                    <h2 className="text-4xl md:text-5xl lg:text-[55px] font-bold line-hight py-2">Let's build something great!</h2>
                    <ul className="space-y-3 my-4 md:text-lg">
                        <li className="flex items-center">
                            <FaCheck className="mr-1.5 text-[#1FA73D]"></FaCheck> We have a dedicated team for big and small medium projects
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="mr-1.5 text-[#1FA73D]"></FaCheck> Flexible pricing system for any projects
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="mr-1.5 text-[#1FA73D]"></FaCheck> Dedicated support team
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="mr-1.5 text-[#1FA73D]"></FaCheck> We hire top talent to serve our clients like you
                        </li>
                    </ul>
                    <div className="mt-12 space-y-3">
                            <p className="flex items-center"><BsTelephoneInbound className="mr-4 text-4xl"></BsTelephoneInbound> +8801568882935</p>
                            <p className="flex items-center"><MdOutlineEmail className="mr-4 text-4xl"></MdOutlineEmail> naimur2935@gmail.com</p>
                            <p className="flex items-center"><FaLocationArrow className="mr-4 text-4xl"></FaLocationArrow> Ibrahimpur, Dhaka-1206, Bangladesh</p>
                        </div>
                </div>
                <div className="w-full lg:w-1/2 border border-[#3759F0] rounded-[15px] p-2 md:px-6 md:py-4 mt-7 lg:mt-0">
                    <h3 className="text-2xl text-center font-medium">Let’s Connect</h3>
                    <form className="mt-10 space-y-[25px]">
                        <div>
                            <label className="text-lg">Name</label><br />
                            <input type="text" className="w-full text-[14px] p-3 mt-1 bg-[#E9E9E9] text-[#7D7D7D] rounded-[5px] border border-[#BCBCBC]" placeholder="Write your name" />
                        </div>
                        <div>
                            <label className="text-lg">Email</label><br />
                            <input type="email" className="w-full text-[14px] p-3 mt-1 bg-[#E9E9E9] text-[#7D7D7D] rounded-[5px] border border-[#BCBCBC]" placeholder="Write your email" />
                        </div>
                        <div>
                            <label className="text-lg">Choose your service</label><br />
                            <select name="" id="" placeholder='' className="w-full p-3 mt-1 bg-[#E9E9E9] text-[#7D7D7D] rounded-[5px] border border-[#BCBCBC]">
                                <option value="">Web Development</option>
                                <option value="">Web Design</option>
                                <option value="">Graphics Design</option>
                                <option value="">Digital Marketing</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-lg">Project details</label><br />
                            <textarea name="" id="" cols="" rows="4" className="w-full text-[14px] p-3 mt-1 bg-[#E9E9E9] text-[#7D7D7D] rounded-[5px] border border-[#BCBCBC]" placeholder="Write your message"></textarea>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-[#B216E0] to-[#425EFF] px-8 py-3 rounded-lg font-medium flex items-center" >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;