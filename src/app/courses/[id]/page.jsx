import { getData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const CoursesDetails = async ({ params }) => {
    const { id } = await params;

    const allDatas = await getData();

    const course= allDatas.find(targetData => targetData.id === Number(id))
    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="relative w-full h-64 md:h-80 lg:h-[500px]">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            <h1 className="text-2xl font-bold mt-4">{course.title}</h1>

            <p className="text-gray-600 mt-2">
                {course.description}
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
                <p className='text-lg'><span className='text-2xl text-black'>Instructor</span>: {course.instructor}</p>
                <p className='text-2xl'>Duration: <span className='text-lg'>{course.duration}</span></p>
                <p className='text-2xl'>Rating: <span className='text-lg'>{course.rating}</span></p>
                <p className='text-2xl'>Level: <span className='text-lg'>{course.level}</span></p>
                <p className='text-2xl'>Category: <span className='text-lg'>{course.category}</span></p>
            </div>

        </div>
    );
};

export default CoursesDetails;