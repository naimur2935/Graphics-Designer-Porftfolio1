import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IoIosStar } from "react-icons/io";

export default function CommonSlider() {

    const [reviews, setReviews] = useState([]); // Data for client reviews
    const [currentSlide, setCurrentSlide] = useState(0); // State to store the current slide number

    // Fetch clients data for client reviews
    useEffect(() => {
        fetch(`/clients.json`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    // Custom function to render dots with custom styling
    const renderDots = (index, onClick, className) => {
        return (
            <div
                className={className}
                style={{
                    width: "10px",
                    height: "10px",
                    background: index === currentSlide ? "purple" : "gray", // Change dot colors based on active or inactive
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "0 5px",
                    cursor: "pointer"
                }}
                onClick={onClick}
            ></div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        customPaging: renderDots, // Use custom function to render dots
        afterChange: (index) => setCurrentSlide(index), // Update current slide number after slide change
        prevArrow: null, // Remove previous arrow button
        nextArrow: null // Remove next arrow button
    };

    return (
        <div className='overflow-hidden py-5'>
            <Slider {...settings}>
                {reviews?.map((review, idx) => (
                    <div key={idx} className='px-3 '>
                        <div className='bg-[#2B2338] py-3 px-4 rounded-lg'>
                            <div className='flex items-center space-x-5'>
                                <img className='h-20 w-20 rounded-full' src={review?.image} alt="" />
                                <div>
                                    <h3 className='text-xl font-bold'>{review?.name}</h3>
                                    <p className='font-medium'>{review?.working}</p>
                                    <p className='font-bold flex items-center'><IoIosStar className='text-[#FFB31F] mr-1 text-xl'></IoIosStar> {review?.rating}</p>
                                </div>
                            </div>
                            <p className='text-sm mt-3'>{review?.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
