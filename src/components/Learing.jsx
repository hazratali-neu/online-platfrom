import Image from 'next/image';
import React from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';

const Learing = () => {
    return (
        <section className="bg-gradient-to-r max-w-7xl mx-auto from-blue-50 to-purple-50 rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                 Learning Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Study Techniques */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                        <p><MdOutlineMenuBook /></p> Study Techniques
                    </h3>

                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                        <li>Learn by building small projects</li>
                        <li>Take short notes while learning</li>
                        <li> Revise weekly to remember better</li>
                        <li> Practice coding daily</li>
                    </ul>
                </div>

                {/* Time Management */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                         Time Management Tips
                    </h3>

                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                        <li> Study 1 - 2 hours daily consistently</li>
                        <li> Use Pomodoro technique (25min + 5min break)</li>
                        <li> Avoid multitasking</li>
                        <li>Plan weekly learning goals</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Learing;