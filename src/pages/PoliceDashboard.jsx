import React from "react";
import Navbar from "../components/Navbar";

const PoliceDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <div className="flex flex-col px-6 md:px-20 py-20 gap-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Police Dashboard
        </h1>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-2xl text-center">
            <h2 className="text-2xl font-semibold mb-2">Pending Complaints</h2>
            <p className="text-gray-300 text-xl">12</p>
          </div>
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-2xl text-center">
            <h2 className="text-2xl font-semibold mb-2">Resolved Cases</h2>
            <p className="text-gray-300 text-xl">35</p>
          </div>
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-2xl text-center">
            <h2 className="text-2xl font-semibold mb-2">New FIRs</h2>
            <p className="text-gray-300 text-xl">5</p>
          </div>
        </div>

        {/* Example Actions */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <button className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl shadow-lg font-semibold transition-all duration-300">
            Review Complaints
          </button>
          <button className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 rounded-xl shadow-lg font-semibold transition-all duration-300">
            File New FIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoliceDashboard;
