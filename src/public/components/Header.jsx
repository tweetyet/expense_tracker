import React from "react";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";

const Header = () => {
  const [user] = useCookie("user");
  return (
    <header className="border border-[#43302E] sticky top-0 ">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/trackifyLogo.png"
              className="mr-3 size-14 rounded-2xl"
              alt="Trackify Logo"
            />
            <span className="self-center text-2xl font-semibold font-serif whitespace-nowrap text-[#43302E]">
              Trackify
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center lg:order-2">
            {!user ? (
              <>
                {/* Login */}
                <Link
                  to="login"
                  className="text-[#43302E] hover:bg-[#C1DBE8] focus:ring-4 focus:ring-[#C1DBE8] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2"
                >
                  Log in
                </Link>

                {/* Register */}
                <Link
                  to="register"
                  className="text-white bg-[#43302E] hover:bg-[#2f221f] focus:ring-4 focus:ring-[#C1DBE8] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2"
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="text-white bg-[#43302E] hover:bg-[#2f221f] focus:ring-4 focus:ring-[#C1DBE8] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2"
              >
                {`${JSON.parse(user).name}'s Dashboard`}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-[#43302E] rounded-lg lg:hidden hover:bg-[#C1DBE8] focus:ring-2 focus:ring-[#C1DBE8]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h12M3 10h12M3 15h12" />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["Home", "About Us", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item.toLowerCase().replace(" ", "-")
                    }
                    className="block py-2 text-[#43302E] hover:text-[#C1DBE8]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
