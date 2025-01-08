import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Search, Star, Clock, DollarSign, Package, Award } from 'lucide-react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const StarRating = ({ rating, onRating, size = 20 }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={size}
                    className={`cursor-pointer transition-colors duration-200 ${(hover || rating) >= star
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => onRating(star)}
                />
            ))}
        </div>
    );
};

const PackageCard = ({ pkg, onRating, ratings, index }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);
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

    useEffect(() => {
        // Initial state - hide all elements
        gsap.set(contentRef.current.children, {
            opacity: 0,
            y: 20
        });

        // Animate card entrance
        gsap.fromTo(cardRef.current,
            {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                y: 30
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power3.out"
            }
        );

        // Animate card contents
        gsap.to(contentRef.current.children, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: (index * 0.2) + 0.3,
            ease: "power2.out"
        });
    }, [index]);

    const getBadgeColor = (price) => {
        if (price < 3000) return 'bg-green-100 text-green-800';
        if (price < 10000) return 'bg-blue-100 text-blue-800';
        return 'bg-purple-100 text-purple-800';
    };

    const handleClick = (e) => {
        if (!e.target.closest('.rating-container')) {
            navigate(`/packages/${pkg.id}`);
        }
    };

    return (
        <div
            ref={cardRef}
            onClick={handleClick}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
        >
            <div ref={contentRef}>
                <div className={`absolute top-4 right-4 ${getBadgeColor(pkg.price)} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {pkg.duration}
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                        <Package className="text-blue-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{pkg.name}</h2>
                        <p className="text-sm text-gray-500 capitalize">
                            {Object.keys(allPackages).find(key =>
                                allPackages[key].some(p => p.id === pkg.id)
                            )}
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 h-12">{pkg.description}</p>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        
                        <span className="text-lg font-bold text-gray-800">&#x20b9;{pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-blue-600" size={18} />
                        <span className="text-sm text-gray-600">{pkg.response_time}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="rating-container">
                        <StarRating
                            rating={ratings[pkg.id] || 0}
                            onRating={(rate) => onRating(pkg.id, rate)}
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <Award size={16} className="text-yellow-600" />
                        <span className="text-sm text-gray-600">
                            {pkg.features.length} Features
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AllPackages = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [ratings, setRatings] = useState({});
    const headerRef = useRef(null);
    const searchBarRef = useRef(null);
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

    const filterRef = useRef(null);
    const navigate = useNavigate();

    const categories = ['all', ...Object.keys(allPackages)];
    const packagesData = Object.values(allPackages).flat();

    useEffect(() => {
        // Set initial states
        gsap.set([headerRef.current, searchBarRef.current, filterRef.current], {
            opacity: 0,
            y: -30
        });

        // Create timeline for header animations
        const tl = gsap.timeline();

        tl.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .to(searchBarRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .to(filterRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4");
    }, []);

    const handleRating = (packageId, rating) => {
        setRatings(prev => ({
            ...prev,
            [packageId]: rating
        }));
    };

    const filteredPackages = packagesData.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || selectedCategory === 'all' ||
            Object.keys(allPackages).find(key =>
                allPackages[key].some(p => p.id === pkg.id)
            ) === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>

            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8">
                <div className="max-w-7xl mx-auto mt-10">
                    <div ref={headerRef} className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Explore Our Packages
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Find the perfect package that suits your needs
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div ref={searchBarRef} className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search packages..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div ref={filterRef}>
                            <select
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize bg-white w-full sm:w-auto"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="capitalize">
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPackages.map((pkg, index) => (
                            <PackageCard
                                key={pkg.id}
                                pkg={pkg}
                                onRating={handleRating}
                                ratings={ratings}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllPackages;