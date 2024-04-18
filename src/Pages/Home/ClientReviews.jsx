import CommonSlider from "../../components/Sliders/CommonSlider";

const ClientReview = () => {

    return (
        <div className='py-20 px-4'>
            <div className='max-w-6xl xl:max-w-[1400px] mx-auto'>
                <h1 className="text-4xl md:text-5xl lg:text-[55px] font-semibold line-hight">What Clients Say</h1>
                <p className="text-xl md:text-2xl">Read testimonials from our satisfied clients</p>
                <div className="mt-5">
                    <CommonSlider></CommonSlider>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;