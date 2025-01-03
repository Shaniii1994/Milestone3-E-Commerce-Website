import React from "react";
import Image from "next/image";

const TrendingProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/c1.png" },
    { id: 2, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/c2.png" },
    { id: 3, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/c3.png" },
    { id: 4, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/11.png" },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 hover:text-pink-500">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={32}
                height={32}
                className="object-cover mb-4"
              />
              <h3 className="font-medium text-lg text-gray-800">{product.name}</h3>
              <p className="text-gray-500">
                <span className="text-pink-500">{product.price}</span>{" "}
                <span className="line-through">{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Promotional Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl text-gray-800">23% off all products</p>
            <button className="text-pink-500 underline mt-2">Shop Now</button>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl text-gray-800">23% off all products</p>
            <button className="text-pink-500 underline mt-2">View Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
