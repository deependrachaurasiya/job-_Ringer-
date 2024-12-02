// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Correct import for navigate hook

// function Job() {
//     const navigate = useNavigate(); // Access navigate function via useNavigate hook

//     const handleLoginNavigation = () => {
//         navigate('/login'); // Navigate to the login page
//     };

//     return (
//         <div>
//             <div className="fixed top-0 left-0 w-full h-16 border bg-white shadow-lg p-4 flex items-center px-4 sm:px-8 md:px-12 z-10">
//                 {/* Logo */}
//                 <img
//                     src="https://www.jobringer.com/images/logonew.svg"
//                     alt="JobRinger Logo"
//                     className="h-12 cursor-pointer"
//                 />

//                 {/* Text: "BRINGING YOU THE PERFECT JOB" */}
//                 <p className="hidden sm:block text-center text-gray-700 text-sm sm:text-lg ml-4 sm:ml-10 font-light">
//                     BRINGING YOU <span className="text-blue-600 font-bold">THE PERFECT JOB</span>
//                 </p>

//                 {/* Menu items */}
//                 <div className="hidden sm:flex flex-1 justify-center space-x-8">
//                     <p className="text-center text-gray-700 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-500 font-bold py-2 px-4 rounded cursor-pointer transform hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out">
//                         Jobs
//                     </p>
//                     <p className="text-center text-gray-700 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-500 font-bold py-2 px-4 rounded cursor-pointer transform hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out">
//                         Active Employers
//                     </p>
//                     <p className="text-center text-gray-700 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-500 font-bold py-2 px-4 rounded cursor-pointer transform hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out">
//                         Pricing
//                     </p>
//                 </div>

//                 {/* Button section */}
//                 <div className="hidden sm:flex space-x-4 ml-auto">
//                     <div className="flex items-center justify-center rounded-lg border-[1px] border-gray-400 cursor-pointer font-medium p-2 pl-4 pr-4">
//                         Jobseeker Login
//                     </div>
//                     <div
//                         onClick={handleLoginNavigation}
//                         className="flex items-center justify-center bg-yellow-400 cursor-pointer font-medium rounded-lg border-gray-400 p-2 pl-4 pr-4"
//                     >
//                         Employers Login
//                     </div>
//                 </div>

//                 {/* Mobile Menu Button for smaller screens */}
//                 <div className="sm:hidden ml-auto flex items-center">
//                     <div className="cursor-pointer font-medium text-gray-700">Menu</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Job;
