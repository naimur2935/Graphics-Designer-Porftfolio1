import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoShowUp = () => {
    

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="text-white slick-container border-y border-[#FFFFFF] py-10 w-6xl">
            <Slider {...settings}>
                <div><img className="h-16 w-16 mx-auto" src={'./Ai.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./id.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./ps.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./fig.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./Ai.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./id.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./ps.png'} alt="" /></div>
                <div><img className="h-16 w-16 mx-auto" src={'./fig.png'} alt="" /></div>
                {/* Add more images here */}
            </Slider>
        </div>
    );
};

export default LogoShowUp;
