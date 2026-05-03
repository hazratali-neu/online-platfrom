export default function TrendingCourses() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
         Trending Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-5 rounded-lg rounded shadow">
          <h3 className="text-xl font-semibold">React Basics</h3>
          <p className="text-gray-600">Learn React from scratch</p>
        </div>

        <div className="bg-white p-5 rounded-lg rounded shadow">
          <h3 className="text-xl font-semibold">Next.js Mastery</h3>
          <p className="text-gray-600">Full Next.js course</p>
        </div>

        <div className="bg-white p-5 rounded-lg rounded shadow">
          <h3 className="text-xl font-semibold">Node.js API</h3>
          <p className="text-gray-600">Backend development</p>
        </div>

      </div>
    </section>
  );
}