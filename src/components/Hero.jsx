"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Your Trusted Partner in Business Compliance",
    subtitle:
      "From tax filings to financial audits, we ensure your business stays compliant and ahead of the curve.",
    bgImage: "/carousel-3.jpg",
    buttons: [
      {
        text: "GET IN TOUCH",
        href: "#contact",
        primary: true,
      },
      {
        text: "FIND OUT MORE",
        href: "#services",
        primary: false,
      },
    ],
  },
  {
    id: 2,
    title: "Scaling New Heights with Expert Guidance",
    subtitle:
      "We handle the complexities so you can focus on growing your business.",
    bgImage: "/carousel-2.jpg",
    buttons: [
      {
        text: "GET IN TOUCH",
        href: "#contact",
        primary: true,
      },
      {
        text: "FIND OUT MORE",
        href: "#services",
        primary: false,
      },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000); // Change slide every 5 seconds

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleButtonClick = (href) => {
    window.location.href = href;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background images */}
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div
                className="relative h-[600px] md:h-[850px] w-full bg-cover bg-center transition-opacity duration-500"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contrast overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Content layer - Responsive positioning */}
      <div className="absolute inset-0 z-[2] flex sm:items-center items-start sm:justify-center">
        <div className="px-4 md:px-8 text-center w-full sm:mt-0 mt-[15%]">
          <div className="max-w-5xl mx-auto">
            <h1
              className="text-3xl uppercase sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 select-text transition-all duration-500"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              tabIndex={0}>
              {slides[currentSlide].title}
            </h1>
            <p
              className="text-base uppercase sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto select-text leading-relaxed transition-all duration-500"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
              tabIndex={0}>
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              {slides[currentSlide].buttons.map((button, idx) => (
                <button
                  key={idx}
                  onClick={() => handleButtonClick(button.href)}
                  className={`
                    w-48 sm:w-auto px-8 py-3 sm:py-4 rounded-md font-medium transition-all duration-300
                    text-base sm:text-lg select-text shadow-lg hover:scale-105
                    ${
                      button.primary
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "bg-transparent border-2 border-white text-white hover:bg-white/20"
                    }
                  `}
                  tabIndex={0}
                  aria-label={button.text}>
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[3] p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
        onClick={scrollPrev}
        aria-label="Previous slide"
        tabIndex={0}>
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>

      <button
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[3] p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
        onClick={scrollNext}
        aria-label="Next slide"
        tabIndex={0}>
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
    </div>
  );
}
