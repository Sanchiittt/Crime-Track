import React from "react";
import Navbar from "../components/Navbar";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <div className="flex flex-col px-6 md:px-20 py-20 gap-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          User Dashboard
        </h1>

        {/* User Complaints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2">Complaint #1</h2>
            <p className="text-gray-300">Reported: 12 Aug 2025</p>
            <p className="text-gray-300">Status: Pending</p>
          </div>
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2">Complaint #2</h2>
            <p className="text-gray-300">Reported: 15 Aug 2025</p>
            <p className="text-gray-300">Status: Resolved</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <button className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 rounded-xl shadow-lg font-semibold transition-all duration-300">
            File New Complaint
          </button>
          <button className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl shadow-lg font-semibold transition-all duration-300">
            Upload Evidence
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
