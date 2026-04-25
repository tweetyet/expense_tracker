import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Logo + Description */}
          <div>
            <a href="/" className="flex items-center mb-3">
              <img
                src="/trackifyLogo.png"
                className="mr-3 h-8"
                alt="Trackify Logo"
              />
              <span className="text-2xl font-bold font-serif dark:text-white">
                Trackify
              </span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Track smarter. Spend wiser.
            </p>
            <p className="text-xs mt-2 text-gray-400">
              Built for better financial habits 💸
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Product
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/dashboard" className="hover:text-[#A16207] transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/reports" className="hover:text-[#A16207] transition">
                  Reports
                </a>
              </li>
              <li>
                <a href="/add-expense" className="hover:text-[#A16207] transition">
                  Add Expense
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Connect
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-[#A16207] transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A16207] transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A16207] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-[#A16207] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A16207] transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 <span className="font-semibold">Trackify</span>. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:mt-0 space-x-5">
            
            {/* GitHub */}
            <a href="https://github.com/tweetyet" className="text-gray-500 hover:text-[#A16207] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 
                  2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                  0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343 
                  -3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908
                  -.62.069-.608.069-.608 1.003.07 1.531 1.032 
                  1.531 1.032.892 1.53 2.341 1.088 2.91.832.092
                  -.647.35-1.088.636-1.338-2.22-.253-4.555-1.113
                  -4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103
                  -.253-.446-1.272.098-2.65 0 0 .84-.27 
                  2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 
                  1.705.115 2.504.337 1.909-1.296 2.747-1.027 
                  2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 
                  1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 
                  4.943.359.309.678.92.678 1.855 0 1.338-.012 
                  2.419-.012 2.747 0 .268.18.58.688.482A10.019 
                  10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tweetyet-frontend/" className="text-gray-500 hover:text-[#A16207] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.98h4.5V24H.24zM8.34 8.98h4.31v2.05h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.36 2.98 5.36 6.85V24h-4.5v-6.93c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24h-4.5z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;