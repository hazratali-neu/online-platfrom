import Image from 'next/image';
import React from 'react';
import { BsTrophyFill } from 'react-icons/bs';
import { FaStarHalfStroke } from 'react-icons/fa6';
const instructors = [
    {
        name: "John Doe",
        role: "Full Stack Developer",
        image: "https://i.ibb.co.com/FLCWPspB/istockphoto-2130663384-612x612.webp",
        exparience: '4+ Years Experience',
         ratting: '4.7'
    },
    {
        name: "Sarah Smith",
        role: "React Specialist",
        image: "https://i.ibb.co.com/Q3m0hHyT/photo-1474293507615-951863a0f942.avif",
        exparience: '5+ Years Experience',
         ratting: '4.6'
    },
    {
        name: "Mike Johnson",
        role: "UI/UX Designer",
        image: "https://i.ibb.co.com/wrCNtbgj/istockphoto-2234378371-612x612.webp",
        exparience: '3+ Years Experience',
        ratting: '4.8'
    },
    {
        name: "Hazrat ali",
        role: "Next.js Mentor ",
        image: "https://i.ibb.co.com/KcLXDVbw/Image-17-9-24-at-4-39-PM.jpg",
        exparience: '6+ Years Experience',
         ratting: '4.9'
    },
];

const TopInstructor = () => {
    return (
        <div className='max-w-7xl mx-auto mt-8'>
            <section>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl flex gap-2 items-center font-bold text-gray-800">
                        <BsTrophyFill /> Top Instructors
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Learn from the best instructors and improve your skills faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructors.map((ins, index) => (
                        <div
                            key={index}
                            className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition bg-white"
                        >
                            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
                                <Image
                                    src={ins.image}
                                    alt={ins.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="mt-4 font-bold text-lg text-gray-800">
                                {ins.name}
                            </h3>
                            <p className="text-sm text-gray-600">{ins.role}</p>
                            <p>{ins.exparience}</p>

                            <p className='flex items-center gap-2 justify-center'><FaStarHalfStroke />
                                {ins.ratting}</p>

                            <button className="mt-4 px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition">
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TopInstructor;