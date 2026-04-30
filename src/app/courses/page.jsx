import SingleCard from '@/components/SingleCard';
import { getData } from '@/lib/data';
import React from 'react';

const Courses =async() => {
    const allData=await getData();
   
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
            {
              allData.map(item=><SingleCard key={item.id} item={item}></SingleCard>)
            }
        </div>
    );
};

export default Courses;