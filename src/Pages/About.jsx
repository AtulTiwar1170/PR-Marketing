import React, { useState, useEffect } from 'react';
import { Calendar, Users, Award, ArrowRight, Clock, Star, Phone } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
    const [isVisible, setIsVisible] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const contact = () => {
        navigate('/contact');
    }

    return (
        <>
        <Navbar/>
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="PR Marketing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white ml-10">
                        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                            Your Story, <br />Amplified
                        </h1>
                        <p className="text-xl mb-8 animate-slide-up">
                            CR Wala helps founders, individuals, and actors build powerful narratives
                            and reach their target audience through strategic PR marketing.
                        </p>
                        <div className="flex gap-4">
                            <button
                            onClick={() => {
                                navigate('/packages');
                            }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                                View Packages
                            </button>
                            <button
                            onClick={() => {
                                navigate('/appointment');
                            }}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Overview */}
            <div className="py-20 bg-gray-50 px-5">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Why Choose CR Wala?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Expert Team</h3>
                            <p className="text-gray-600">
                                Our team brings years of experience in PR, marketing, and media relations
                                to help you achieve your goals.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Tailored Approach</h3>
                            <p className="text-gray-600">
                                We create customized PR strategies that align with your unique goals,
                                brand voice, and target audience.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <Star className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                            <p className="text-gray-600">
                                Our track record speaks for itself, with successful campaigns for
                                startups, celebrities, and industry leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 px-5">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative p-6 bg-white rounded-lg shadow-lg">
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4">1. Discovery Call</h3>
                                <p className="text-gray-600">
                                    We begin with a detailed consultation to understand your goals,
                                    target audience, and unique value proposition.
                                </p>
                            </div>
                            <div className="relative p-6 bg-white rounded-lg shadow-lg md:mt-12">
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4">2. Strategy Development</h3>
                                <p className="text-gray-600">
                                    Our team crafts a comprehensive PR strategy tailored to your
                                    specific needs and objectives.
                                </p>
                            </div>
                            <div className="relative p-6 bg-white rounded-lg shadow-lg">
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4">3. Implementation</h3>
                                <p className="text-gray-600">
                                    We execute the strategy across various channels, ensuring
                                    maximum visibility and impact.
                                </p>
                            </div>
                            <div className="relative p-6 bg-white rounded-lg shadow-lg md:mt-12">
                                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4">4. Monitoring & Optimization</h3>
                                <p className="text-gray-600">
                                    Continuous tracking and adjustment of campaigns to ensure
                                    optimal results and ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Appointment Section */}
            <div className="py-20 bg-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
                        <p className="text-xl mb-8">
                            Book a free consultation with our PR experts and discover how we can
                            help you achieve your goals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                <Clock className="w-8 h-8 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">30-Minute Session</h3>
                                <p>Free strategy consultation</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                <Users className="w-8 h-8 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Expert Team</h3>
                                <p>Meet our PR specialists</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                <Phone className="w-8 h-8 mx-auto mb-4" />
                                <h3 className="font-bold mb-2">Flexible Scheduling</h3>
                                <p>Choose your preferred time</p>
                            </div>
                        </div>
                        <button
                        onClick={() => {
                            navigate('/appointment')
                        }}
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                            Schedule Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Let's Transform Your Brand Story</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful clients who have elevated their brand presence
                        with CR Wala's PR marketing services.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
                            View Success Stories
                        </button>
                        <button
                        onClick={contact}
                        className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutPage;