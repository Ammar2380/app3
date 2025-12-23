import { useEffect, useState, useRef } from "react";
import { DynamicFrameLayout } from "./dynamic-frame-layout";
import bg from "./test_bg.jpg";

// Cloudinary video URLs
const demoFrames = [
  { id: 1, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Digital_Marketing_voyuzg.mp4" },
  { id: 2, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Branding_1_erq2ce.mp4" },
  { id: 3, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Intro_weodxg.mp4" },
  { id: 4, video: "https://res.cloudinary.com/dyrncskbs/video/upload/ui_design_2_ng7jo2.mp4" },
  { id: 5, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Content_Creation_wi0nf4.mp4" },
];

// Cloudinary image URLs
const sliderImages = [
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_1_depynw.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_2_nv40lq.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-10_ry5unb.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-11_g7elu5.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-5_n1o4lt.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/9_o2dyyc.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-6_vjmreu.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/7_jzambj.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_3_vpsus3.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-3_lej6iw.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-2_btmuin.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-1_zakpty.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/6_uvgw1g.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_4_upl12c.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_5_xid6we.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/8_cxffvu.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/10_hgg2zu.jpg"
];

export default function DemoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openVideo, setOpenVideo] = useState(null); // fullscreen video
  const videoRef = useRef(null);

  // Auto slider for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Open video in fullscreen modal
  const handleVideoClick = (video) => {
    setOpenVideo(video);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
    }, 100);
  };

  // Close modal
  const handleClose = (e) => {
    if (e.target === e.currentTarget) setOpenVideo(null);
  };

  // Desktop frames with click handlers
  const desktopFrames = demoFrames.map(f => ({
    ...f,
    onClick: () => handleVideoClick(f.video)
  }));

  return (
    <section className="scroll-m-1" id="portfolio">
      <div
        className="w-full  px-5 md:px-10 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Portfolio Heading */}
        <div className="relative flex flex-col items-center justify-center text-center z-20 mb-10">
          <div className="inline-block bg-[#C6FD07] text-[#00303C] font-bold text-xl md:text-5xl px-5 md:px-16   md:top-20 md:py-3 rotate-4 relative z-30">
            OUR WORK
          </div>
  <h1 className="text-[54px] text-white  md:text-[150px] lg:text-[200px] xl:text-[225px] font-bold leading-none tracking-tight transform scale-y-125 sm:scale-y-110 md:scale-y-100 z-10 -mt-4 md:mt-4 ">
  PORTFOLIO
</h1>



          <div className="block md:block text-center  mt-4 px-5">
  <h2 className="text-lg  w-70 md:w-200  md:text-5xl font-bold text-white">
    Big Agency Skills. Business Care.
  </h2>
  <p className="text-gray-300 text-sm md:text-lg ">
    We’re not just another digital agency, we’re a partner who gets it.
  </p>
</div>

        </div>

        {/* Video / Slider Section */}
        <div className="rounded-2xl  overflow-hidden p-3 md:p-5">
          {/* Max-width wrapper for desktop & large screens */}
          <div className="max-w-[1280px] mx-auto w-full">
            {/* Desktop Layout */}
           {/* Desktop Layout */}
<div className="hidden md:block w-full relative   max-h-[900px] h-auto">
  <DynamicFrameLayout
    frames={desktopFrames}
    sliderImages={sliderImages}
    hoverSize={6}
    gapSize={8}
  />
</div>


            {/* Mobile Layout */}
            <div className="block md:hidden relative   flex-col space-y-4 ">
              {demoFrames.map((frame) => (
                <div key={frame.id} onClick={() => handleVideoClick(frame.video)}>
                  <video
                    src={frame.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full min-h-[50px] relative object-cover rounded-xl cursor-pointer"
                  />
                </div>
              ))}

              {/* Auto Image Slider at the bottom */}
              <div className="w-full h-50 rounded-xl overflow-hidden border border-gray-700">
                <DynamicFrameLayout.MobileSlider images={sliderImages} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Text */}
      
      </div>

      {/* Fullscreen Video Modal */}
      {openVideo && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-2xl border-[6px]  shadow-[0_0_25px_#FB6B03] pointer-events-none"></div>
            <video
              ref={videoRef}
              src={openVideo}
              controls
              autoPlay
              className="relative max-h-[85vh] max-w-[85vw] rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
