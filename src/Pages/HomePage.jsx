import React, { useState } from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar'
import HerSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';
import SuccessStories from '../Components/SuccessStories'
import AllPackages from '../Components/AllPackages'
const packageData = {
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




const HomePage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  function appointment() {
    navigate("/appointment")
  }

  return (
    <>
      <Navbar />
      <HerSection />

      <div className="min-h-screen bg-gray-50">

        <AllPackages />
        <SuccessStories />

        <div className="my-10 text-center">
          <button
            onClick={appointment}
            className="flex items-center gap-2 mx-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;