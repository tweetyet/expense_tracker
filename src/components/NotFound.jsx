import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-[#FFF1B5] min-h-screen flex items-center">
      <div className="px-4 mx-auto max-w-screen-xl text-center">
        
        {/* 404 */}
        <h1 className="mb-4 text-7xl lg:text-9xl font-extrabold text-[#43302E]">
          404
        </h1>

        {/* Title */}
        <p className="mb-4 text-3xl md:text-4xl font-bold text-[#43302E]">
          Something's missing.
        </p>

        {/* Description */}
        <p className="mb-6 text-lg text-[#43302E]/70">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex text-white bg-[#43302E] hover:bg-[#2f221f] focus:ring-4 focus:ring-[#C1DBE8] font-medium rounded-lg text-sm px-6 py-3 transition"
        >
          Back to Homepage
        </Link>

      </div>
    </section>
  );
};

export default NotFound;