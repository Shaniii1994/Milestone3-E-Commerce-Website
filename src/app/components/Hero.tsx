import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FurnitureBanner from '@/app/components/banner'

const Hero = () => {
    return (  
            <div className='max:w-1/3'>
            <div className='mb-5'>
                <FurnitureBanner/>
            </div>
            <div className='text-[#1A0B5B] text-[42px] font-bold flex justify-center mt-20 mb-5'>Featured Products</div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20'>
                <div className='w-[270px] h-[361px] bg-gray-50 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/3.png'} width={178} height={178} alt='chair1' /></div>
                    <div className='bg-white'>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                    </div>
                </div>
                <div className='w-[270px] h-[361px] bg-gray-50 hover:scale-105'>
                  <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/4.png'} width={178} height={178} alt='chair1' /></div>
                    <div className='bg-[#2F1AC4] text-white'>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px]'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono'>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans'>$42.00</p>
                    </div>
                </div>
                <div className='w-[270px] h-[361px] bg-gray-50 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/5.png'} width={178} height={178} alt='chair1' /></div>
                    <div className='bg-white'>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                    </div>
                </div>
                <div className='w-[270px] h-[361px] bg-gray-50 hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center' ><Image src={'/6.png'} width={178} height={178} alt='chair1' /></div>
                    <div className='bg-white'>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p></div>
                    </div>
            </div>
            <div className='text-[#1A0B5B] text-[42px] font-bold flex justify-center mb-5 mt-20 '>Leatest Products </div>
            <div>
                <ul className='flex justify-center items-center mb-5 gap-3'>
                    <Link href={'/'}><li className='text-[16px] text-[#FB2E86] underline'> New Arrival</li></Link>
                    <Link href={'/'}><li className='text-[16px] text-[#151875]'> Best Seller</li></Link>
                    <Link href={'/'}><li className='text-[16px] text-[#151875]'> Feature</li></Link>
                    <Link href={'/'}><li className='text-[16px] text-[#151875]'> Special Offer</li></Link>
                </ul>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 ml-24 ' >
                <div className='w-[360px] h-[306px] bg-gray-50 '>
                    <div className='flex justify-center items-center mt-9'><Image src={'/7.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-white'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/8.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-gray-50'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/3.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-gray-50'>
                    <div className='flex justify-center items-center mt-9 '><Image src={'/10.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-gray-50'>
                    <div className='flex justify-center items-center mt-9 mb-6'><Image src={'/11.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[360px] h-[306px] bg-gray-50'>
                    <div className='flex justify-center items-center mt-9'><Image src={'/6.png'} height={229} width={223} alt='chair12' /></div>
                    <div className='flex justify-around items-end'>
                        <p>Comfort HandyCraft</p>
                        <div className='flex gap-3'>
                            <p>$41.00</p>
                            <p className='text-pink-600'>$65.00</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='text-[#1A0B5B] text-[42px] font-bold flex justify-center mb-10 mt-10'>What Shopex Offers</div>
            <div className='grid grid-cols-2 md:grid-cols-4 ml-24 bg-gray-50'>
                <div className='w-[270px] h-[320px] bg-white'>
                 <div className='flex justify-center mt-10 mb-5 '>
                    <Image src={'/offer1.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold bg-white text-[#151875]'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold bg-gray-50 text-slate-400 text-wrap'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                    
                </div>
                <div className='w-[270px] h-[320px] bg-white'>
                <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/offer2.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold bg-white text-[#151875]'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold text-slate-400 text-wrap bg-gray-50'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                </div>
                <div className='w-[270px] h-[320px] bg-white'>
                <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/offer3.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold bg-white text-[#151875]'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold bg-gray-50 text-slate-400 text-wrap'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                </div>
                <div className='w-[270px] h-[320px] bg-white'>
                <div className='flex justify-center mt-12 mb-5 '>
                    <Image src={'/offer4.png'} width={65} height={65} alt='truck'/>
                 </div>
                 <div>
                    <h1 className='flex justify-center font-bold bg-white text-[#151875]'>24/7 Support</h1>
                    <p className='mt-7 ml-8 text-[16px] font-bold text-slate-400 text-wrap bg-gray-50'> Lorem ipsum dolor sit, amet consectetur adipisicing elit kdjdf dfjd djdjd djje.</p>
                 </div>
                </div>
            </div>
           
        <div className="py-10 px-5 mt-10 bg-purple-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <Image 
        src="/Sofa.png" 
        alt="Sofa" 
        width={400} 
        height={400} 
        className="md:w-1/2 rounded-lg" />
        <div className="text-center md:text-left hover:text-pink-500">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Unique Features Of Latest & Trending Products</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 hover:text-pink-500">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screws, and nails</li>
            <li>Arms, backs, and seats are structurally reinforced</li>
          </ul>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
            Add To Cart
          </button>
          <p className="mt-2 text-gray-500 hover:text-pink-500">B&B Italian Sofa — <span className="text-pink-500 hover:text-gray-400">$32.00</span></p>
          </div>
        </div>
      </div>
      <div className='text-[#1A0B5B] text-[42px] font-bold flex justify-center mb-10 mt-20'>Trending Products</div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ml-20'>
                <div className='w-[270px] h-[361px] bg-white border-solid hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center bg-gray-100' ><Image src={'/c1.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-white border-solid hover:scale-105 ' >
                    <div className='w-[270px] h-[270px] flex justify-center items-center bg-gray-100' ><Image src={'/c2.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-white border-solid hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center bg-gray-100 ' ><Image src={'/c3.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p>
                </div>
                <div className='w-[270px] h-[361px] bg-white border-solid hover:scale-105'>
                    <div className='w-[270px] h-[270px] flex justify-center items-center bg-gray-100' ><Image src={'/11.png'} width={178} height={178} alt='chair1' /></div>
                    <p className='mb-3 flex justify-center items-center font-serif text-[18px] text-pink-600'>Cantiliver Chair</p>
                    <p className='mb-2 flex justify-center items-center text-[14px] font-mono text-[#2F1AC4] '>Code . 0353536</p>
                    <p className='flex justify-center items-center text-[14px] font-sans text-[#2F1AC4] '>$42.00</p></div>
                 </div>     
        <div className="m-6 py-12">
      {/* Main Grid Layout with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* First Column */}
        <div className="relative bg-[#FFF6FB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-right h-full"
            style={{ backgroundImage: "url('/clock.png')"}}
          >
          </div>
            {/* Image as background */}
          
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 underline">Shop Now</Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative bg-[#EEEFFB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-right h-full "
            style={{ backgroundImage: "url('/promo2.png')" }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 underline">View Collection</Link>
          </div>
        </div>

        {/* Third Column (Contains 3 rows with 2 columns each) */}
        <div className="grid grid-rows-3 gap-6 h-[250px]">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
          <div className="relative w-full h-20 bg-gray-50 rounded-lg overflow-hidden">
          <Image
          src="/image1.png"
          alt="Image 3"
          style={{ objectFit: "cover" }}
          width={80}  // Set width
          height={80} // Set height
          />
        </div>   
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src="/image2.png" // Example image source
                alt="Image 4"
                style={{ objectFit: "cover" }}
                width={80}  // Set width
                height={80} // Set height
                 />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src="/image3.png" // Example image source
                alt="Image 5"
                style={{ objectFit: "cover" }}
                width={80}  // Set width
                height={80} // Set height
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-10 text-xl">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-blue-900">Discount Item</h1>
      <div className='text-center mt-5 space-x-5'>
      <span className="cursor-pointer text-pink-500 underline space-x-4">Wood Chair </span>
            <span className="cursor-pointer ">Plastic Chair</span>
            <span className="cursor-pointer">Sofa Collection</span>
            </div>
      <div className="flex items-center justify-center p-5 mt-0 h-[597px] w-[1214px] mx-auto">
      <div className="p-4 w-1/2">
        {/* Left Section */}
          <div className="text-sm text-[#B7BACB] space-x-3 mt-5 mb-2 justify-items-center">  
          <h2 className="text-4xl font-bold mb-4 text-[#151875]">
            20% Discount Of All Products
          </h2>
          <p className="text-[#FB2E86] mb-6">
            Eams Sofa Compact
          </p>
          <ul className="space-y-2 mt-5 mb-6 text-[#B7BACB]">
            <li className="flex items-center">
              <span className="mr-2 text-[#7569B2]">✔</span> Material expose like metals
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#7569B2]">✔</span> Simple neutral colors
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#7569B2]">✔</span> Clear lines and geometric figures
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-[#7569B2]">✔</span> Material oppose like metals
            </li>
          </ul>
          </div>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>
        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="rounded-full bg-pink-100 w-72 h-72 absolute"></div>
          <Image
            src="/sofa2.png" 
            alt="Eams Sofa Compact"
            width={500}
            height={500}
            className="w-[400px] h-[400px] relative object-cover"
          />
        </div>
      </div>
    </div>
    </div>
    );
};

export default Hero;                   