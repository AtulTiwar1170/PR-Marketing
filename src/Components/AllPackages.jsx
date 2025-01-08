import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Clock, Clock4, ArrowRight } from 'lucide-react';

const PackagesDisplay = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigate = useNavigate();
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

    // Function to get all packages in a flat array
    const getAllPackages = () => {
        return Object.entries(allPackages).flatMap(([category, packages]) =>
            packages.map(pkg => ({
                ...pkg,
                category: category.charAt(0).toUpperCase() + category.slice(1)
            }))
        );
    };

    // Filter packages based on selected category
    const getFilteredPackages = () => {
        if (selectedCategory === 'all') {
            return getAllPackages();
        }
        return allPackages[selectedCategory].map(pkg => ({
            ...pkg,
            category: selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
        }));
    };

    const handlePackageClick = (packageId) => {
        navigate(`/packages/${packageId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
                {/* Header */}
                <div className="text-center mb-12">
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
                        Choose the perfect PR package tailored to your needs and take your brand to the next level
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-6 py-2 rounded-full transition-all ${selectedCategory === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        All Packages
                    </button>
                    {Object.keys(allPackages).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full capitalize transition-all ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {getFilteredPackages().map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                            onClick={() => handlePackageClick(pkg.id)}
                        >
                            {/* Package Header */}
                            <div className="p-6 bg-gradient-to-br from-zinc-800 to-blue-700">
                                <div className="text-white mb-4">
                                    <p className="text-sm font-medium uppercase tracking-wide">
                                        {pkg.category}
                                    </p>
                                    <h3 className="text-2xl font-bold mt-1">{pkg.name}</h3>
                                </div>
                                <div className="flex items-baseline text-white">
                                    <span className="text-3xl font-bold">&#x20b9;{pkg.price}</span>
                                    <span className="ml-2 text-blue-100">/{pkg.duration}</span>
                                </div>
                            </div>

                            {/* Package Details */}
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">{pkg.description}</p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold mb-3">Features</h4>
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Support Info */}
                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="w-4 h-4 mr-2" />
                                        Support Hours: {pkg.support_hours}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock4 className="w-4 h-4 mr-2" />
                                        Response Time: {pkg.response_time}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-6">
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesDisplay;