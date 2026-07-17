import React from 'react'
import Image from 'next/image';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "aos/dist/aos.css";
import inpharmd_ai from '../../../public/inpharmd_ai.png'
import aws_logo from '../../../public/aws_logo.png'
import drugs_ai from '../../../public/drugs_ai.png'
import pinecone from '../../../public/pinecone.png'
import X_logo from '../../../public/X_logo.png'
import name_img from '../../../public/name.png'
import pat_harper from '../../../public/pat_harper.png'
import ashish from '../../../public/ashish.png'
import paul_brobson from '../../../public/paul_brobson.png'


const CaseStudies = () => {

  return (
    <div className="bg-gradient-to-r from-black-500 to-gray-600 w-full mt-[4rem] flex flex-col">

      <div className='flex w-full flex-col items-center justify-center'>

        <div className="text-[28px] text-white font-bold font-pockota m-[2rem] sm:m-[4rem]" data-aos="fade-in">
          Case Studies & Blogs
        </div>

        {/* 4 cards */}
        <div className='flex items-center justify-center flex-col'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[2rem] p-4 text-white justify-center items-center'>

            {/* card 1 */}
            <div className='flex flex-col h-[24rem] w-[300px] lg:w-[380px] lg:h-[444px] 
            p-[1rem] rounded-2xl justify-center sm:mb-[3rem] bg-white'
              data-aos="fade-up">

              <Image src={inpharmd_ai} alt='inpharamd_ai_img' className='rounded-3xl px-[10px] h-[200px]' />

              <div className=' p-[0.5rem] rounded-xl mx-1 '>
                <div className='text-[16px] text-black font-semibold font-sf_pro_display'>
                  Decoding InpharmD - Revolutionizing Drug Information with AI
                </div>
                <div className='text-[12px] text-justify text-black'>I developed cutting-edge AI architecture with patented technology that seamlessly integrates with our LLM, housing 40 billion parameters with 95% accuracy for our specific needs.
                </div>
              </div>

              <div className=''>
                <a href='https://inpharmd.com/blogs/decoding-inpharmd-worlds-revolutionizing-drug-information-with-ai' target='_blank'>
                  <button className='h-[2.5rem] px-4 py-2 mt-2 ml-1 font-sf_pro_display text-white rounded-full bg-black flex '>
                    Read Case Study
                    <span className='text-white p-1 '>
                      <CallMadeIcon className='h-5 w-5 relative bottom-1' />
                    </span>
                  </button>
                </a>
              </div>

            </div>

            {/* card 2 */}
            <div className='flex flex-col w-[300px] h-[24rem] lg:w-[380px] lg:h-[444px] 
            p-[1rem]  rounded-2xl justify-center sm:mb-[3rem] bg-white'
              data-aos="fade-up">

              <Image src={aws_logo} alt='aws img' className='rounded-3xl px-[10px] h-[200px]' />

              <div className=' p-[0.5rem] rounded-xl mx-1 '>
                <div className='text-[16px] text-black flex font-semibold font-sf_pro_display'>
                  AWS&apos;s Best AI Architecture in Machine Learning Blog</div>
                <div className='text-[12px] text-justify text-black'>AWS has been essential in accelerating the development of Sherlock. We don&apos;t have to worry as much about scaling, systems maintenance, and stability because AWS takes care of it for us. ........</div>
              </div>

              <div className='items-start'>
                <a href='https://aws.amazon.com/blogs/machine-learning/how-inpharmd-uses-amazon-kendra-and-amazon-lex-to-drive-evidence-based-patient-care' target='_blank'>
                  <button className='h-[2.5rem] px-4 py-2 mt-2 ml-1 font-sf_pro_display text-white rounded-full bg-black flex '>
                    Read Case Study
                    <span className='text-white p-1 '>
                      <CallMadeIcon className='h-5 w-5 relative bottom-1' />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* card 3 */}
            <div className='flex flex-col w-[300px] h-[24rem] lg:w-[380px] lg:h-[444px] 
            p-[1rem] rounded-2xl justify-center sm:mb-[3rem] bg-white'
              data-aos="fade-up">

              <Image src={drugs_ai} alt='drugs_ai_img' className='rounded-3xl px-[10px] h-[200px]' />

              <div className=' p-[0.5rem] rounded-xl mx-1 '>
                <div className='text-[16px] text-black font-semibold font-sf_pro_display'>
                  Out of Pocket blog by Nikhil Krishnan
                </div>
                <div className='text-[12px] text-justify text-black'>Nikhil Krishnan, a creator of the healthcare newsletter &quot;Out of Pocket,&quot; with over 40K healthcare provider subscribers, featured our AI and product. </div>
              </div>

              <div className='items-start'>
                <a href='https://www.outofpocket.health/p/clinical-pharmacists-generative-ai-and-inpharmd' target='_blank'>
                  <button className='h-[2.5rem] px-4 py-2 mt-2 ml-1 font-sf_pro_display text-white rounded-full bg-black flex '>
                    Read Case Study
                    <span className='text-white p-1 '>
                      <CallMadeIcon className='h-5 w-5 relative bottom-1' />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* card 4 */}
            <div className='flex flex-col w-[300px] lg:w-[380px] lg:h-[444px] 
            p-[1rem] h-[24rem] rounded-2xl justify-center sm:mb-[3rem] bg-white'
              data-aos="fade-up">

              <Image src={pinecone} alt='pinecone_img' className='rounded-3xl px-[10px] h-[200px]' />

              <div className=' p-[0.5rem] rounded-xl mx-1 '>
                <div className='text-[16px] text-black font-semibold font-sf_pro_display'>
                  Pinecone Case Study
                </div>
                <div className='text-[12px] text-justify text-black'>Pinecone, the world&apos;s largest managed vector database and memory for AI products, appreciated my architecture and featured it on their blog with over 1 million views.
                </div>
              </div>

              <div className=''>
                <a href='https://www.pinecone.io/customers/inpharmd/' target='_blank'>
                  <button className='h-[2.5rem] px-4 py-2 mt-2 ml-1 font-sf_pro_display text-white rounded-full bg-black flex '>
                    Read Case Study
                    <span className='text-white p-1 '>
                      <CallMadeIcon className='h-5 w-5 relative bottom-1' />
                    </span>
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='mt-8 flex items-center w-full justify-center flex-col'>

        <div className='grid grid-rows-2 w-[336px] xl:w-[1170px] p-[1rem]'>
          <div className="text-[12px] font-medium text-[rgb(81,124,101)] text-center"
            data-aos="fade-in">
            TESTIMONIAL
          </div>
          <div className="text-[28px] text-white text-center font-pockota font-bold"
            data-aos="fade-in">
            People Loves My Work
          </div>
        </div>

        {/* 3 cards */}
        <div className='grid grid-cols-1 lg:grid-cols-3 w-[336px] lg:w-[1130px] gap-4 p-4 md:p-0 m-6 md:mx-6 md:mb-[5rem] md:mt-6 text-white '>

          <div className='flex flex-col h-[27rem] w-full p-4 rounded-2xl justify-center  bg-gray-800 border border-white border-opacity-20 text-white'
            data-aos="fade-up">
            <div className=' p-[0.5rem] text-justify rounded-xl text-[18px] flex items-center mt-6'>
              &quot;Tulasee Rao Chintha is an exceptional AI specialist whose innovative work and visionary leadership have made a significant
              impact in the tech industry. His ability to translate complex AI concepts into groundbreaking solutions is remarkable&quot;
            </div>

            <div className='mb-2 px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
              <Image src={ashish} alt='inpharamd ai img' className='rounded-full m-2 w-[70px] h-[70px]' />
              <div className='flex flex-col ml-2 text-left'>
                <span className='font-sf_pro_display text-[16px]'>Ashish Advani</span>
                <span className='font-sf_pro_display text-[20px]'>Founder, InpharmD</span>
              </div>
            </div>

          </div>

          <div className='flex flex-col h-[27rem] w-full p-4 rounded-2xl justify-center  bg-gray-800 border border-white border-opacity-20 text-white'
            data-aos="fade-up">
            <div className=' p-[0.5rem] text-justify rounded-xl text-[18px] flex items-center mt-6'>
              &quot;Tulasee has been part of my organization for several years and has shown himself to be an exceptional contributor to our development organization.
              He has a superior command of his subject matter, works well with his team and always brings creative solutions to bear&quot;
            </div>

            <div className='mb-2 px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
              <Image src={pat_harper} alt='inpharamd ai img' className='rounded-full m-2 w-[70px] h-[70px]' />
              <div className='flex flex-col ml-2 text-left'>
                <span className='font-sf_pro_display text-[16px]'>Pat Harper</span>
                <span className='font-sf_pro_display text-[20px]'>CTO, Catalis</span>
              </div>
            </div>

          </div>

          <div className='flex flex-col h-[27rem] w-full p-4 rounded-2xl justify-center  bg-gray-800 border border-white border-opacity-20 text-white'
            data-aos="fade-up">
            <div className=' p-[0.5rem] text-justify rounded-xl text-[18px] items-center mt-6'>
              Tulasee is a highly intelligent and competent programmer/developer. He is able to work in complex and results-driven cultures and his attention to each and every
              detail in a development project is brilliant. Tulasee has a knack for investigating and identifying.....
              <span className='text-[#BEF6A9]'> more</span>
            </div>

            <div className='mb-2 px-2 py-2 mt-4 text-white rounded-xl flex items-center'>
              <Image src={paul_brobson} alt='paul_brobson img' className='rounded-full m-2 w-[70px] h-[70px]' />
              <div className='flex flex-col ml-2 text-left'>
                <span className='font-sf_pro_display text-[16px]'>Paul Brobson</span>
                <span className='font-sf_pro_display text-[20px]'>Founder, Trusted Sale, Inc.</span>
              </div>
            </div>

          </div>

        </div>


        {/* image with quote */}
        <div className="flex w-fit h-[80vh] lg:w-[1130px] lg:h-[832px] md:bg-cover items-center justify-center rounded-2xl text-white p-4"
          data-aos="fade-up"
          style={{
            backgroundImage: "url('/mountain.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className='flex flex-col'>
            <div className='flex items-center m-4'>
              <Image src={name_img} alt="name_img" className="rounded-full w-[200px] h-[100px]" />
            </div>
            <div className='mt-8 lg:mt-28'>
              <p className="text-[14px] lg:text-[25px] font-bold w-1/2 font-pockota mb-2 justify-center">
                Stay busy building tools for users. Don&apos;t be a boilerplate programmer.
                Instead, build tools for users and other programmers.
                Take historical note of textile and steel industries:
                do you want to build machines and tools, or do you want to operate those machines.
              </p>
              <p className="text-[14px] lg:text-[20px] font-pockota mb-2 item-end">
                — Ras Bodik at the start of his compilers course
              </p>
            </div>
            <div className='mt-2 lg:mt-12'>
              <p className="text-center font-inter font-bold text-[14px] lg:text-[20px]">
                The top of one mountain is always the bottom of another.
              </p>
              <p className="text-center font-inter text-[14px] lg:text-[15px]">
                — Marianne Williamson
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-3 items-center justify-center md:mx-[17%] md:my-[4%] gap-4 py-[1rem] md:pl-[10%]
        text-[15px] text-white border-t border-gray-200'>

        <Link href='https://twitter.com/tulasirao'>
          <div className='flex ml-[2rem]'>
            <Image src={X_logo} alt='tulasee_X' className='text-[#989296] relative w-[17px] h-[17px]' />
            <span className='ml-2'>Twitter</span>
          </div>
        </Link>

        <Link href='https://www.linkedin.com/in/tulaseeraochintha'>
          <div className='flex'>
            <LinkedInIcon className='text-[#989296]' />
            <span className='ml-2'>Linkedin</span>
          </div>
        </Link>

        <Link href='https://github.com/tulaseerao'>
          <div className='flex'>
            <GitHubIcon className='text-[#989296]' />
            <span className='ml-2'>GitHub</span>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default CaseStudies;
