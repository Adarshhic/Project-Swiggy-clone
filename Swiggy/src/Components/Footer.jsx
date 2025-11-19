import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
        
        {/* Brand */}
<div className="col-span-2 md:col-span-1 flex flex-col items-start">
  <img
    src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
    alt="Swiggy"
    className="w-24 mb-3"  // 👈 size adjust yaha se kar sakte ho (w-24 = 96px)
  />
  <p className="text-xs text-gray-500">© 2025 Swiggy Limited</p>
</div>


        {/* Company */}
        <div>
          <h2 className="font-semibold mb-3">Company</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-semibold mb-3">Contact us</h2>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-semibold mb-3">Legal</h2>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h2 className="font-semibold mb-3">Life at Swiggy</h2>
          <ul className="space-y-2">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
      </div>

      {/* Social Links + App Links */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between border-t pt-6">
        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-600 text-lg mb-4 md:mb-0">
          <FaLinkedin />
          <FaInstagram />
          <FaFacebook />
          <FaPinterest />
          <FaTwitter />
        </div>

        {/* App Store Links */}
       <div className="flex space-x-4 mt-6 md:mt-0">
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Download on the App Store"
    className="h-12"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Get it on Google Play"
    className="h-12"
  />
</div>

      </div>
    </footer>
  );
}

