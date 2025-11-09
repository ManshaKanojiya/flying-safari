import React from 'react'

const Travel = () => {

    const qualityData = [
        { src: "/Vectorjet.png", heading: "Seamless Journeys", text: "Effortlessly combine flight bookings with inspiring safari itineraries." },
        { src: "/expert.png", heading: "Travel Experts", text: "Rely on local knowledge and partners for safe, memorable safaris." },
        { src: "/fare.png", heading: "Smart Fares", text: "Enjoy exclusive savings and special offers on Tanzania flight bookings." },
        { src: "/curated.png", heading: "Curated Itineraries", text: "Hand-picked safari routes showcasing Tanzania’s most iconic destinations." }
    ]


    return (
        <div className='bg-[url("/destinationbg.jpg")] w-full lg:h-[343px] h-fit pt-[30px] flex  justify-center items-center' style={{fontFamily:"Optima"}}>
            <div className='flex mx-auto gap-7 flex-col lg:flex-row  w-[90%] '>
                {qualityData.map((data, index) => (
                    <div key={index} className='flex flex-col  gap-5 justify-center items-center'>
                        <img src={data.src} alt="image" className='w-[100px] h-[100px]'/>
                        <h2 className='text-[24px]'>{data.heading}</h2>
                        <p className='text-[16px] text-center'>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Travel
