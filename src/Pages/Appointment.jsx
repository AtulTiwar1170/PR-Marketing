import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const AppointmentPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        package: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const allPackages = {
        "startup": [
            {
                "id": 1,
                "name": "Launch Package",
                "description": "Perfect for early-stage startups looking to establish their market presence and build initial media relationships.",
                "price": 2999,
                "duration": "3 months",
                "features": [
                    "2 Press Releases per month",
                    "Media outreach to 10 publications",
                    "Social media account setup and optimization",
                    "Basic SEO optimization",
                    "Monthly analytics reports"
                ],
                "deliverables": [
                    "Media contact list",
                    "Brand messaging guide",
                    "Social media content calendar",
                    "Monthly performance metrics"
                ],
                "support_hours": "9 AM - 6 PM (Mon-Fri)",
                "response_time": "24 hours"
            },
            {
                "id": 2,
                "name": "Growth Package",
                "description": "Designed for startups in growth phase needing comprehensive PR support and investor relations.",
                "price": 5999,
                "duration": "6 months",
                "features": [
                    "4 Press Releases per month",
                    "Media outreach to 25 publications",
                    "Investor relations support",
                    "Crisis management planning",
                    "Thought leadership content",
                    "Weekly performance tracking"
                ],
                "deliverables": [
                    "Investor presentation materials",
                    "Crisis communication plan",
                    "Content strategy document",
                    "Weekly progress reports"
                ],
                "support_hours": "9 AM - 9 PM (Mon-Sat)",
                "response_time": "12 hours"
            },
            {
                "id": 3,
                "name": "Scale Package",
                "description": "Full-service PR solution for scaling startups requiring extensive media coverage and brand building.",
                "price": 9999,
                "duration": "12 months",
                "features": [
                    "Unlimited Press Releases",
                    "Premium media outreach (50+ publications)",
                    "Complete crisis management",
                    "International media coverage",
                    "Executive branding",
                    "Real-time analytics dashboard"
                ],
                "deliverables": [
                    "Annual PR strategy",
                    "Executive media training",
                    "Market analysis reports",
                    "Real-time performance dashboard"
                ],
                "support_hours": "24/7",
                "response_time": "4 hours"
            }
        ],
        "personal": [
            {
                "id": 4,
                "name": "Basic Profile",
                "description": "Entry-level personal branding package for professionals starting to build their public image.",
                "price": 1999,
                "duration": "3 months",
                "features": [
                    "Social media profile optimization",
                    "Personal brand strategy",
                    "2 blog posts per month",
                    "Basic media outreach"
                ],
                "deliverables": [
                    "Personal branding guide",
                    "Content calendar",
                    "Monthly progress report"
                ],
                "support_hours": "9 AM - 6 PM (Mon-Fri)",
                "response_time": "24 hours"
            },
            {
                "id": 5,
                "name": "Professional",
                "description": "Comprehensive personal branding for established professionals seeking increased visibility.",
                "price": 3999,
                "duration": "6 months",
                "features": [
                    "Media interview opportunities",
                    "Speaking engagement sourcing",
                    "4 blog posts per month",
                    "LinkedIn optimization and management"
                ],
                "deliverables": [
                    "Professional media kit",
                    "Speaking opportunity calendar",
                    "Bi-weekly performance reports"
                ],
                "support_hours": "9 AM - 9 PM (Mon-Sat)",
                "response_time": "12 hours"
            }
        ],
        "entertainment": [
            {
                "id": 6,
                "name": "Rising Star",
                "description": "Entry-level package for upcoming actors and entertainers building their portfolio.",
                "price": 4999,
                "duration": "3 months",
                "features": [
                    "Portfolio development",
                    "Casting network access",
                    "Basic publicity",
                    "Social media management",
                    "Industry networking"
                ],
                "deliverables": [
                    "Professional portfolio",
                    "Industry contact list",
                    "Monthly PR report"
                ],
                "support_hours": "9 AM - 6 PM (Mon-Sat)",
                "response_time": "24 hours"
            },
            {
                "id": 7,
                "name": "Celebrity",
                "description": "Premium package for established entertainers requiring full-service publicity management.",
                "price": 14999,
                "duration": "12 months",
                "features": [
                    "Dedicated publicity team",
                    "Brand deal negotiations",
                    "Crisis management",
                    "Event coordination",
                    "Media tour management"
                ],
                "deliverables": [
                    "Brand partnership strategy",
                    "Crisis response protocols",
                    "Weekly performance analytics"
                ],
                "support_hours": "24/7",
                "response_time": "1 hour"
            }
        ],
        "corporate": [
            {
                "id": 8,
                "name": "SME",
                "description": "Tailored PR solution for small and medium enterprises seeking professional communication management.",
                "price": 6999,
                "duration": "6 months",
                "features": [
                    "Corporate communications",
                    "Media relations",
                    "Basic crisis management",
                    "Internal communications support",
                    "Local media coverage"
                ],
                "deliverables": [
                    "Communication strategy",
                    "Media database access",
                    "Monthly performance reports"
                ],
                "support_hours": "9 AM - 6 PM (Mon-Fri)",
                "response_time": "24 hours"
            },
            {
                "id": 9,
                "name": "Global",
                "description": "Enterprise-level PR package for corporations requiring international media presence.",
                "price": 24999,
                "duration": "12 months",
                "features": [
                    "International PR coverage",
                    "Multi-market strategy",
                    "Complete crisis management",
                    "Stakeholder relations",
                    "Global media monitoring"
                ],
                "deliverables": [
                    "Global PR strategy",
                    "Market penetration analysis",
                    "Real-time reporting dashboard"
                ],
                "support_hours": "24/7",
                "response_time": "1 hour"
            }
        ]
    }

    // Combine all packages into a single array for easier access
    const allServices = [
        ...allPackages.startup.map(pkg => ({ ...pkg, category: 'Startup' })),
        ...allPackages.personal.map(pkg => ({ ...pkg, category: 'Personal' })),
        ...allPackages.entertainment.map(pkg => ({ ...pkg, category: 'Entertainment' })),
        ...allPackages.corporate.map(pkg => ({ ...pkg, category: 'Corporate' }))
    ];

    const availableTimeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM'
    ];

    const validateStep = (currentStep) => {
        const newErrors = {};

        switch (currentStep) {
            case 1:
                if (!formData.service) {
                    newErrors.service = 'Please select a service category';
                }
                if (!formData.package) {
                    newErrors.package = 'Please select a package';
                }
                break;
            case 2:
                if (!formData.date) {
                    newErrors.date = 'Please select a date';
                } else {
                    const selectedDate = new Date(formData.date);
                    const today = new Date();
                    if (selectedDate < today) {
                        newErrors.date = 'Please select a future date';
                    }
                }
                if (!formData.time) {
                    newErrors.time = 'Please select a time slot';
                }
                break;
            case 3:
                if (!formData.name?.trim()) {
                    newErrors.name = 'Name is required';
                }
                if (!formData.email?.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
                    newErrors.email = 'Invalid email address';
                }
                if (!formData.phone?.trim()) {
                    newErrors.phone = 'Phone number is required';
                } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\D/g, ''))) {
                    newErrors.phone = 'Invalid phone number';
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleServiceSelect = (category) => {
        setFormData({
            ...formData,
            service: category,
            package: '' // Reset package when category changes
        });
        if (errors.service) {
            setErrors({
                ...errors,
                service: ''
            });
        }
    };

    const handlePackageSelect = (packageId) => {
        setFormData({
            ...formData,
            package: packageId
        });
        if (errors.package) {
            setErrors({
                ...errors,
                package: ''
            });
        }
    };

    const handleNextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1);
        }
    };

    

