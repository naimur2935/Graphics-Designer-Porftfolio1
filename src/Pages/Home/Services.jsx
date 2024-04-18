import PortfolioCard from "../../components/Cards/PortfolioCard";

const Services = () => {
    const portfolios =[
        {
            name:'Graphic Design',
            image:'./images/portfolios/1.png'
        },
        {
            name:'Website Design',
            image:'./images/portfolios/2.png'
        },
        {
            name:'Search Engine Optimization',
            image:'./images/portfolios/3.png'
        }
    ]
    return (
        <div className="py-20 px-4">
            <h3 className="text-xl md:text-2xl">SERVICE</h3>
            <h1 className="text-4xl md:text-5xl lg:text-[55px] font-semibold line-hight">Discover Our Best Services</h1>
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

export default Services;