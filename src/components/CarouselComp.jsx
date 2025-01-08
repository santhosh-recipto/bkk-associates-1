"use client";

import useFreshchat from "@/hooks/useFreshChat";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  const handleOpenFreshchat = useFreshchat();

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      stopOnHover={true}
      preventMovementUntilSwipeScrollTolerance={true}
      infiniteLoop
      autoPlay
      interval={5000}
      className="w-full"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute left-2 top-1/2 z-10 hidden h-20 w-10 -translate-y-1/2 transform items-center justify-center rounded-lg bg-white bg-opacity-30 text-3xl text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-50 md:block">
            &lt;
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute right-2 top-1/2 z-10 hidden h-20 w-10 -translate-y-1/2 transform items-center justify-center rounded-lg bg-white bg-opacity-30 text-3xl text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-50 md:block">
            &gt;
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const indicatorStyle = isSelected ? "indicator-selected" : "indicator";
        return (
          <li
            className={indicatorStyle}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
            aria-selected={isSelected}
          />
        );
      }}>
      {/* Section 1 */}
      {/* <div className="mt-16 flex h-full flex-col items-center justify-start text-white md:mt-8 lg:flex-row lg:justify-center">
        <div className="flex flex-col gap-3 text-center lg:w-1/2 lg:text-left">
          <h2 className="text-base font-medium text-white/80">FOR CUSTOMERS</h2>
          <h2 className="text-2xl font-bold leading-none text-white md:text-3xl xlm:text-4xl 2xl:text-5xl">
            Shop nearby & online <br className="hidden lg:block" /> to{" "}
            <span className="text-[#FFE066]">Earn rewards</span>
          </h2>
          <p className="mt-2 text-sm font-medium text-white/70 md:mt-0 md:text-base lg:mt-2 2xl:text-2xl">
            Enjoy unlimited savings & rewards with every purchase from nearby
            stores or online shopping. Get our app now to start saving cashbacks
          </p>
          <div className="mt-6 hidden gap-4 lg:flex">
            <div className="relative h-20 w-20 rounded-md">
              <Image
                src="/final/brandAssets/qrcode.png"
                alt="qrcode"
                layout="fill"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Scan Now</p>
              <p className="text-base">to get the app instantly</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.recipto.customer_app"
              target="_blank"
              className="relative h-10 w-32 md:h-16 md:w-40">
              <Image
                src="/final/brandAssets/playstore.svg"
                alt="playstore logo"
                layout="fill"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/recipto/id1671420410"
              target="_blank"
              className="relative h-10 w-32 md:h-14 md:w-40">
              <Image
                src="/final/brandAssets/appstore.svg"
                alt="appstore logo"
                layout="fill"
              />
            </a>
          </div>
        </div>
        <div className="carousel-item relative mr-10 mt-8 h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:mr-0 lg:mt-0 lg:h-[450px] lg:w-[400px] 2xl:h-[550px] 2xl:w-[500px] 3xl:h-[640px] 3xl:w-[550px]">
          <Image
            src="/final/brandAssets/landingHero.webp"
            alt="landing hero"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div> */}
      {/* Placeholder Section 2 */}
      <div className="flex h-full flex-col items-center justify-start gap-5 lg:flex-row lg:justify-center lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-3 text-center lg:w-1/2 lg:pl-7 lg:text-left">
          <h2 className="text-base font-medium uppercase text-white/80 md:text-xl 2xl:text-2xl">
            campaign feature
          </h2>
          <h2 className="text-2xl font-bold text-white md:text-3xl xlm:text-3xl 2xl:text-4xl">
            How our client ‘NativePet’ used “
            <span className="text-[#FFE066]">Cashback only once</span>” to boost
            sales & get customer data?
          </h2>
          <p className="mt-2 text-sm font-medium text-white/70 md:mt-0 md:text-base lg:mt-2 2xl:text-2xl">
            NativePet is a multi-location store with branches in Hyderabad that
            aimed to gather customer feedback and boost sales. Check how they
            did it.
          </p>
          <div className="mt-7 flex items-center justify-center gap-4 font-medium lg:justify-start 2xl:text-lg">
            <button
              onClick={handleOpenFreshchat}
              className="w-full rounded-md bg-[#7E7D82] p-2 text-white hover:bg-[#FBC334] sm:w-auto xl:px-6 2xl:py-3">
              Join for FREE
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=Okkku_IW7u8",
                  "_blank"
                )
              }
              className="w-full rounded-md bg-white p-2 hover:bg-white/80 sm:w-auto xl:px-4 2xl:px-6 2xl:py-3">
              Watch Demo
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[550px] xl:w-[450px] xlm:w-[500px] 1xl:w-[550px] 3xl:w-[700px]">
          <iframe
            src="https://www.youtube.com/embed/Okkku_IW7u8?si=L45VDjuxD44B0u9A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="landing-video-iframe mx-auto aspect-video h-full rounded-xl"></iframe>
        </div>
      </div>
      {/* Placeholder Section 3 */}
      <div className="flex h-full flex-col items-center justify-start gap-5 lg:flex-row lg:justify-center lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-3 text-center lg:w-1/2 lg:pl-7 lg:text-left">
          <h2 className="text-base font-medium uppercase text-white/80 md:text-xl 2xl:text-2xl">
            campaign feature
          </h2>
          <h2 className="text-2xl font-bold text-white md:text-3xl xlm:text-3xl 2xl:text-4xl">
            How our client ‘NativePet’ used “
            <span className="text-[#FFE066]">Cashback when low sales </span>” to
            boost sales & sold store coupons for customers?
          </h2>
          <p className="mt-2 text-sm font-medium text-white/70 md:mt-0 md:text-base lg:mt-2 2xl:text-2xl">
            NativePet is a multi-location store with branches in Hyderabad that
            aimed to gather customer feedback and boost sales. Check how they
            did it.
          </p>
          <div className="mt-7 flex items-center justify-center gap-4 font-medium lg:justify-start 2xl:text-lg">
            <button
              onClick={handleOpenFreshchat}
              className="w-full rounded-md bg-[#7E7D82] p-2 text-white hover:bg-[#FBC334] sm:w-auto xl:px-6 2xl:py-3">
              Join for FREE
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=VeAriZjiqro",
                  "_blank"
                )
              }
              className="w-full rounded-md bg-white p-2 hover:bg-white/80 sm:w-auto xl:px-4 2xl:px-6 2xl:py-3">
              Watch Demo
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[550px] xl:w-[450px] xlm:w-[500px] 1xl:w-[550px] 3xl:w-[700px]">
          <iframe
            src="https://www.youtube.com/embed/VeAriZjiqro?si=GGN1Elb9OqKbBDHl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="landing-video-iframe mx-auto aspect-video h-full rounded-xl"></iframe>
        </div>
      </div>
    </Carousel>
  );
}
