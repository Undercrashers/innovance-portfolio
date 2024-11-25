import { testimonialImageTitle } from "../../../data/data";

const TestimonialImage = () => {
    return (
        <div className="flex flex-col gap-3 lg:gap-5 items-center justify-center font-montserrat px-2">
            {/* Title text for the testimonial image section */}
            <h1 className="text-xl lg:text-2xl font-extrabold">{testimonialImageTitle}</h1>

            {/* Image displaying a testimonial with defined width and height */}
            <img 
                src="./images/carouselImage.jpg"
                alt="Bruno Edison" 
                width={900} 
                height={50} 
                className="mb-20 lg:mb-32" 
                loading="lazy"
            />
        </div>
    );
};

export default TestimonialImage;
