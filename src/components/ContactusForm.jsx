"use client";
import { useState } from "react";
import HeadingText from "./HeadingText";
import { predefinedServices } from "@/constants";

export default function ContactusForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    city: "",
    contactNumber: "",
    message: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "message" && value.trim()) {
      const filteredSuggestions = predefinedServices.filter((service) =>
        service.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else if (name === "message") {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      message: suggestion,
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="pt-20">
      <div className="mx-auto py-24 px-4 bg-[#155987]">
        <HeadingText className="text-white text-center mb-5">
          lets discuss your query
        </HeadingText>
        <p className="text-center text-[#FFFFFFB2]">
          We are here to help you navigate your financial journey with
          confidence. Our team of dedicated <br /> professionals is ready to
          assist you.
        </p>

        <div className="w-full max-w-4xl mx-auto mt-14">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number*"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="message"
                placeholder="Enter your request / message*"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
                  {suggestions.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(service)}
                      className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white">
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              className="min-w-fit px-6 py-3 bg-[#FFD560] hover:bg-[#FFD560]/90 text-gray-900 rounded-md transition-colors duration-200 font-medium">
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
