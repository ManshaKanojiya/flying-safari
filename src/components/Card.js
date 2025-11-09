import React from 'react'
import Button from './Button'

const Card = ({ countOfDay, countOfLocation, Locations ,src, alt}) => {

    const imagesData = [
        { src: "/tabler-icon-car-suv.png", alt: "Car" },
        { src: "/tabler-icon-mountain.png", alt: "Mountain" },
        { src: "/tabler-icon-air-balloon.png", alt: "AirBallon" },
        { src: "/tabler-icon-trekking.png", alt: "Trekking" },
        { src: "/tabler-icon-grill.png", alt: "Grill" },
    ]
    return (
        <div className=''>
            <img src={src} alt={alt} className='lg:w-[454px] lg:h-[240px] w-[100%] h-[160px] rounded-t-sm' />
            <div className='bg-[#F8F5F0] gap-2 rounded-b-sm lg:w-[454px] lg:h-[240px] w-[250px] h-[240px] flex flex-col justify-center '                       >
                <p className='text-[#595959] text-center'>{`${countOfDay} Nights . ${ countOfLocation} Locations`}</p>
                <h1 className='lg:text-[24px] text-[18px] text-center px-2'>{Locations}</h1>
                <ul className='flex justify-center items-center gap-4'>
                    {imagesData.map((data, index) => (
                        <li><img src={data.src} alt={data.alt} key={index}/></li>

                    ))}
                </ul>
                <Button value="VIEW ITINERARY" className="border p-1 m-auto w-fit lg:w-[30%] border-[#96938d] rounded-sm"/>
            </div>
        </div>
    )
}

export default Card
