import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Marketing Director",
        company: "TechStart Inc.",
        review: "The PR campaign exceeded our expectations. Our brand visibility increased by 200% within just three months.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "CEO",
        company: "InnovateLab",
        review: "Their crisis management strategy saved our reputation during a critical time. Truly professional service.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        position: "Startup Founder",
        company: "GreenTech Solutions",
        review: "From day one, they understood our vision and translated it into impactful media coverage.",
        rating: 4
    },
    {
        id: 4,
        name: "David Kim",
        position: "Entertainment Artist",
        company: "Independent",
        review: "Thanks to their personal branding expertise, I've secured multiple high-profile collaborations.",
        rating: 5
    }
];

const TestimonialsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setActiveIndex((current) =>
                    current === testimonials.length - 1 ? 0 : current + 1
                );
                setFadeIn(true);
            }, 500); // Wait for fade out before changing testimonial
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-10 mt-5">
            <div className="max-w-6xl mx-auto px-1">
                

                <div className="relative">
                    {/* Main Testimonial */}
                    <div className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'
                        }`}>
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
                            <div className="flex items-center mb-8">
                                <img
                                    src={`/api/placeholder/80/80`}
                                    alt={testimonials[activeIndex].name}
                                    className="w-16 h-16 rounded-full object-cover mr-6"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {testimonials[activeIndex].name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {testimonials[activeIndex].position}
                                    </p>
                                    <p className="text-blue-600 font-medium">
                                        {testimonials[activeIndex].company}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex mb-4">
                                    {renderStars(testimonials[activeIndex].rating)}
                                </div>
                                <p className="text-gray-700 text-lg italic">
                                    "{testimonials[activeIndex].review}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setFadeIn(false);
                                    setTimeout(() => {
                                        setActiveIndex(index);
                                        setFadeIn(true);
                                    }, 500);
                                }}
                                className={`w-3 h-3 rounded-full mx-2 transition-all ${activeIndex === index
                                        ? 'bg-blue-600 w-6'
                                        : 'bg-gray-300 hover:bg-blue-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                
            </div>
        </div>
    );
};

export default TestimonialsCarousel;