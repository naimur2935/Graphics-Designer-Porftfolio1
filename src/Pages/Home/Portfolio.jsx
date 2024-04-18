import PortfolioCard from "../../components/Cards/PortfolioCard";

const Portfolio = () => {
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
        <div className="w-full py-20 px-4">
            <h3 className="text-xl md:text-2xl">PORTFOLIO</h3>
            <h1 className="text-4xl md:text-5xl lg:text-[55px] font-semibold line-hight">Project highlights</h1>
            <p className="text-xl md:text-2xl">Browse through a selection of my featured design projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {
                portfolios?.map((portfolio, idx) => 
                <PortfolioCard key={idx} data={{name:portfolio?.name, image:portfolio?.image}}></PortfolioCard>
            )
            }
            </div>
        </div>
    );
};

export default Portfolio;