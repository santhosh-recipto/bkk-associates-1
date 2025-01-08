"use client";

import { useState } from "react";
import Image from "next/image";
import HeadingText from "./HeadingText";

const ServiceCard = ({ title, items, expandedItems = [], icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border group hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 ease-in-out cursor-pointer">
      <div className="h-20 w-20 relative group-hover:scale-110 transition-transform duration-500">
        <Image
          src={`/${icon}`}
          alt={title}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#175888] transition-colors duration-300">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 flex items-start transform transition-transform duration-300">
            <span className="text-sm">• {item}</span>
          </li>
        ))}

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          {expandedItems.map((item, index) => (
            <li
              key={`expanded-${index}`}
              className="text-gray-600 flex items-start transform transition-transform duration-300">
              <span className="text-sm">• {item}</span>
            </li>
          ))}
        </div>
      </ul>

      {expandedItems.length > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="flex items-center gap-2 text-[#175888] hover:text-blue-700 text-sm font-medium mt-4 transition-all duration-300 hover:gap-3">
          <span className="relative">
            {isExpanded ? "Show Less..." : "Read More..."}
          </span>
        </button>
      )}
    </div>
  );
};

export default function Services() {
  const services = [
    {
      title: "Accounts Outsourcing",
      icon: "accounts-outsourcing.png",
      items: [
        "Accounts Outsourcing Services",
        "Payroll Management Services",
        "Compilation of Final Accounts",
      ],
      expandedItems: [
        "Preparation of Financial Statements",
        "All Statutory Compliance Services",
      ],
    },
    {
      title: "Auditing and Attest Services",
      icon: "audit.png",
      items: [
        "Statutory Audit Services",
        "Internal Audit/Concurrent Audit Services",
        "Certification and Attest functions",
      ],
      expandedItems: [
        "Special Audit Services",
        "Fixed Assets Audit",
        "Stock Audit",
        "IT System Audit",
      ],
    },
    {
      title: "Company Formation and Corporate Law Advisory",
      icon: "company-formation-and-law.png",
      items: [
        "Company Formation Services",
        "IPO Advisory Services",
        "Mergers & Acquisition Services",
      ],
      expandedItems: ["Company Support Services"],
    },
    {
      title: "Management Consultancy Services",
      icon: "management-consultancy.png",
      items: [
        "Stock Management Services",
        "Fixed Asset Management Services",
        "Sales Accounts Management",
      ],
      expandedItems: [
        "MIS Reporting Services",
        "Budget Forecasting Services",
        "Financial management planning and financial policy determination",
        "Costing and Accounting System Design",
        "Advising management on principles of organization and methods for effective delegation and planning of work",
        "Appraisal of personnel policies and practices",
        "Business Policy, corporate planning, organization development, growth and diversification",
      ],
    },
    {
      title: "Taxation",
      icon: "tax.png",
      items: [
        "Income Tax Audit Services",
        "Income Tax planning and Consultancy services",
        "GST Audit & Consultancy",
      ],
      expandedItems: [
        "Withholding Taxation as per clauses of DTAA with various countries",
        "Transfer Pricing Studies & Certification services",
        "Tax Representation Services",
        "Appeals Before Appellate Authorities",
        "GHMC- Service tax case handled and appeared before Appellate Tribunal",
      ],
    },
    {
      title: "Others",
      icon: "others.png",
      items: [
        "Corporate Training",
        "Statutory Registrations",
        "Trust and Society Formation",
      ],
      expandedItems: [
        "Preparation of Agreements and MOUs",
        "Consultancy for Organizational Policy",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <HeadingText className="text-[#175888] text-center mb-4">
          What do we offer?
        </HeadingText>
        <p className="text-center mt-4 text-lg text-[#00000066] mb-12">
          From tax planning to business advisory, our chartered accountants
          deliver precision
          <br />
          and expertise to simplify your financial journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
