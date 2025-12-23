import SectionHeading from "./SectionHeading";
import { Search, FileText, Brush, TrendingUp } from "lucide-react";
import img from "./sci.png";
import img1 from "./sci1.png";
import img2 from "./sci3.png";
import img3 from "./sci4.png";
import vector from "./Vector.png";
import vector1 from "./Vector (2).png";
import tick from "./tick.png";

export default function HowWeWork() {
  return (
    <section
      id="howwework"
      className="px-6 md:px-10 h-220 md:h-150 py-10 bg-[#00303C] flex flex-col justify-center items-center"
    >
      <div className="w-full h-30 flex justify-center items-center flex-col space-y-3">
        <span className="inline-block px-4 py-1 font-outfit border border-[#C6FF00] text-[#C6FF00] rounded-full font-semibold">
          How We Work
        </span>

        <div className=" ">
          <h1 className="text-2xl s md:text-4xl font-bold leading-tight text-[#ffff] text-center">
            A Simple Process for Big Results
          </h1>
          <p className="text-center text-sm p-2.5 font-extralight leading-tight opacity-70 text-[#ffff] ">
            We keep things clear, transparent, and focused on your success.
          </p>
        </div>
      </div>

      {/* ================= MOBILE SECTION ================= */}
      <div className="md:hidden w-full space-y-6 mt-10">
  {[
    {
      title: "Discover",
      desc: "We learn about your business, goals, and audience.",
    },
    {
      title: "Plan",
      desc: "We craft a digital strategy tailored to your needs.",
    },
    {
      title: "Create",
      desc: "Our team designs, builds, and launches your campaigns.",
    },
    {
      title: "Grow",
      desc: "We track, optimize, and scale what works.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="flex gap-4 border border-[#C6FF00] bg-[#00252C]/50 backdrop-blur-xl p-5 rounded-2xl"
    >
      <img
        src={tick}
        className="w-6 h-6 mt-1 flex-shrink-0"
        alt="tick"
      />

      <div className="space-y-1">
        <h4 className="text-[#CFFF00] font-bold text-base">
          {i + 1}. {item.title}
        </h4>
        <p className="text-gray-300 text-sm leading-tight">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      {/* ================= DESKTOP / TABLET (UNCHANGED) ================= */}
      <div className="hidden md:flex h-fit w-auto lg:w-250 bg-[#00303C] items-center flex-col md:flex-row mt-10">
        {/* Step 1: Discover */}
        <div className="flex flex-row md:flex-col md:gap-0 gap-8 items-center">
          <span>
            <img src={img} alt="" className="m-2 w-12 h-auto md:w-20 lg:w-28" />
          </span>
          <span className="w-auto md:w-30 h-30 md:h-40 bg-[#00303C] md:items-center md:justify-center m-2 flex flex-col">
            <h1 className="font-bold text-[#C6FD07] text-5xl relative md:right-8">
              01
            </h1>
            <h3 className="font-bold text-[#ffff] relative md:right-3.5 text-2xl">
              Discover
            </h3>
            <p className="text-[#ffff] leading-tight text-sm font-extralight">
              We learn about your business, goals, and audience.
            </p>
          </span>
        </div>

        <div className="flex flex-col">
          <img src={vector} alt="" className="hidden lg:block p-2" />
        </div>

        {/* Step 2: Plan */}
        <div className="flex flex-row md:flex-col">
          <span className="w-auto md:w-30 md:h-40 bg-[#00303C] md:items-center md:justify-center m-2 flex flex-col">
            <h1 className="font-bold text-[#C6FD07] text-5xl relative md:right-8">
              02
            </h1>
            <h3 className="font-bold text-[#ffff] relative md:right-8.5 text-2xl">
              Plan
            </h3>
            <p className="text-[#ffff] leading-tight text-sm font-extralight md:w-auto w-60">
              We craft a digital strategy tailored to your needs.
            </p>
          </span>
          <span className="h-full flex justify-center items-center">
            <img
              className="m-2 w-12 h-auto md:w-20 lg:w-28"
              src={img1}
              alt=""
            />
          </span>
        </div>

        <div className="flex flex-col">
          <img src={vector1} alt="" className="hidden lg:block p-2" />
        </div>

        {/* Step 3: Create */}
        <div className="flex flex-row md:flex-col md:gap-0 gap-8 items-center">
          <span>
            <img
              className="m-2 w-12 h-auto md:w-20 lg:w-28"
              src={img2}
              alt=""
            />
          </span>
          <span className="w-auto md:w-30 h-30 md:h-40 bg-[#00303C] md:items-center md:justify-center m-2 flex flex-col">
            <h1 className="font-bold text-[#C6FD07] text-5xl relative md:right-9">
              03
            </h1>
            <h3 className="font-bold text-[#ffff] relative md:right-6.5 text-2xl">
              Create
            </h3>
            <p className="text-[#ffff] leading-tight text-sm font-extralight">
              Our team designs, builds, and launches your campaigns.
            </p>
          </span>
        </div>

        <div className="flex flex-col">
          <img src={vector} alt="" className="hidden lg:block p-2" />
        </div>

        {/* Step 4: Grow */}
        <div className="flex flex-row md:flex-col">
          <span className="w-auto md:w-30 md:h-40 bg-[#00303C] md:items-center md:justify-center m-2 flex flex-col">
            <h1 className="font-bold text-[#C6FD07] text-5xl relative md:right-10">
              04
            </h1>
            <h3 className="font-bold text-[#ffff] relative md:right-8 text-2xl">
              Grow
            </h3>
            <p className="text-[#ffff] leading-tight text-sm font-extralight">
              We track, optimize, and scale what works.
            </p>
          </span>
          <span className="h-full flex justify-center items-center">
            <img
              className="m-2 w-12 h-auto md:w-20 lg:w-28"
              src={img3}
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  );
}
