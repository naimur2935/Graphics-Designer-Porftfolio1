import { useParams } from "react-router";

const Portfolios = () => {
    const pathName = useParams()?.name;
    console.log(pathName)
    const portfolios =[
        {
            name:'Logo design and Brand Identity',
            image:'./images/portfolios/1.png'
        },
        {
            name:'Company Business Profile',
            image:'./images/portfolios/2.png'
        },
        {
            name:'Flyer and Brochure design',
            image:'./images/portfolios/3.png'
        },
        {
            name:'Restaurant & Food Menu Design',
            image:'./images/portfolios/4.png'
        },
        {
            name:'Planner & Journal Design',
            image:'./images/portfolios/5.png'
        },
        {
            name:'Book Cover Design',
            image:'./images/portfolios/6.png'
        }
    ]
    return (
        <div className="pt-28 pb-12 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-[55px] bg-gradient-to-r from-[#B216E0] bg-clip-text to-[#425EFF] text-transparent font-semibold border-b border-white pb-5 mb-8">{pathName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    portfolios?.map((portfolio, idx) => 
                        <img key={idx} src={portfolio?.image} alt="" className="h-[400px] w-full rounded" />
                    )
                }
            </div>
        </div>
    );
};

export default Portfolios;