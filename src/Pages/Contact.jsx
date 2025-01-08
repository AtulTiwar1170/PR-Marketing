import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 px-9">
                {/* Animated Company Name */}
                <div className="relative overflow-hidden">
                    <div className="animate-slide-down absolute top-0 left-0 p-8">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            CR Wala
                        </span>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8 mt-14">
                        {/* Left Section - Contact Information */}
                        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our PR services? We're here to help and would love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <MapPin className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Our Location</h3>
                                        <p className="text-gray-600">123 Business Avenue, Mumbai, Maharashtra 400001</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Phone className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone Number</h3>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Mail className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-600">contact@crwala.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Clock className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-delay">
                            <h2 className="text-3xl font-bold mb-6">Send Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your message here..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;