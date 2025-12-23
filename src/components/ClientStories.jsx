import React from "react";
import { Play } from "lucide-react";
import bg from "./test_bg.jpg";
import SlidingLogos from "./Sliding_logos";

// Video Card Component
function VideoCard({ videoSrc, rotate }) {
  return (
    <div
      className={`relative w-56 h-80 shadow-black shadow-lg md:w-60 md:h-[400px] overflow-hidden rounded-xl bg-[#0F3F46] ${rotate}`}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <button className="absolute top-3 right-3 bg-[#C6FD07] text-black p-2 rounded-full">
        <Play size={18} />
      </button>
    </div>
  );
}

// Cloudinary videos
const video1 =
  "https://res.cloudinary.com/dyrncskbs/video/upload/hero_1_v949eu.mp4";
const video2 =
  "https://res.cloudinary.com/dyrncskbs/video/upload/hero_3_pjgr51.mp4";

export default function ClientTestimonials() {
  return (
    <section
      className="relative w-full text-white px-6 md:px-16 py-10 bg-cover bg-center bg-no-repeat overflow-x-hidden scroll-m-0"
      style={{ backgroundImage: `url(${bg})` }}
      id="clientstories"
    >
      {/* BG overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/scribbles.png')] bg-cover bg-center" />

      {/* Heading */}
      <div className="relative flex flex-col items-center justify-center text-center z-20 mb-10 ">
        <div className="inline-block bg-[#C6FD07] text-[#00303C] font-bold text-xl md:text-5xl px-7 md:px-15 py-1 md:py-3 rotate-4 relative top-2 md:top-25 z-30">
          TESTIMONIALS
        </div>

       <h1 className="text-[80px]  md:text-[150px] lg:text-[200px] xl:text-[300px] font-bold leading-none tracking-tight transform scale-y-125 sm:scale-y-110 md:scale-y-100 z-10 -mt-4
      md:mt-4  ">
  CLIENTS
</h1>

      </div>

      {/* MAIN CONTAINER — CENTERED */}
      <div className="relative bottom-6 md:bottom-0  z-10 max-w-[1340px]  mx-auto   ">
        {/* MOBILE */}
        <div className="block lg:hidden text-center mb-10 px-2">
          <h2 className="text-xl md:text-3xl  font-bold leading-tight  ">
            Real Stories. Real Results. 
          </h2>

          <p className="text-gray-300 text-xs  leading-tight ">
            Hear how our clients transformed their businesses with HayViral’s
            creative strategies and intelligent storytelling.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <SlidingLogos />
          </div>
        </div>

        {/* MOBILE VIDEOS */}
        <div className="flex flex-col gap-8 w-full justify-center items-center lg:hidden">
          <VideoCard videoSrc={video1} />
          <VideoCard videoSrc={video2} />
        </div>

        {/* DESKTOP WRAPPER */}
        <div className="w-full max-w-[1440px] mx-auto flex justify-center items-center">
         <div className="hidden lg:grid lg:grid-cols-3 gap-x-16 max-w-[1340px] justify-center items-center  gap-28">

            {/* Videos */}
           <div className="flex justify-center items-center w-140 lg:mr-16">

              <div className="z-10 pt-2">
                <VideoCard videoSrc={video1} rotate="lg:-rotate-4" />
              </div>
              <VideoCard videoSrc={video2} />
            </div>

            {/* Text */}
            <div className="lg:col-span-2 bg-[#0B3C45]/60 backdrop-xl border border-[#C6FD07] p-10 rounded-xl max-w-lg mx-auto relative left-20 ">
              <div className="inline-block text-xs font-semibold border border-[#C6FD07] text-[#C6FD07]  px-4 py-1 rounded-full mb-4 ">
                Clients Testimonials
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-13">
                Real Stories. Real{" "}
                <span className="text-[#C6FD07]">Results.</span>
              </h2>

              <p className="text-gray-300 text-xl leading-tight max-w-2xl">
                Hear how our clients transformed their businesses with HayViral’s
                creative strategies and intelligent storytelling.
              </p>

              <div className="mt-10">
                <SlidingLogos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
