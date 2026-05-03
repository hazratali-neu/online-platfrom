// 'use client'
// import SingleCard from '@/components/SingleCard';
// import { getData } from '@/lib/data';
// import { Input } from '@heroui/react';
// import React, { useEffect, useState } from 'react';

// const Courses = () => {
//     // const allData = await getData();

//     const [allData, setAllData] = useState([]);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         const loadData = async () => {
//             const data = await getData();
//             setAllData(data);
//         };

//         loadData();
//     }, []);

//     const handleInputSearch = (e) => {
//         setSearch(e.target.value);
//     }



//     return (
//         <div className='max-w-7xl mx-auto '>

//             <div className='flex justify-center mt-8'>
//                 <Input  onChange={handleInputSearch}  aria-label="Name" className="w-64" placeholder="Enter your name" />
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
//                 {
//                     allData.map(item => <SingleCard key={item.id} item={item}></SingleCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Courses;

'use client'
import SingleCard from '@/components/SingleCard';
import { getData } from '@/lib/data';
import { Input } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const loadData = async () => {
            const data = await getData();
            setAllData(data);
        };

        loadData();
    }, []);

    const handleInputSearch = (e) => {
        setSearch(e.target.value);
    };

    // এখানে filter করা হলো
    const filteredData = allData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='max-w-7xl mx-auto '>

            <div className='flex justify-center mt-8'>
                <Input
                    onChange={handleInputSearch}
                    aria-label="Search"
                    className="w-64"
                    placeholder="Search by course title..."
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
                {
                    filteredData.map(item => (
                        <SingleCard key={item.id} item={item} />
                    ))
                }
            </div>

        </div>
    );
};

export default Courses;