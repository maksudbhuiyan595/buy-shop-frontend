import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-500 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo URL
            alt="Logo"
            className="w-10 h-10 mr-3"
          />
          <span className="text-2xl font-bold">MyWebsite</span>
        </div>

        {/* Centered Menu (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/products" className="hover:underline">
            Products
          </a>
          <a href="/contacts" className="hover:underline">
            Contacts
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a
            href="/profile"
            className="hidden md:block bg-white text-green-500 px-3 py-1 rounded hover:bg-green-200"
          >
            Profile
          </a>
          <a
            href="/cart"
            className="hidden md:flex items-center bg-white text-green-500 px-3 py-1 rounded hover:bg-green-200"
          >
            <span className="mr-2">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.401 2M7 13h10l1.4-7H6.4m0 0L5 6m1.4 7l1.5 8.4m0-8.4h9l1.5 8.4M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-white text-green-500 px-3 py-1 rounded hover:bg-green-200"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="bg-green-600 text-white p-4 md:hidden space-y-4">
          <a href="/" className="block hover:underline">
            Home
          </a>
          <a href="/products" className="block hover:underline">
            Products
          </a>
          <a href="/contacts" className="block hover:underline">
            Contacts
          </a>
          <a
            href="/profile"
            className="block bg-white text-green-500 px-3 py-1 rounded hover:bg-green-200"
          >
            Profile
          </a>
          <a
            href="/cart"
            className="block bg-white text-green-500 px-3 py-1 rounded hover:bg-green-200"
          >
            Cart
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
