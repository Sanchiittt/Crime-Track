// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div
//       className="relative h-screen flex flex-col justify-center items-center text-center text-white"
//       style={{
//         backgroundImage: "url('/city.jpeg')", // correct path
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 px-6 flex flex-col items-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//           Report Crimes, Ensure Justice
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8 drop-shadow-md">
//           CrimeTrack is a secure platform where citizens can report crimes and upload evidence, 
//           while police officers review and take timely action.
//         </p>

//         <div className="flex flex-col md:flex-row gap-4">
//           <Link
//             to="/signup"
//             className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//           >
//             Report Crime
//           </Link>
//           <Link
//             to="/login"
//             className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//           >
//             Police Login
//           </Link>
//         </div>

//         <p className="mt-8 text-gray-300 italic max-w-2xl drop-shadow-sm">
//           “Together, we can build safer communities.”
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;




// import React from "react";
// import { Link } from "react-router-dom";
// import cityImg from "../assets/city4.jpg";

// const Home = () => {
//   return (
//    <div className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
//   <img
//     src={cityImg}
//     alt="City background"
//     className="absolute inset-0 w-full h-full object-cover z-0"
//   />
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/20 z-10"></div>
//   {/* Content */}
//   <div className="relative z-20 px-6 flex flex-col items-center">
//     <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-blue-100">
//       CrimeTrack
//     </h1>
//     <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8 drop-shadow-md">
//       A secure platform for citizens to report crimes and upload evidence,
//       while police officers review complaints and take timely action.
//     </p>
//     <div className="flex flex-col md:flex-row gap-4">
//       <Link
//         to="/signup"
//         className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//       >
//         Report Crime
//       </Link>
//       <Link
//         to="/login"
//         className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//       >
//         Police Login
//       </Link>
//     </div>
//     <p className="mt-8 text-gray-300 italic max-w-2xl drop-shadow-sm">
//       “Together, we can build safer communities.”
//     </p>
//   </div>
// </div>
//   );
// };

// export default Home;





// import React from "react";
// import { Link } from "react-router-dom";
// import cityImg from "../assets/city4.jpg";

// const Home = () => {
//   return (
//     <div className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
//       {/* Background image */}
//       <img
//         src={cityImg}
//         alt="City Night"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />

//       {/* Overlay with blur */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 px-6 flex flex-col items-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white">
//           Stay Vigilant. Report Crimes.
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8 drop-shadow-md">
//           CrimeTrack connects citizens and police to ensure timely action and safer neighborhoods.
//         </p>

//         <div className="flex flex-col md:flex-row gap-4">
//           <Link
//             to="/signup"
//             className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//           >
//             Report Crime
//           </Link>
//           <Link
//             to="/login"
//             className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//           >
//             Police Login
//           </Link>
//         </div>

//         <p className="mt-8 text-gray-300 italic max-w-2xl drop-shadow-sm">
//           “Together, we can build safer communities.”
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import cityImg from "../assets/city4.jpg";
// import { FaFileAlt, FaCamera, FaUserShield } from "react-icons/fa";

// const Home = () => {
//   // Simple animated counters for stats
//   const [complaints, setComplaints] = useState(0);
//   const [resolved, setResolved] = useState(0);
//   const [policeUsers, setPoliceUsers] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setComplaints(prev => (prev < 1250 ? prev + 25 : prev));
//       setResolved(prev => (prev < 800 ? prev + 20 : prev));
//       setPoliceUsers(prev => (prev < 50 ? prev + 1 : prev));
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-x-hidden">
//       {/* Hero Section */}
//       <div className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
//         <img
//           src={cityImg}
//           alt="City Night"
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         />
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10"></div>
//         <div className="relative z-20 px-6 flex flex-col items-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white">
//             Stay Vigilant. Report Crimes.
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8 drop-shadow-md">
//             CrimeTrack connects citizens and police to ensure timely action and safer neighborhoods.
//           </p>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Link
//               to="/signup"
//               className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//             >
//               Report Crime
//             </Link>
//             <Link
//               to="/login"
//               className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//             >
//               Police Login
//             </Link>
//           </div>
//           <p className="mt-8 text-gray-300 italic max-w-2xl drop-shadow-sm">
//             “Together, we can build safer communities.”
//           </p>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <section className="py-20 bg-gray-900 text-white text-center">
//         <h2 className="text-4xl font-bold mb-12">How It Works</h2>
//         <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-20">
//           {/* Card 1 */}
//           <div className="bg-gray-800 rounded-xl p-8 flex-1 shadow-lg hover:scale-105 transition-transform">
//             <FaFileAlt className="text-4xl mx-auto mb-4 text-blue-500" />
//             <h3 className="text-2xl font-semibold mb-2">Report a Crime</h3>
//             <p className="text-gray-300">
//               Citizens can submit complaints with details about the incident quickly and securely.
//             </p>
//           </div>
//           {/* Card 2 */}
//           <div className="bg-gray-800 rounded-xl p-8 flex-1 shadow-lg hover:scale-105 transition-transform">
//             <FaCamera className="text-4xl mx-auto mb-4 text-blue-500" />
//             <h3 className="text-2xl font-semibold mb-2">Upload Evidence</h3>
//             <p className="text-gray-300">
//               Add photos or videos as evidence to support your complaint for faster police verification.
//             </p>
//           </div>
//           {/* Card 3 */}
//           <div className="bg-gray-800 rounded-xl p-8 flex-1 shadow-lg hover:scale-105 transition-transform">
//             <FaUserShield className="text-4xl mx-auto mb-4 text-blue-500" />
//             <h3 className="text-2xl font-semibold mb-2">Police Action</h3>
//             <p className="text-gray-300">
//               Police officers review complaints and take timely action to ensure justice is served.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gray-800 text-white text-center">
//         <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
//         <div className="flex flex-col md:flex-row justify-center gap-12 px-6 md:px-20">
//           <div className="text-3xl md:text-5xl font-bold">{complaints}+</div>
//           <p className="text-gray-300 text-lg md:text-xl">Complaints Reported</p>
//           <div className="text-3xl md:text-5xl font-bold">{resolved}+</div>
//           <p className="text-gray-300 text-lg md:text-xl">Crimes Resolved</p>
//           <div className="text-3xl md:text-5xl font-bold">{policeUsers}+</div>
//           <p className="text-gray-300 text-lg md:text-xl">Active Police Users</p>
//         </div>
//       </section>

