import { ArrowBigRight, ArrowLeftIcon, ArrowRightIcon, BarChart3, PartyPopper } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mb-30">
      

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

        
        
        <div className="mr-auto place-self-center lg:col-span-7">

         <div className="mb-4"> <button className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[#FFF1B5] text-[#43302E] rounded-full hover:bg-[#C1DBE8] focus:ring-4 focus:ring-[#FFF1B5] transition shadow-md">
            <BarChart3 className="size-5"/>
        Smart Expense Tracker
      </button>
      </div>
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight text-[#43302E] leading-none md:text-5xl xl:text-6xl dark:text-white">
            Track Your Money,
            <span>
              <br />
            </span>
            <h1 className="text-[#C1DBEB] ">Stress Less</h1>
          </h1>
          <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-serif">
            Keep an eye on your spending, save smarter, and grow your money with
            Trackify--the ultimate expense tracker for financial freedom.
            <br />Track Every Penny, Every month, Bill changes.
            No Problem, Just Update the Figures.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <div className="flex flex-wrap gap-4 font-serif text-lg mt-6">
            <Link
             to="/login"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg bg-[#43302E] shadow-md hover:bg-[#2f221f] focus:ring-4 focus:ring-[#FFF1B5] transition"
            >
              Start Tracking <ArrowRightIcon className="ml-2" />
            </Link>

            <Link
              to="/register"
              className="inline-flex shadow-md items-center justify-center px-6 py-3 text-base font-medium text-[#43302E] border border-[#43302E] rounded-lg hover:bg-[#FFF1B5] focus:ring-4 focus:ring-[#FFF1B5] transition"
            >
              See How It Works
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/mockup1.png" className="bg-white" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
