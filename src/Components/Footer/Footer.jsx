import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">About Us</h3>
            <p className="text-sm text-gray-400">
              We are committed to delivering the best products to our customers. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:underline">Products</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-800 rounded"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