//       {/* Call to Action Banner */}
//       <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">Be the Change. Report Today.</h2>
//         <p className="mb-8 text-gray-200 text-lg md:text-xl">
//           Help build safer communities by reporting suspicious activities or crimes.
//         </p>
//         <Link
//           to="/signup"
//           className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//         >
//           Get Started
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 text-center py-6">
//         &copy; 2025 CrimeTrack. All rights reserved. | <Link to="/contact" className="hover:text-white">Contact</Link>
//       </footer>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import cityImg from "../assets/city4.jpg";

// const Home = () => {
//   // Animated counters
//   const [complaints, setComplaints] = useState(0);
//   const [resolved, setResolved] = useState(0);
//   const [policeUsers, setPoliceUsers] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setComplaints(prev => (prev < 1250 ? prev + 25 : prev));
//       setResolved(prev => (prev < 800 ? prev + 20 : prev));
//       setPoliceUsers(prev => (prev < 50 ? prev + 1 : prev));
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-x-hidden">
//       {/* Background image */}
//       <img
//         src={cityImg}
//         alt="City Night"
//         className="fixed inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center text-white h-screen px-6 md:px-20">
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10"></div>

//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white">
//           Stay Vigilant. Report Crimes.
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8 drop-shadow-md">
//           CrimeTrack connects citizens and police to ensure timely action and safer neighborhoods.
//         </p>
//         <div className="flex flex-col md:flex-row gap-4">
//           <Link
//             to="/signup"
//             className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//           >
//             Report Crime
//           </Link>
//           <Link
//             to="/login"
//             className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//           >
//             Police Login
//           </Link>
//         </div>
//         <p className="mt-8 text-gray-300 italic max-w-2xl drop-shadow-sm">
//           “Together, we can build safer communities.”
//         </p>
//       </section>

//       {/* How It Works Section */}
//       <section className="relative py-20 md:py-32 text-center text-white px-6 md:px-20">
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10"></div>
//         <h2 className="text-4xl font-bold mb-12">How It Works</h2>
//         <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
//           {/* Card 1 */}
//           <div className="bg-black/50 rounded-xl p-8 flex-1 shadow-lg hover:scale-105 transition-transform">
//             <div className="text-4xl mb-4">📝</div>
//             <h3 className="text-2xl font-semibold mb-2">Report a Crime</h3>
//             <p className="text-gray-200">
//               Citizens can submit complaints with details about the incident quickly and securely.
//             </p>
//           </div>
//           {/* Card 2 */}
//           <div className="bg-black/50 rounded-xl p-8 flex-1 shadow-lg hover:scale-105 transition-transform">
//             <div className="text-4xl mb-4">📷</div>
//             <h3 className="text-2xl font-semibold mb-2">Upload Evidence</h3>
//             <p className="text-gray-200">
//               Add photos or videos as evidence to support your complaint for faster police verification.
//             </p>
//           </div>
//           {/* Card 3 */}
//           <div className="bg-black/50 rounded-xl p-8 flex-1 shadow-lg hover:scale-105 transition-transform">
//             <div className="text-4xl mb-4">🛡️</div>
//             <h3 className="text-2xl font-semibold mb-2">Police Action</h3>
//             <p className="text-gray-200">
//               Police officers review complaints and take timely action to ensure justice is served.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative py-20 md:py-32 text-center text-white px-6 md:px-20">
//         <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] -z-10"></div>
//         <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
//           <div className="text-3xl md:text-5xl font-bold">{complaints}+</div>
//           <p className="text-gray-200 text-lg md:text-xl">Complaints Reported</p>
//           <div className="text-3xl md:text-5xl font-bold">{resolved}+</div>
//           <p className="text-gray-200 text-lg md:text-xl">Crimes Resolved</p>
//           <div className="text-3xl md:text-5xl font-bold">{policeUsers}+</div>
//           <p className="text-gray-200 text-lg md:text-xl">Active Police Users</p>
//         </div>
//       </section>

