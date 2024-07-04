import Image from 'next/image'
import React from 'react'

const BASE_URL_PHOTO = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400"

function SideDrawer({ place, close }: any) {

     const onDirectionClick=()=>{
        window.open('https://www.google.com/maps/search/?api=1&query='+place.name+place.formatted_address)
     }
    return (
        <div className='h-screen w-screen md:w-[300px] shadow-md p-5 z-20 bg-white overflow-y-auto animate-[slide-in_1s_ease-out]'>
            <button onClick={() => close()} className='transition-transform hover:scale-110'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div>
                <h2 className='line-clamp-2 text-[20px] font-semibold mb-3'>{place.name}</h2>
                <Image src={BASE_URL_PHOTO + "&photo_reference=" + place?.photos[0]?.photo_reference + "&key=" + process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY} alt='placeholder'
                    width={350} height={150} className=' object-cover rounded-t-xl w-full h-[150px]' />
                <div className='p-2'>
                    <h2 className='line-clamp-2'>{place.name}</h2>
                    <div className='flex gap-2 mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h2 className='text-[12px] text-gray-400 line-clamp-2'>
                            {place.formatted_address}</h2>
                    </div>
                    <div className='flex gap mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <h2 className='text-[10px] text-gray-400 tracking-wider flex items-center'>
                            ({place.rating})
                            <span className='mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                            ({place.user_ratings_total})
                        </h2>
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <button onClick={()=>onDirectionClick()}   
                        className='flex gap-2 p-1 px-3 bg-blue-800 rounded-full text-white hover:scale-105 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>Direction</span>
                        </button>
                        <button className='flex gap-2 p-1 px-3 bg-blue-800 rounded-full text-white hover:scale-105 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                            <span>Share</span>
                        </button>
                    </div>
                    <div className='mt-5 '>
                        <iframe
                            width={350}
                            height={250}
                            loading="lazy"
                            className='w-full h-[200px] rounded-lg'
                            src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY + "&q=" + place.formatted_address}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer