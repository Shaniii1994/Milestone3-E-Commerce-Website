import React from "react";
import Image from "next/image";

const Offers = () => {
  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className="w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('bg.png')" }}
      >
        {/* Overlay Content */}
        <div className="flex items-center justify-center w-full h-full bg-gray-50 bg-opacity-50">
          <div className="text-center text-blue-900 px-4 py-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Get Latest Update By Subscribing <br />
              Our Newsletter
            </h2>

            {/* Shop Now Button */}
            <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="my-12"></div>

      {/* Brand Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-10 px-4">
        <Image
          src="/brand.png"
          alt="Brand"
          width={400}
          height={400}
          className="sm:w-[200px] md:w-[300px] mt-10 object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;
