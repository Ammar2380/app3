import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import img1 from "./calendly.png";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const serviceRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nameRef.current?.value.trim() ||
      !emailRef.current?.value.trim() ||
      !phoneRef.current?.value.trim() ||
      !serviceRef.current?.value ||
      !messageRef.current?.value.trim()
    ) {
      nameRef.current?.focus();
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_iomgprj",
        "template_upwjzbk",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          service: serviceRef.current.value,
          message: messageRef.current.value,
        },
        "Jz9bj5v9gJJlcavUj"
      )
      .then(() => {
        setLoading(false);
        setSent(true);

        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        serviceRef.current.value = "";
        messageRef.current.value = "";

        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
 <section
  id="contact"
  className="scroll-mt-10 bg-[#00303C] text-white py-28 px-6"
>
  <div className="max-w-[1280px] mx-auto">

    {/* DESKTOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-24">


      {/* LEFT CONTENT */}
      <div className="max-w-xl space-y-2">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
         Ready to Grow Your Business Online?
        </h1>

        <p className="text-white/70 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt quaerat pariatur ut temporibus nobis labore voluptatibus. Obcaecati, quidem totam quaerat fugit voluptatem nobis atque cupiditate voluptatibus. Expedita, at temporibus?
        </p>

       <button >
                    <a
                                href="https://calendly.com/ajaykumarchouhan/hayviral-free-discovering-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#00303C] mt-6 bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex flex-row justify-center items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition text-sm"
                              >
                                 Book a Free Discovery Call
                                <img className="h-5" src={img1} alt="call-icon" />
                              </a>
                   
                  </button>
                   
      </div>

      {/* RIGHT FORM CARD */}
   <form
  onSubmit={handleSubmit}
  className="border border-[#C6FD07] rounded-2xl px-5 py-3 h-full flex flex-col justify-between"
>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">

          <input
            ref={nameRef}
            type="text"
            placeholder="Your Name*"
            className="p-3 rounded-lg bg-transparent border text-sm border-white/30 text-white focus:outline-none focus:border-[#C6FD07]"
          />

          <input
            ref={emailRef}
            type="email"
            placeholder="Your Email*"
            className="p-3 rounded-lg bg-transparent border text-sm border-white/30 text-white focus:outline-none focus:border-[#C6FD07]"
          />

          <input
            ref={phoneRef}
            type="tel"
            placeholder="Your Phone*"
            className="p-3 rounded-lg bg-transparent border text-sm border-white/30 text-white focus:outline-none focus:border-[#C6FD07]"
          />

          <select
            ref={serviceRef}
            className="p-3 rounded-lg bg-transparent border border-white/30 text-white focus:outline-none focus:border-[#C6FD07] text-sm"
          >
            <option value="" className="text-black">Services*</option>
            <option className="text-black">Graphic Design</option>
            <option className="text-black">Web Development</option>
            <option className="text-black">Digital Marketing</option>
          </select>

          <textarea
            ref={messageRef}
            placeholder="Your Message"
            className="md:col-span-2 p-4 h-36 rounded-lg bg-transparent border border-white/30 text-white resize-none focus:outline-none focus:border-[#C6FD07]"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-[#C6FD07] text-[#00303C] py-2 rounded-full font-semibold hover:scale-105 transition text-base"
          >
            {loading ? "Sending..." : "Let’s Talk"}
          </button>

          {sent && (
            <p className="md:col-span-2 text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
        </div>
      </form>

    </div>
  </div>
</section>

);

}
