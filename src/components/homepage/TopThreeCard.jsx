// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const courses = [
//   {
//     id: 1,
//     title: "Complete Web Development Bootcamp",
//     instructor: "John Doe",
//     rating: 4.9,
//     image:
//       "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
//   {
//     id: 2,
//     title: "React Masterclass",
//     instructor: "Sarah Smith",
//     rating: 4.8,
//     image:
//       "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
//   {
//     id: 3,
//     title: "Next.js From Zero to Pro",
//     instructor: "Mike Johnson",
//     rating: 4.7,
//     image:
//       "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
// ];

// const instructors = [
//   {
//     name: "John Doe",
//     role: "Full Stack Developer",
//     image: "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
//   {
//     name: "Sarah Smith",
//     role: "React Specialist",
//     image: "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
//   {
//     name: "Mike Johnson",
//     role: "Next.js Mentor",
//     image: "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
//   {
//     name: "Emma Brown",
//     role: "UI/UX Designer",
//     image: "https://i.ibb.co.com/0j7JXhcP/banner.avif",
//   },
// ];

// export default function TopThreeCard() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 my-12 space-y-16">
//       {/* 🔥 Popular Courses */}
//       <section>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             🔥 Popular Courses
//           </h2>

//           <Link
//             href="/courses"
//             className="text-blue-600 font-semibold hover:underline w-fit"
//           >
//             View All →
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
//             >
//               {/* Image */}
//               <div className="relative w-full h-48">
//                 <Image
//                   src={course.image}
//                   alt={course.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5 space-y-2">
//                 <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
//                   {course.title}
//                 </h3>

//                 <p className="text-sm text-gray-600">
//                   Instructor:{" "}
//                   <span className="font-semibold">{course.instructor}</span>
//                 </p>

//                 <p className="text-sm text-gray-700 flex items-center gap-1">
//                   ⭐ <span className="font-bold">{course.rating}</span>
//                 </p>

//                 <Link href={`/courses/${course.id}`}>
//                   <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 📌 Learning Tips */}
//       <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
//           📌 Learning Tips
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Study Techniques */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h3 className="text-xl font-bold text-gray-800 mb-3">
//               📚 Study Techniques
//             </h3>

//             <ul className="space-y-2 text-gray-700 text-sm md:text-base">
//               <li>✅ Learn by building small projects</li>
//               <li>✅ Take short notes while learning</li>
//               <li>✅ Revise weekly to remember better</li>
//               <li>✅ Practice coding daily</li>
//             </ul>
//           </div>

//           {/* Time Management */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h3 className="text-xl font-bold text-gray-800 mb-3">
//               ⏳ Time Management Tips
//             </h3>

//             <ul className="space-y-2 text-gray-700 text-sm md:text-base">
//               <li>✅ Study 1–2 hours daily consistently</li>
//               <li>✅ Use Pomodoro technique (25min + 5min break)</li>
//               <li>✅ Avoid multitasking</li>
//               <li>✅ Plan weekly learning goals</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 🏆 Top Instructors */}
//       <section>
//         <div className="mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             🏆 Top Instructors
//           </h2>
//           <p className="text-gray-600 mt-2 text-sm md:text-base">
//             Learn from the best instructors and improve your skills faster.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {instructors.map((ins, index) => (
//             <div
//               key={index}
//               className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition bg-white"
//             >
//               <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
//                 <Image
//                   src={ins.image}
//                   alt={ins.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <h3 className="mt-4 font-bold text-lg text-gray-800">
//                 {ins.name}
//               </h3>
//               <p className="text-sm text-gray-600">{ins.role}</p>

//               <button className="mt-4 px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition">
//                 View Profile
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import SingleCard from '../SingleCard';
import { getData } from '@/lib/data';


const TopThreeCard = async () => {
    
    const data=await getData();
    const topThreeData = [...data]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Popular Courses
            </h2>
            <div  className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
                {
                    topThreeData.map(item => <SingleCard item={item} key={item.id}></SingleCard>)
                }

            </div>
        </div>
    );
};

export default TopThreeCard;