//       {/* Call to Action Banner */}
//       <section className="relative py-20 md:py-32 text-center text-white px-6 md:px-20">
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10"></div>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">Be the Change. Report Today.</h2>
//         <p className="mb-8 text-gray-200 text-lg md:text-xl">
//           Help build safer communities by reporting suspicious activities or crimes.
//         </p>
//         <Link
//           to="/signup"
//           className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//         >
//           Get Started
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="relative text-gray-400 text-center py-6">
//         &copy; 2025 CrimeTrack. All rights reserved. | <Link to="/contact" className="hover:text-white">Contact</Link>
//       </footer>
//     </div>
//   );
// };

// export default Home;








// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import cityImg from "../assets/city4.jpg";

// const Home = () => {
//   // Animated counters
//   const [complaints, setComplaints] = useState(0);
//   const [resolved, setResolved] = useState(0);
//   const [policeUsers, setPoliceUsers] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setComplaints(prev => (prev < 1250 ? prev + 25 : prev));
//       setResolved(prev => (prev < 800 ? prev + 20 : prev));
//       setPoliceUsers(prev => (prev < 50 ? prev + 1 : prev));
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-x-hidden">
//       {/* Background image */}
//       <img
//         src={cityImg}
//         alt="City Night"
//         className="fixed inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Hero Section */}
//       <section className="relative flex flex-col md:flex-row items-center text-white h-screen px-6 md:px-20">
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] -z-10"></div>

//         {/* Left Text */}
//         <div className="md:w-1/2 flex flex-col items-start space-y-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
//             Stay Vigilant. Report Crimes.
//           </h1>
//           <p className="text-lg md:text-xl max-w-md text-gray-200 drop-shadow-md">
//             CrimeTrack connects citizens and police to ensure timely action and safer neighborhoods.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               to="/signup"
//               className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//             >
//               Report Crime
//             </Link>
//             <Link
//               to="/login"
//               className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//             >
//               Police Login
//             </Link>
//           </div>
//         </div>

//         {/* Right Decorative Card */}
//         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
//           <div className="bg-black/40 backdrop-blur-[1px] p-6 rounded-xl shadow-lg max-w-sm text-center">
//             <p className="text-gray-200">
//               Be the first to report suspicious activity in your community.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="relative py-20 md:py-32 text-white px-6 md:px-20">
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10"></div>
//         <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
//         <div className="flex flex-col space-y-12">
//           {/* Card 1 */}
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             <div className="md:w-1/2 flex justify-center">
//               <div className="text-6xl">📝</div>
//             </div>
//             <div className="md:w-1/2 bg-black/40 backdrop-blur-[1px] p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-semibold mb-2">Report a Crime</h3>
//               <p className="text-gray-200">
//                 Citizens can submit complaints with details about the incident quickly and securely.
//               </p>
//             </div>
//           </div>
//           {/* Card 2 - swapped layout */}
//           <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
//             <div className="md:w-1/2 flex justify-center">
//               <div className="text-6xl">📷</div>
//             </div>
//             <div className="md:w-1/2 bg-black/40 backdrop-blur-[1px] p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-semibold mb-2">Upload Evidence</h3>
//               <p className="text-gray-200">
//                 Add photos or videos as evidence to support your complaint for faster police verification.
//               </p>
//             </div>
//           </div>
//           {/* Card 3 */}
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             <div className="md:w-1/2 flex justify-center">
//               <div className="text-6xl">🛡️</div>
//             </div>
//             <div className="md:w-1/2 bg-black/40 backdrop-blur-[1px] p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-semibold mb-2">Police Action</h3>
//               <p className="text-gray-200">
//                 Police officers review complaints and take timely action to ensure justice is served.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative py-20 md:py-32 text-white px-6 md:px-20">
//         <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] -z-10"></div>
//         <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
//           <div>
//             <div className="text-3xl md:text-5xl font-bold">{complaints}+</div>
//             <p className="text-gray-200 text-lg md:text-xl">Complaints Reported</p>
//           </div>
//           <div>
//             <div className="text-3xl md:text-5xl font-bold">{resolved}+</div>
//             <p className="text-gray-200 text-lg md:text-xl">Crimes Resolved</p>
//           </div>
//           <div>
//             <div className="text-3xl md:text-5xl font-bold">{policeUsers}+</div>
//             <p className="text-gray-200 text-lg md:text-xl">Active Police Users</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Banner */}
//       <section className="relative py-20 md:py-32 text-center text-white px-6 md:px-20">
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10"></div>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">Be the Change. Report Today.</h2>
//         <p className="mb-8 text-gray-200 text-lg md:text-xl">
//           Help build safer communities by reporting suspicious activities or crimes.
//         </p>
//         <Link
//           to="/signup"
//           className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
//         >
//           Get Started
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="relative text-gray-400 text-center py-6">
//         &copy; 2025 CrimeTrack. All rights reserved. | <Link to="/contact" className="hover:text-white">Contact</Link>
//       </footer>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cityImg from "../assets/city4.jpg";

