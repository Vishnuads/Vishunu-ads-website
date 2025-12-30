import React from "react";
import Img from "../../assets/images/services/1.png";


const CaseStudyPage = () => {

    const caseStudy = {
        name: "Mirakle",
        industry: "Premium Hygiene & Food Products",
        description:
            "We partnered with Mirakle, a premium hygiene and food products brand, to develop their business from start to end. Our end-to-end services included company registration, legal compliance, brand development, marketing strategy, social media management, content creation, promotions, collaborations, e-commerce platform support, and sales optimization ensuring Mirakle’s products reached the right audience, built strong brand visibility, and achieved measurable business growth.",
        image: Img,
        services: [
            "Web Development",
            "Content-Based SEO",
            "Social Media Marketing",
            "Corporate Video Making",
            "Promotions & Collaborations",
            "E-commerce Platform Support",
            "Sales Optimization",
            "Legal & Company Registration",
            "Branding & Digital Identity",
        ],
    };


    return (
        <section className="bg-white text-gray-900">
            {/* HERO */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                    Case Study
                </p>

                <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
                    {caseStudy.name}
                </h1>

                <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                    {caseStudy.industry}
                </p>
            </div>

            {/* IMAGE */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                    <img
                        src={caseStudy.image}
                        alt={caseStudy.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* DESCRIPTION */}
                <div className="">
                    <h2 className="text-2xl font-semibold mb-6">
                        About the Project
                    </h2>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        {caseStudy.description}
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Services Provided
                    </h2>

                    <ul className="grid grid-cols-1 gap-4">
                        {caseStudy.services.map((service, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 rounded-xl border border-gray-200 px-5 py-4 text-gray-700 hover:border-gray-300 transition"
                            >
                                <span className="w-2 h-2 bg-gray-900 rounded-full" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
                    <h3 className="text-3xl font-semibold">
                        Have a project in mind?
                    </h3>

                    <button className="px-8 py-4 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                        Let’s Work Together
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyPage;

