import React from 'react';
import { Clock, CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const PackageDetails = () => {
  const { id } = useParams();
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
  // Helper function to find package by ID across all categories
  const findPackageById = (id) => {
    const allCategories = Object.values(allPackages).flat();
    return allCategories.find(pkg => pkg.id === parseInt(id));
  };

  const packageData = findPackageById(id);

  if (!packageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Package not found</p>
      </div>
    );
  }

  return (
    <>
    
    <Navbar/>
    <div className="max-w-6xl mx-auto p-6 ">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 mt-12">
        <div className="flex justify-between items-start flex-wrap">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{packageData.name}</h1>
            <p className="text-lg text-gray-600">{packageData.description}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">&#x20b9;{packageData.price.toLocaleString()}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-2">
              {packageData.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Features and Deliverables Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-3">
            {packageData.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Deliverables</h2>
          <ul className="space-y-3">
            {packageData.deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Support Information */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Support Details</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-gray-600 mr-2" />
            <div>
              <p className="font-medium text-gray-900">Support Hours</p>
              <p className="text-gray-600">{packageData.support_hours}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-600 mr-2" />
            <div>
              <p className="font-medium text-gray-900">Response Time</p>
              <p className="text-gray-600">{packageData.response_time}</p>
              
            </div>
          </div>
          <div className='flex items-center '>
          <button
            
            className="flex items-center gap-2 mx-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            
            Schedule Consultant
          </button>
          </div>
          
        </div>
        
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default PackageDetails;