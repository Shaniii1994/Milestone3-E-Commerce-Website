import React from 'react';
import Image from 'next/image';

const ProductCard = () => {
  return (
        <div className="container mx-10 p-6">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* Product Card 1 */}
            <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product1.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>
    
            {/* Product Card 2 */}
            <div className="w-72 bg-[#EBF4F3] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product2.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>
    
            {/*  {/* Product Card 3 */}
            <div className="w-72  bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product3.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 4 */}
             <div className="w-72  bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product4.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 5 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product5.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 6 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product6.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 7 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product7.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 8 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product8.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>


             {/*  {/* Product Card 9 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product9.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 10 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product10.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 11 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product11.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
            </div>

             {/*  {/* Product Card 12 */}
             <div className="w-72 bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center">
              {/* Product Image */}
              <div className="w-full h-56 flex justify-center items-center mb-4">
                <Image
                  src="/Products/product4.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
    
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Vel elit euismod</h2>
    
              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              </div>
    
              {/* Pricing */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold line-through">$42.00</span>
                <span className="text-pink-600 font-bold">$26.00</span>
              </div>
              </div>
          </div>            
        </div>

  );
};

export default ProductCard;                       