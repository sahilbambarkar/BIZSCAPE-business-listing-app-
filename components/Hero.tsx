import category from '@/data/category'
import Image from 'next/image'
import React, { useState } from 'react'

function Hero({userInput}:any) {
    const [searchInput,setSearchInput]=useState<string>();
    return (
        <div className='text-center'>
            <div>
                <Image src='/bgu.png' alt='hero-image'
                    width={800} height={700}
                    className='min-w-full absolute mt-[100px] p-1' />
                <div className='mt-[-10px]'>
                    <h2 className='text-[50px] font-semibold text-red-600 tracking-widest animate-bounce animate-delay-500'>
                        Bizscape
                    </h2>
                    <h3 className='text-[20px] font-medium animate-pulse'>  Places you want</h3>
                    <div className=' mt-8 z-20 flex gap-2 items-center justify-center'>
                        <input type='text' 
                            onChange={(e) => setSearchInput(e.target.value)}
                        placeholder='search anything'
                            className='z-20 bg-white p-3 border-[2px] rounded-full px-5 w-[30%] shadow-sm outline-red-500' />
                        <button onClick={()=>userInput(searchInput)}
                        className='bg-red-600 rounded-full p-3 shadow-sm z-10 cursor-pointer hover:scale-105 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>



                        </button>

                    </div>
                    <div className=' z-30 relative   text-black mt-5 font-semibold justify-center flex flex-col items-center'>
                        <h2>Or Browse the category</h2>
                        <div className='grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3'>
                            {category.map((item, index) => (
                                <div key={index} className='border-[1.5px] w-[50px] p-4 bg-white rounded-full z-10 shadow-sm hover:border-red-900 hover:scale-110 cursor-pointer transition-all'>
                                    <Image src={item.icon} alt={item.name}
                                        width={30} height={30} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero