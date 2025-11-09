'use client'
import React, { useState } from 'react'
import Input from './Input'
import { CgArrowsExchangeAlt } from "react-icons/cg";
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import { RiCoupon5Line } from "react-icons/ri";
import Button from './Button';

const Form = () => {
    const [tripType, setTripType] = useState("round");
    const [selected, setSelected] = useState("1 Passenger");

    const passengers = [
        "1 Passenger",
        "2 Passengers",
        "3 Passengers",
        "4 Passengers",
        "5+ Passengers",
    ];

    return (
        <div className="bg-white w-full m-auto lg:m-0 lg:w-full h-fit lg:h-[200px] p-2 lg:pt-5 flex flex-col gap-[10px] rounded-tr-2xl lg:rounded-0" style={{ fontFamily: 'Optima' }}>
            <div className="lg:w-[95%] w-full lg:ml-[20px]  flex flex-col gap-[15px]">
                <div className="flex w-fit h-[38px] p-1 bg-[#f3f3f3] rounded-sm">
                    <button
                        onClick={() => setTripType("round")}
                        className={`px-4 py-1 rounded-sm text-sm font-medium transition-all duration-200 ${tripType === "round"
                                ? "bg-[#48503B] text-white"
                                : "text-[#48503B]"
                            }`}
                    >
                        Round Trip
                    </button>
                    <button
                        onClick={() => setTripType("oneway")}
                        className={`px-4 py-1 rounded-sm text-sm font-medium transition-all duration-200 ${tripType === "oneway"
                                ? "bg-[#48503B] text-white"
                                : "text-[#48503B]"
                            }`}
                    >
                        One Way
                    </button>
                </div>
                {tripType === "round" ? (   
                        <div className="flex lg:flex-row flex-col gap-4 justify-between items-center">
                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                <Input type="text" placeholder="From" />
                                <p className="w-7 h-7 flex items-center justify-center rounded-full text-[#48503B]">
                                    <CgArrowsExchangeAlt />
                                </p>
                                <Input type="text" placeholder="To" />
                            </div>

                            <DatePicker placeholder="Depart Date" />
                            <DatePicker placeholder="Return Date" />

                            <Dropdown
                                options={passengers}
                                value={selected}
                                onChange={setSelected}
                            />
                        </div>
                ) : (
                    <div className="flex ">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-4 items-center">
                            <div className="flex items-center flex-col lg:flex-row  lg:gap-2">
                                <Input type="text" placeholder="From" />
                                <p className="w-7 h-7 flex items-center justify-center rounded-full text-[#48503B]">
                                    <CgArrowsExchangeAlt />
                                </p>
                                <Input type="text" placeholder="To" />
                            </div>
                            <DatePicker placeholder="Depart Date" />
                            <Dropdown
                                options={passengers}
                                value={selected}
                                onChange={setSelected}
                            />
                        </div>
                    </div>
                )}
                <div className="flex justify-between lg:flex-row flex-col items-center">
                    <p className="flex text-[#48503B] items-center gap-1 text-sm">
                        <RiCoupon5Line className="text-lg" /> Have a coupon code? Enter it here
                    </p>
                    <Button
                        value="Search Flights"
                        className="w-fit px-4 lg:py-2 py-1 bg-[#48503b] text-white rounded-sm hover:bg-[#3a4231] transition"
                    />
                </div>
            </div>
        </div>
    )
}

export default Form
