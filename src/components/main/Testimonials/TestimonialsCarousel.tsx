import {useState, useEffect} from "react";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import { testimonials } from "../../../data/data";

export const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setIsFading(false);
        }, 300);
    };

    const handlePreviousSlide = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
            setIsFading(false);
        }, 300);
    };

    return (
        <div className="relative w-full h-[400px] md:h-[500px] bg-white font-montserrat flex items-center justify-center px-4">
            <button
                onClick={handlePreviousSlide}
                className="absolute left-4 md:left-10 lg:left-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900 p-2"
                aria-label="Previous Slide">
                <SlArrowLeft size={24} className=" md:size-8" />
            </button>

            <button onClick={handleNextSlide} className="absolute right-4 md:right-10 lg:right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900 p-2" aria-label="Next Slide">
                <SlArrowRight size={24} className="md:size-8" />
            </button>

            <div className={`max-w-2xl lg:max-w-3xl px-4 md:px-8 text-center mt-10 md:mt-20 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>
                <div className="text-xl md:text-2xl text-black font-medium mb-6 md:mb-10">"{testimonials[currentIndex].quote}"</div>
                <div className="mt-6 md:mt-8">
                    <h3 className="text-base md:text-lg font-extrabold text-gray-900 mb-2">{testimonials[currentIndex].author}</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                        <span className="font-bold">{testimonials[currentIndex].position}</span>
                        <span> at </span>
                        <span className="text-blue-500 font-bold">{testimonials[currentIndex].company}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
