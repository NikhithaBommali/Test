'use client'
import React, { useEffect } from "react";
import CaseStudies from "./components/CaseStudies";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import sir from '../../public/tulasee_sir_img.jpg';
import logo from '../../public/yc_logo.png';
import img from '../../public/645.png';
import atl from '../../public/atl.png';
import qlarant from '../../public/qlarant.png';

export default function Home() {

  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#151718] cursor-default">

      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-[#151718]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 text-white">
          <span className="font-pockota text-[18px] sm:text-[20px]">Tulasee Rao Chintha</span>
          <nav className="flex items-center gap-5 text-[14px] font-inter">
            <Link href="/" className="transition hover:text-[#BEF6A9]">Home</Link>
            <Link href="/agentic-ai" className="transition hover:text-[#BEF6A9]">Agentic AI</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col w-full items-center justify-center text-white p-[55px] sm:p-[75px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/bg_img.png')"
        }}>
        <Image src={sir} alt="img" className="rounded-full h-[90px] w-[90px] bg-slate-800" data-aos="fade-in" />
        <p className="font-pockota md:text-[32px] text-[24px] sm:text-[28px] my-2" data-aos="fade-out">Tulasee Rao Chintha</p>
        <p className="text-[20px] font-pockota mb-[20px]" data-aos="fade-in">
          <span>
            Co-founder and CTO of InpharmD
          </span>
          <span>  | </span>
          <span>
            YC W21
          </span>
        </p>
        <p className="text-center font-inter text-[14px] md:text-[20px] md:w-[70%]" data-aos="fade-up">
          A real AI Specialist (wrote ~10k lines of AI code) | Raised $12 millions | AI Pending Patent | LLM&apos;s Expert - Fine-tuned a 40-billion-parameter open-source LLM.
        </p>
      </div>

      <div className="bg-[#0003] p-4 flex items-center justify-center ">
        <div className="flex flex-col text-white w-full md:w-[60%] 2xl:max-w-[1280] justify-center items-center">
          <p className="text-[28px] md:text-[32px] font-pockota my-[2rem] text-center" data-aos="fade-in">My Journey </p>

          <div data-aos="fade-up" className="w-[80%] md:w-full">
            <p className="text-[20px] md:text-[22px] font-sf_pro_display font-semibold my-2 ">
              👨‍🌾 Farmer to Pharma CTO
            </p>
            <p className="text-[14px] text-justify md:text-[18px] text-[] font-inter my-4">
              My journey began in a tiny sweet green little village in Southern India, aiming to farm. But life steered me towards engineering, and eventually, I became the CTO at InpharmD. Grateful for this unexpected path that led me to where I am today.
            </p>
            <p className="text-[14px] md:text-[18px] font-inter my-4">
              My journey spans tech roles in India and Corporate America, leading to co-founding InpharmD.
            </p>
            <p className="text-[14px] text-justify md:text-[18px] font-inter my-4">
              Built an AI-driven platform that transforms healthcare information management, offering precise responses to healthcare professionals. With evidence-based insights, we&apos;re making waves in the sector by fostering innovation and driving efficiency like never before, providing them with succinct summaries of literature.
            </p>
          </div>

          <div data-aos="fade-up" className="w-[80%] md:w-full">
            <p className="text-[20px] md:text-[22px] font-sf_pro_display font-semibold my-2 ">
              💰Humble beginnings from zeros to billions
            </p>
            <p className="text-[14px] text-justify md:text-[18px] font-inter my-4">
              In 2018, I co-founded InpharmD. With seed funding of $8.05M, we quickly reached series A, boasting a revenue between $4-8M. We now have a vibrant community of over 50k users, including 10k active daily users.
            </p>
          </div>

          <div className="mb-2 w-[80%] md:w-full" data-aos="fade-up">
            <p className="text-[20px] md:text-[22px] font-sf_pro_display font-semibold my-2 ">
              👨‍💼 Investor onboard
            </p>
            <p className="text-[14px] text-justify md:text-[18px] font-inter my-4">
              Our recent funding round was backed by some of the most prestigious investors - 645 Ventures, Atlanta Ventures, Y Combinator, & Qlarant Capital
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 my-4 items-center justify-center gap-4 xl:gap-[4rem] rounded-xl
           bg-gradient-to-br from-[#1d1c1d] 
          to-[#353536] bg-opacity-50 py-[2rem] px-[2rem] md:px-[4rem] w-full" data-aos="fade-up">

            <a href="https://www.ycombinator.com/companies/inpharmd" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-4 xl:p-[2rem] rounded-xl
            bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src={logo} alt="img" className="rounded-full w-[50px] h-[50px] bg-slate-800" />
            </a>

            <a href="https://645ventures.com/homepage-databases/inpharmd" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-4 xl:p-[2rem] rounded-xl
            bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src={img} alt="img" className="rounded-full w-[50px] h-[50px] bg-slate-800" />
            </a>

            <a href="https://www.atlantaventures.com/news/why-we-invested-in-inpharmd" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-4 xl:p-[2rem] rounded-xl
            bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src={atl} alt="img" className="rounded-full w-[50px] h-[50px] bg-slate-800" />
            </a>

            <a href="https://www.qlarant.com/about/news/qlarant-capital-becomes-investor-in-inpharmd/" target="_blank" className='flex items-center justify-center border-[2px] border-gray-700 p-4 xl:p-[2rem] rounded-xl
            bg-gradient-to-b from-[#252427] to-[#424242] shadow-xl cursor-pointer'>
              <Image src={qlarant} alt="img" className="rounded-full w-[50px] h-[50px] bg-slate-800" />
            </a>

          </div>

          <div className="mb-[3rem] w-[80%] md:w-full" data-aos="fade-up">
            <p className="text-[20px] md:text-[22px] font-sf_pro_display font-semibold my-6 ">
              👨‍💼 InpharmD CTO
            </p>
            <p className="text-[14px] text-justify md:text-[18px] font-inter my-4">
              As CTO and Co-founder of InpharmD, I drive technology development, harnessing AI for enhanced patient care and healthcare provider support. I lead web and AI initiatives, processing 30M medical papers, shaping industry advancements.
            </p>
            <p className="text-[14px] text-justify md:text-[18px] font-inter mb-6">
              My focus spans technical strategy, team leadership, and product delivery, ensuring top-notch solutions. Committed to healthcare and AI evolution, I aim to sustain impactful innovation. Enthusiastic about our team and InpharmD&apos;s vision, I&apos;m eager to propel positive change in healthcare through cutting-edge approaches.
            </p>
          </div>

        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center text-white p-[55px] sm:p-[75px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/bg_img.png')"
        }}>
        <div className="flex flex-col w-full md:w-[60%] items-center justify-center">
          <span className="text-[28px] md:text-[32px] font-pockota my-[2rem]" data-aos="fade-in">About InpharmD</span>
          <p className="text-[14px] text-justify md:text-[20px] font-inter my-[2rem]" data-aos="fade-up">
            <span className="text-orange-600"> InpharmD </span>  answers complex questions about drugs by using a combination of generative AI and a clinical pharmacist. Clinicians can ask questions about whether a drug is right to give a patient, dosage and side effect questions, and what to do if a drug is not on hand. Hospital committees (P&T) that decide which drugs to use can generate reports on cost-effectiveness of drugs.
          </p>

          <p className="text-[14px] text-justify md:text-[20px] font-inter mb-[2rem]" data-aos="fade-up">
            “My co-founder Tulasee led the way in AI advancements, helping us transcribe PDFs faster than our pharmacists, though still refining accuracy. With 5,000 study abstracts as our foundation, we&apos;ve fine-tuned algorithms to match our abstracts. Testing at 94% against humans, we aim for 100% accuracy in medical data reliability. Introducing Sherlock, our answer to missed opportunities like Watson. Partnering with ASHP, we&apos;re integrating 1,300 vetted drug monographs, enabling Sherlock to provide precise answers at the point of care. Excited to revolutionize healthcare decisions with seamless AI integration”
          </p>

          {/* Video asset is unavailable in the current public/ directory; keep the section without a broken media reference */}
          <div className="flex items-center bg-[rgb(227,247,248)] rounded-xl justify-center mx-auto my-[2rem] px-6 py-10" data-aos="fade-out">
            <p className="text-center font-inter text-[14px] md:text-[18px] text-black">
              InpharmD product demo preview
            </p>
          </div>

          <button className="font-sf_pro_display border-[4px] font-medium text-[12px] lg:text-[24px] bg-white text-black rounded-xl px-4 py-2 shadow-xl"
            data-aos="fade-in" >
            <a href="https://news.ycombinator.com/item?id=25957775" target="_blank">
              Patented AI Algorithm
            </a>
          </button>
        </div>
      </div>

      <CaseStudies />
    </div>

  );
}
