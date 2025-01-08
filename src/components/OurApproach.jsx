import React from "react";
import HeadingText from "./HeadingText";

function Card({ imageSrc, title, description }) {
  return (
    <div className="border shadow-md text-center rounded-2xl p-6">
      <img src={imageSrc} alt={title} className="mx-auto mb-4 w-12 h-12" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function OurApproach() {
  const cardData = [
    {
      imageSrc: "/path/to/icon1.png",
      title: "PEOPLE",
      description:
        "A vibrant team of energetic, dynamic, and agile individuals driven by innovation and a passion for excellence.Implement customer loyalty without upgrading your systems.",
    },
    {
      imageSrc: "/path/to/icon2.png",
      title: "PROCESS",
      description:
        "Developing tailored solutions designed to meet your unique requirements in the most effective and efficient way.",
    },
    {
      imageSrc: "/path/to/icon3.png",
      title: "TECHNOLOGY",
      description:
        "Adapting modern technology and intelligent methods to craft personalized solutions that address your specific needs and drive impactful results.",
    },
  ];
  return (
    <section id="ourapproach" className="py-20">
      <div className="container mx-auto px-4">
        <HeadingText className="text-[#175888] text-center mb-4">
          OUR APPROACH
        </HeadingText>
        <p className="text-center mt-4 text-lg text-[#00000066] mb-12">
          We are dedicated to ongoing innovation, simplifying, streamlining, and
          enhancing <br /> our business processes to be efficient and smart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