const Home = () => {
  // Animated counters
  const [complaints, setComplaints] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [policeUsers, setPoliceUsers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setComplaints(prev => (prev < 1250 ? prev + 25 : prev));
      setResolved(prev => (prev < 800 ? prev + 20 : prev));
      setPoliceUsers(prev => (prev < 50 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden text-white">
      {/* Background image */}
      <img
        src={cityImg}
        alt="City Night"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center h-screen px-6 md:px-20">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] -z-10"></div>

        {/* Left Text */}
        <div className="md:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl">
            Stay Vigilant. Report Crimes.
          </h1>
          <p className="text-lg md:text-xl max-w-md text-gray-200 drop-shadow-md">
            CrimeTrack connects citizens and police to ensure timely action and safer neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
            >
              Report Crime
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
            >
              Police Login
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <div className="bg-black/70 backdrop-blur-[2px] p-6 rounded-xl shadow-2xl max-w-sm text-center">
            <p className="text-gray-200">
              Be the first to report suspicious activity in your community.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] -z-10"></div>
        <h2 className="text-4xl font-bold mb-16 text-center drop-shadow-lg">How It Works</h2>
        <div className="flex flex-col space-y-12">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 flex justify-center">
              <div className="text-6xl">📝</div>
            </div>
            <div className="md:w-1/2 bg-black/70 backdrop-blur-[2px] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-2">Report a Crime</h3>
              <p className="text-gray-200">
                Citizens can submit complaints with details about the incident quickly and securely.
              </p>
            </div>
          </div>
          {/* Card 2 - swapped layout */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="md:w-1/2 flex justify-center">
              <div className="text-6xl">📷</div>
            </div>
            <div className="md:w-1/2 bg-black/70 backdrop-blur-[2px] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-2">Upload Evidence</h3>
              <p className="text-gray-200">
                Add photos or videos as evidence to support your complaint for faster police verification.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 flex justify-center">
              <div className="text-6xl">🛡️</div>
            </div>
            <div className="md:w-1/2 bg-black/70 backdrop-blur-[2px] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-2">Police Action</h3>
              <p className="text-gray-200">
                Police officers review complaints and take timely action to ensure justice is served.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] -z-10"></div>
        <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-lg">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="text-3xl md:text-5xl font-bold drop-shadow-lg">{complaints}+</div>
            <p className="text-gray-200 text-lg md:text-xl">Complaints Reported</p>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold drop-shadow-lg">{resolved}+</div>
            <p className="text-gray-200 text-lg md:text-xl">Crimes Resolved</p>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold drop-shadow-lg">{policeUsers}+</div>
            <p className="text-gray-200 text-lg md:text-xl">Active Police Users</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 text-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] -z-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Be the Change. Report Today.</h2>
        <p className="mb-8 text-gray-200 text-lg md:text-xl drop-shadow-md">
          Help build safer communities by reporting suspicious activities or crimes.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-full shadow-2xl transition-all duration-300 text-lg font-semibold"
        >
          Get Started
        </Link>
      </section>

{/* Floating Chat Button with Typing Effect */}
<div className="fixed bottom-6 right-6 flex items-center z-50 space-x-3">
  {/* Chat bubble with typing effect */}
  <TypingChatBubble text="Ask Your Legal Doubts" />

  {/* Circular chat button */}
  <Link
    to="/legal-aid"
    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full flex justify-center items-center shadow-2xl transition-all duration-300"
    title="Legal Aid Chat"
  >
    💬
  </Link>
</div>


    </div>
  );
};




{/* TypingChatBubble Component */}
const TypingChatBubble = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="bg-gray-800/80 text-white text-sm font-semibold px-4 py-2 rounded-2xl shadow-lg drop-shadow-lg">
      {displayedText}
      <span className="blinking-cursor">|</span>

      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 1px;
            background-color: white;
            margin-left: 2px;
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};




export default Home;