// Modify the handleSubmit function
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setSubmitting(true);
    try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', formData);
        // Show success modal after successful submission
        setShowSuccessModal(true);
    } catch (error) {
        setErrors({
            submit: 'Failed to submit form. Please try again.'
        });
    } finally {
        setSubmitting(false);
    }
};

    const renderError = (fieldName) => {
        return errors[fieldName] ? (
            <p className="text-red-500 text-sm mt-1">{errors[fieldName]}</p>
        ) : null;
    };
    

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 ">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 mt-5">
                    <h1 className="text-4xl font-bold mb-4">Schedule Your Consultation</h1>
                    <p className="text-gray-600">
                        Book a consultation with our PR experts and discover how we can help elevate your brand
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="flex justify-center items-center mb-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {num}
                                </div>
                                {num < 3 && (
                                    <div className={`w-24 h-1 ${step > num ? 'bg-blue-600' : 'bg-gray-200'
                                        }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Service Selection */}
                        {step === 1 && (
                            <div className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Select a Service Category</h2>

                                {/* Service Categories */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {Object.keys(allPackages).map((category) => (
                                        <div
                                            key={category}
                                            className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${formData.service === category
                                                    ? 'border-blue-600 bg-blue-50'
                                                    : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                            onClick={() => handleServiceSelect(category)}
                                        >
                                            <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
                                            <p className="text-gray-600">
                                                {category === 'startup' ? 'For emerging businesses and founders' :
                                                    category === 'personal' ? 'Personal branding and profile building' :
                                                        category === 'entertainment' ? 'For actors and entertainment professionals' :
                                                            'Corporate communication solutions'}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                {renderError('service')}

                                {/* Packages for Selected Service */}
                                {formData.service && (
                                    <>
                                        <h3 className="text-xl font-bold mb-4">Select a Package</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            {allPackages[formData.service].map((pkg) => (
                                                <div
                                                    key={pkg.id}
                                                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${formData.package === pkg.id
                                                            ? 'border-blue-600 bg-blue-50'
                                                            : 'border-gray-200 hover:border-blue-300'
                                                        }`}
                                                    onClick={() => handlePackageSelect(pkg.id)}
                                                >
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <h4 className="text-xl font-semibold">{pkg.name}</h4>
                                                            <p className="text-gray-600">{pkg.description}</p>
                                                        </div>
                                                        <div className="text-xl font-bold text-blue-600">
                                                            ${pkg.price.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <h5 className="font-semibold mb-2">Features:</h5>
                                                            <ul className="text-sm text-gray-600">
                                                                {pkg.features.map((feature, index) => (
                                                                    <li key={index} className="mb-1">• {feature}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-semibold mb-2">Deliverables:</h5>
                                                            <ul className="text-sm text-gray-600">
                                                                {pkg.deliverables.map((deliverable, index) => (
                                                                    <li key={index} className="mb-1">• {deliverable}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 text-sm text-gray-600">
                                                        <p>Duration: {pkg.duration}</p>
                                                        <p>Support Hours: {pkg.support_hours}</p>
                                                        <p>Response Time: {pkg.response_time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {renderError('package')}
                                    </>
                                )}

                                <div className="mt-8 flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                                        onClick={handleNextStep}
                                        disabled={!formData.service || !formData.package}
                                    >
                                        Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Date & Time Selection */}
                        {step === 2 && (
                            <div className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Select Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                        {renderError('date')}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Available Time Slots</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {availableTimeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    type="button"
                                                    className={`p-3 rounded-lg text-center transition-all ${formData.time === slot
                                                            ? 'bg-blue-600 text-white'
                                                            : 'border border-gray-300 hover:border-blue-500'
                                                        }`}
                                                    onClick={() => handleInputChange({ target: { name: 'time', value: slot } })}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                        {renderError('time')}
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-between">
                                    <button
                                        type="button"
                                        className="text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                                        onClick={() => setStep(1)}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                                        onClick={handleNextStep}
                                    >
                                        Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Personal Details */}
                        {step === 3 && (
                            <div className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Your Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {renderError('name')}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        {renderError('email')}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="+1 (123) 456-7890"
                                            />
                                        </div>
                                        {renderError('phone')}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Message (Optional)</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Any specific requirements..."
                                                rows="3"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Summary */}
                                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                                    {formData.service && formData.package && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-gray-600">Selected Package:</p>
                                                <p className="font-semibold">
                                                    {allPackages[formData.service].find(pkg => pkg.id === formData.package)?.name}
                                                </p>
                                                <p className="text-blue-600 font-bold mt-1">
                                                    ${allPackages[formData.service].find(pkg => pkg.id === formData.package)?.price.toLocaleString()}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Appointment Time:</p>
                                                <p className="font-semibold">
                                                    {formData.date && new Date(formData.date).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <p className="font-semibold">{formData.time}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Error Message */}
                                {errors.submit && (
                                    <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
                                        {errors.submit}
                                    </div>
                                )}

                                <div className="mt-8 flex justify-between">
                                    <button
                                        type="button"
                                        className="text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                                        onClick={() => setStep(2)}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            'Confirm Booking'
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* Success Modal */}
                {showSuccessModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">
                Thank you for booking a consultation with us. We've sent a confirmation email with all the details.
            </p>
            <div className="flex justify-end">
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Done
                </button>
            </div>
        </div>
    </div>
)}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AppointmentPage;