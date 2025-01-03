import Image from "next/image";
import React from "react";

const SidebarPage = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 gap-6 max-w-6xl mx-auto px-4">
      {/* Sidebar Section */}
      <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        {/* Product Brand */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-[#151875]">Product Brand</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                <span>Coaster Furniture</span>
                 </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                <span>Fusion Dot High Fashion</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                <span>Unique Furnitture Restor</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                <span>Dream Furnitture Flipping</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                <span>Young Repurposed</span>
                </label>
                <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                <span>Green DIY furniture</span>
              </label>
              </li>
          </ul>
        </div>

        {/* Discount Offers */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Discount Offers</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>20% Cashback</span>
              </label>
              <label className="flex items-center space-x-2 accent-[#FFDBF1]">
                <input type="checkbox" className="form-checkbox" />
                <span>5% Cashback Offer</span>
              </label>
              <label className="flex items-center space-x-2 accent-[#FFDBF1]">
                <input type="checkbox" className="form-checkbox" />
                <span>25% Discount Offer</span>
              </label>
            </li>
          </ul>
        </div>

 {/* Rating Items */}
 <div className="mb-6">
  <h3 className="font-medium mb-2">Rating Items</h3>
  <ul className="space-y-2">
    {[5, 4, 3, 2, 1].map((stars) => (
      <li key={stars} className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox bg-yellow-300" />
        <div className="flex items-center text-yellow-500">
          {Array(stars)
            .fill(0)
            .map((_, index) => (
              <span key={index}>★</span>
            ))}
          {Array(5 - stars)
            .fill(0)
            .map((_, index) => (
              <span key={index} className="text-gray-300">
                ★
              </span>
            ))}
        </div>
        <span className="text-sm text-gray-500">({stars} stars)</span>
      </li>
    ))}
  </ul>
    </div>

{/* Categories */}
<div className="mb-6">
          <h3 className="font-medium mb-2 text-[#151875]">Categories</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Prestashop</span>
                 </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Magento</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Bigcommerce</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>osCommerce</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>3dcart</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Bags</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Accessories</span>
                </label>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Jewellery</span>
              </label>
              <label className="flex items-center space-x-2 text-[#7E81A2]">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>Watches</span>
              </label>
              </li>
          </ul>
        </div>
    
{/* Price Filter */}

        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Filter</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                <span>$0.00 - $150.00</span>
              </label>
              <label className="flex items-center space-x-2 accent-[#FFDBF1]">
                <input type="checkbox" className="form-checkbox" />
                <span>$150.00 - $350.00</span>
              </label>
              <label className="flex items-center space-x-2 accent-[#FFDBF1]">
                <input type="checkbox" className="form-checkbox" />
                <span>$150.00 - $504.00</span>
              </label>
              <label className="flex items-center space-x-2 accent-[#FFDBF1]">
                <input type="checkbox" className="form-checkbox" />
                <span>$450.00 +</span>
              </label>
            </li>
          </ul>
        </div>
    
{/* Filter by color */}

<div className="mb-6">
          <h3 className="font-medium mb-2">Filter By Color</h3>
          <ul className="flex flex-col-2 space-y-2">
            <li>
            <div className="flex space-x-1">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="w-3 h-3 bg-[#FFBF95] rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="w-3 h-3 bg-sky-500 rounded-full"></span>
                </div>
            </li>
          </ul>
        </div>
      </aside>

      {/* Product Details Section 1*/}
      <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop1.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Dictum morbi
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      
 {/* Product Details Section 2 */}
        <div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section 2 */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop2.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Sodales sit
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      

{/* Product Details Section 3 */}
<div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section 2 */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop3.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Nibh varius
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      


{/* Product Details Section 4 */}
<div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section 2 */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop4.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Mauris quis
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      


{/* Product Details Section 5 */}
<div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section 2 */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop5.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Morbi sagittis
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      


{/* Product Details Section 6 */}
<div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section 2 */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop6.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Ultricies venenatis
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      


{/* Product Details Section 7 */}
<div className="max-w-7xl mx-auto p-4">
              {/* Loop through Product Cards */}
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  {/* Image Section 2 */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={`/Sidebar/shop7.jpg`}
                      alt={`Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6 w-full md:w-2/3">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Scelerisque dignissim
                    </h2>
        
                    {/* Price Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl text-blue-600 font-bold">$26.00</span>
                      <span className="text-pink-500 line-through">$52.00</span>
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      </div>
                    </div>
        
                    {/* Rating Section */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, starIndex) => (
                          <span key={starIndex}>&#9733;</span> // Star Icon
                        ))}
                        <span className="text-gray-400">&#9734;</span>
                      </div>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                      est adipiscing in phasellus non in justo.
                    </p>
        
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#128722; {/* Cart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        &#9825; {/* Heart Icon */}
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        🔍 {/* Zoom Icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
       </div>      
      </main>
    </div>
   
  );
};

export default SidebarPage;
