import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineStarRate } from 'react-icons/md';

const SingleCard = ({ item }) => {
    return (
        <div>
            <Card className="border rounded-xl">
                <div className="relative w-full h-60 aspect-square">
                    <Image
                        src={item?.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={item.title}
                        className="object-cover rounded-xl"
                    />
                </div>

                <div>
                    <h2 className="font-medium text-2xl text-black">{item.title}</h2>
                </div>
                <p><span className='text-black text-lg'>instructor:</span>{item.instructor}</p>
                <span className='flex items-center gap-2'><MdOutlineStarRate />{item.rating}</span>

                {/* <Button variant="secondary" className={'w-full'}>View</Button> */}
                <Link href={`/courses/${item.id}`}> <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
                    View Details
                </button></Link>

            </Card>
        </div>

    );
};

export default SingleCard;