import "./App.css";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"; // Correct imports

import Job from './components/Job';
import Login from './components/Login'; // Ensure the 'L' in 'Login' is uppercase

// Create the router outside the App component to avoid re-creating it on each render
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Home page route
  },
  {
    path: "/login", // Login route
    element: <Job />, // Use the Login component for both routes for now
  },
]);

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remoteIndex, setRemoteIndex] = useState(0);
  const [someState, setSomeState] = useState(false);

  // Use navigate directly in the App component
  const navigate = useNavigate();

  // Define the navigation handler
  const handleLoginNavigation = () => {
    navigate('/login'); // Corrected path: '/login' instead of '/Login'
  };
  const navigate2 = useNavigate();

  // Define the navigation handler
  const handleJobNavigation = () => {
    navigate2('/Job'); // Corrected path: '/login' instead of '/Login'
  };

  const jobs = [
    {
      title: "IT Content Writer",
      company: "Webkul",
      type: "In Office job",
      employment: "Full Time - Permanent",
      experience: "0 - 1 Years",
      location: "Noida / India",
    },
    {
      title: "SAPUI5",
      company: "HRM INFO",
      type: "In Office job",
      employment: "Full Time - Permanent",
      experience: "4 - 8 Years",
      location: "Bengaluru / Bangalore / India",
    },
    {
      title: "HVAC Service Engineer",
      company: "RC Project Consultancy",
      type: "In Office job",
      employment: "Full Time - Permanent",
      experience: "1 - 5 Years",
      location: "Mumbai / India",
    },
    {
      title: "Research Associate ",
      company: "Insight Alpha",
      type: "Hybrid job",
      employment: "Full Time",
      experience: "0 - 1 Years",
      location: "New Delhi / India",
    },
    {
      title: "Associate DevOps Engineer",
      company: "Ivanti",
      type: "Remote job",
      employment: "Full Time - On Contract",
      experience: "4 - 6 Years",
      location: "UK, United Kingdom",
    },
    {
      title: "Sql Developer",
      company: "Artiscien",
      type: "Remote job",
      employment: "Full Time - On Contract",
      experience: "0 - 1 Years",
      location: "delhi, india",

    },
    {
      title: "Social Media Intern",
      company: "nxumq",
      type: "Remote job",
      employment: "Full Time - On Contract",
      experience: "1 - 2 Years",
      location: "Noida, india",
    },
    {
      title: "Data Science Mentor-Sme",
      company: "XpertRech",
      type: "Remote job",
      employment: "Full Time - On Contract",
      experience: "4 - 6 Years",
      location: "UK, United Kingdom",

    },

  ];



  const remoteJobs = [
    {
      title: "Associate DevOps Engineer - ITSM",
      company: "Ivanti",
      type: "Remote job",
      employment: "Full Time - On Contract",
      experience: "4 - 6 Years",
      location: "UK, United Kingdom",
    },
    {
      title: "Research Associate - Delhi",
      company: "Insight Alpha",
      type: "Remote job",
      employment: "Full Time",
      experience: "0 - 1 Years",
      location: "New Delhi / India",
    },
    {
      title: "Engagement Manager",
      company: "AGDATA, LP",
      type: "Remote job",
      employment: "Full Time",
      experience: "2 - 4 Years",
      location: "USA, United States of America",
    },
    {
      title: "DevOps-engineer - ITSM",
      company: "TCS",
      type: "Remote job",
      employment: "Full Time - On Contract",
      experience: "2 - 6 Years",
      location: "UK, United Kingdom",
    },
    {
      title: "Database Engineer ",
      company: "Insight Alpha",
      type: "Remote job",
      employment: "Full Time",
      experience: "0 - 1 Years",
      location: "New Delhi / India",
    },
    {
      title: "UI/UX Designer",
      company: "AGDATA, LP",
      type: "Hybrid job",
      employment: "Full Time",
      experience: "2 - 4 Years",
      location: "USA, United States of America",
    },
    {
      title: "AI/ML Engineer ",
      company: "Insight Alpha",
      type: "Remote job",
      employment: "Full Time",
      experience: "0 - 1 Years",
      location: "New Delhi / India",
    },
    {
      title: "System Designer",
      company: "Ibm, LP",
      type: "Hybrid job",
      employment: "Full Time",
      experience: "2 - 4 Years",
      location: "USA, United States of America",
    },
  ];

  // logos section here located at the footer section 
  const logos = [
    { id: 1, src: "https://www.jobringer.com/images/content/company-logo/hjp59ce038bf34269cb12980b8c6e53cf7c.png", alt: "unorg" },
    { id: 2, src: "https://www.jobringer.com/images/content/company-logo/hjp449ab2e94039fa2ed97976ae0b70d810.png", alt: "Logo 2" },
    { id: 3, src: "https://www.jobringer.com/images/content/company-logo/hjp13fdbfa580473cdce73ffd2aee3da267.png", alt: "Aayan InfoTech" },
    { id: 4, src: "https://www.jobringer.com/images/content/company-logo/hjpc470a69baac5a6eb9bd5050d68ec975a.png", alt: "e-patang" },
    { id: 5, src: "https://www.jobringer.com/images/content/company-logo/hjpe57c399d13412f865963911b7f04a94a.png", alt: "mizzlecodes" },
    { id: 6, src: "https://www.jobringer.com/images/content/company-logo/hjp7d45c9d0e2120268534ec423b607956b.png", alt: "system-update" },
    { id: 7, src: "https://www.jobringer.com/images/content/company-logo/hjp4e01d80ed7f83f7e0db7d15af47ac887.png", alt: "Cloud Logo" },
    { id: 8, src: "https://www.jobringer.com/images/content/company-logo/hjpf3f63d5ecf18c41152fcdc64cd38f291.png", alt: "Graduation Hat Logo" },
  ];


  // Define the handlePrev function
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Decrease the current index to move to the previous job
    }
  };

  // Define the handleNext function
  const handleNext = () => {
    if (currentIndex < jobs.length - 1) {
      setCurrentIndex(currentIndex + 1); // Increase the current index to move to the next job
    }
  };
  // all handler was above 


  return (
    <div>
      <div className="w-full h-full bg-white">

{/* Navbar fixed at the top */}
<div className="fixed top-0 left-0 w-full h-16 border bg-white shadow-lg p-4 flex items-center px-4 sm:px-8 md:px-12 z-10">
  {/* Logo */}
  <img
    src="https://www.jobringer.com/images/logonew.svg"
    alt="JobRinger Logo"
    className="h-12 cursor-pointer"
  />

  {/* Text: "BRINGING YOU THE PERFECT JOB" */}
  <p className="hidden sm:block text-center text-gray-700 text-sm sm:text-lg ml-4 sm:ml-10 font-light">
    BRINGING YOU <span className="text-blue-600 font-bold">THE PERFECT JOB</span>
  </p>

  {/* Menu items */}
  <div className="hidden sm:flex flex-1 justify-center space-x-8">
    <p className="text-center text-gray-700 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-500 font-bold py-2 px-4 rounded cursor-pointer transform hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out">
      Jobs
    </p>
    <p className="text-center text-gray-700 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-500 font-bold py-2 px-4 rounded cursor-pointer transform hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out">
      Active Employers
    </p>
    <p className="text-center text-gray-700 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-500 font-bold py-2 px-4 rounded cursor-pointer transform hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out">
      Pricing
    </p>
  </div>
  {/* Button section */}
  <div className="hidden sm:flex space-x-4 ml-auto">
    <div onClick={handleJobNavigation} className="flex items-center justify-center rounded-lg border-[1px] border-gray-400 cursor-pointer font-medium p-2 pl-4 pr-4">
      Jobseeker Login
    </div>
    <div onClick={handleLoginNavigation} className="flex items-center justify-center bg-yellow-400 cursor-pointer font-medium rounded-lg border-gray-400 p-2 pl-4 pr-4">
      Employers Login
    </div>
  </div>
  {/* Mobile Menu Button for smaller screens */}
  <div className="sm:hidden ml-auto flex items-center">
    <div className="cursor-pointer font-medium text-gray-700">Menu</div>
  </div>
</div>




{/* Content Below Navbar */}
<div className="w-[1360px] ml-2 ">
  <div className="w-full  mt-2  flex h-16 bg-gradient-to-r mt-20 from-emerald-400 to-blue-600 text-white p-3  rounded-xl shadow-md">
    <h1 className="font-medium text-3xl ml-10">EMPLOYERS</h1>
    <p className="text-yellow-300 ml-40 p-2 font-bold transition-colors duration-500 ease-in-out">WELCOME OFFER-FREE JOB Postings and Much More</p>

    <button className="ml-28 bg-yellow-400 cursor-pointer hover:text-white transition-colors duration-300 font-medium rounded-lg text-gray-800 p-2 pl-4 pr-4">
      Register for FREE
    </button>
    <button className="ml-2  bg-white  cursor-pointer font-medium rounded-lg text-gray-800 p-2 pl-4 pr-4">
      Post A Job
    </button>
    <p className="ml-6 p-2 text-lg cursor-pointer underline" >Sales Enquiry</p>
  </div>
  {/* text content  */}
  <div className="p-4">
    <h1 className="justify-center text-center font-extrabold  text-xl text-blue-900">BRINGING YOU THE PERFECT JOB !</h1>
    <h1 className="justify-center text-center font-medium text-xl text-blue-900">11,000+ Jobs to Apply</h1>
  </div>
</div>




{/* Text Content */}
<div className="p-4 text-center">
  <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl text-blue-900">
    BRINGING YOU THE PERFECT JOB!
  </h1>
  <h1 className="font-medium text-lg sm:text-xl text-blue-900">
    11,000+ Jobs to Apply
  </h1>
</div>


{/* content below bringing  */}
<div className="flex flex-wrap w-full gap-12 h-40">
  {/* left side  */}
  <div className="bg-emerald-300 w-[580px] ml-20 rounded-lg">
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Search Job Now"
      disabled
      className="w-3/4 px-4 py-2 h-8 mt-12 ml-4 border placeholder:text-gray-700 bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="ml-4 bg-yellow-400 font-medium rounded pl-6 pr-6 h-8">
      Search
    </button>
    <button className=" hover:text-white transition-colors duration-300 rounded bg-yellow-400 font-medium h-8 pl-4 mt-1 ml-[405px] pr-4" >Register For FREE</button>
    <div className="border-[1px] rounded cursor-pointer bg-white font-medium h-8 mt-[-32px] pt-1 ml-[305px] pl-2 pr-2 w-[90px] ">View Jobs</div>
  </div>

  {/* right side content  */}
  <div className="bg-emerald-300 w-[580px] rounded-lg ml-8">
    <h1 className="flex justify-center items-center mt-4 text-xl font-bold text-blue-900">Quick job Search<i className="ri-search-line text-black mt-1 pl-2 font-bold text-xl"></i></h1>

    <div className="flex flex-wrap  cursor-pointer text-white ml-6 mt-2">
      #Fresher
      #Work From Home
      #WFH
      #IT
      #HR
      #Back Office
      #BPO Jobs
      #ITES
      #Finance
      #Accounts
      #Medical
      #Pharma
      #Manager
      #Developer
      #Marketing
      #Engineerin
      #Non Government Jobs
    </div>
  </div>
</div>





{/* content below featured job */}
<h1 className="text-blue-900 font-bold mt-4 justify-center items-center flex  text-2xl">Featured Jobs</h1>

{/* content after the featured jobs */}
<div className="flex flex-wrap gap-12 w-full h-40">
  <div className="relative overflow w-full">
    <div
      className="flex transition-transform duration-500"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`, // Use backticks for the template literal
      }}
    >
      {jobs.map((job, index) => (
        <div
          key={index}
          className="w-full sm:w-1/4 p-4 flex-shrink-0"
          style={{ minWidth: "250px" }}
        >
          <div className="bg-white shadow border border-gray-500  p-2">
            <span className="bg-yellow-400 text-white  px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">
              {job.type}
            </span>

            <h2 className="text-lg font-bold text-blue-900">{job.title}</h2>
            <p className="text-sm text-gray-700">{job.company}</p>
            <div className="mt-2 text-sm text-gray-600">
              <p>
                <i className="ri-time-line mr-1"></i>
                {job.employment}
              </p>
              <p>
                <i className="ri-briefcase-line mr-1"></i>
                {job.experience}
              </p>
              <p>
                <i className="ri-map-pin-line mr-1"></i>
                {job.location}
              </p>
            </div>
            <button className="mt-4 w-full bg-emerald-300 text-white font-medium py-2 rounded-lg hover:bg-cyan-600">
              Apply
            </button>

          </div>
        </div>

      ))}
    </div>
  </div>

  
  <button
  onClick={handlePrev}
  className={`mt-[-350px] ml-[-10px] text-white ${
    currentIndex === 0 ? 'disabled' : ''
  }`}
  disabled={currentIndex === 0} // Disable button if at the first index
>
  <i className="text-3xl text-blue-600 ri-arrow-left-s-line"></i>
</button>


<button
  onClick={handleNext}
  className={`mt-[-455px] text-white ${
    currentIndex === jobs.length - 1 ? 'disabled' : ''
  }`}
  disabled={currentIndex === jobs.length - 1} // Disable button if at the last index
>
  <i className="text-blue-700 text-3xl relative ml-[1360px] ri-arrow-right-s-line"></i>
</button>

</div>





{/* remote job section start here  */}
<div>
  <h1 className="text-blue-900 font-bold mt-24 justify-center items-center flex  text-2xl">Remote Jobs</h1>
</div>

<div className="flex flex- gap-12 w-full h-0">
  <div className="relative overflow w-full">
    <div
      className="flex transition-transform duration-500"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
      
    >
      {remoteJobs.map((reJob, index) => (
        <div
          key={index}
          className="w-full sm:w-2/4 p-4 mt-2 flex-shrink-1"
          style={{ minWidth: "345px" }}
        >
          <div className="bg-white shadow border border-gray-500  p-2">
            <span className="bg-yellow-400 text-white  px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">
              {reJob.type}
            </span>

            <h2 className="text-lg font-bold text-blue-900">{reJob.title}</h2>
            <p className="text-sm text-gray-700">{reJob.company}</p>
            <div className="mt-2 text-sm text-gray-600">
              <p>
                <i className="ri-time-line mr-1"></i>
                {reJob.employment}
              </p>
              <p>
                <i className="ri-briefcase-line mr-1"></i>
                {reJob.experience}
              </p>
              <p>
                <i className="ri-map-pin-line mr-1"></i>
                {reJob.location}
              </p>
            </div>
            <button className="mt-4 w-full bg-emerald-300 text-white font-medium py-2 rounded-lg hover:bg-cyan-600">
              Apply
            </button>
          </div>
        </div>

      ))}
    </div>
  </div>
</div>




{/* content after the remote job  */}
<div>
  <h1 className="text-black font-bold mt-[265px] justify-center items-center flex  text-2xl">FEATURED <span className="ml-2 text-sky-900">EMPLOYERS</span></h1>
</div>




{/* animation code start here  */}
<div className="overflow-hidden w-full mt-6">
  <div className="flex gap-8 justify-center items-center animate-moveHorizontally">
    {logos.map((logo) => (
      <div
        key={logo.id}
        className="flex cursor-pointer border-[1px] scale-100 rounded-lg h-28 p-4 w-32 justify-center"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-20 w-auto object-cover"
        />
      </div>
    ))}
  </div>
</div>




{/* animation code end here  */}

{/* sample end here */}
{/* Mobile App Section */}
<div className="text-start mt-20 ml-64">
  <h2 className="text-2xl font-medium mb-4">APPLY TO JOBS ON-THE-GO</h2>
  <p className="mb-4">
    <a
      href="#"
      className="text-blue-600 text-2xl hover:text-blue-800"
    >
      Jobringer Mobile App
    </a>
  </p>
  <div className="flex justify-start space-x-4">
    <a href="https://play.google.com" target="_blank" rel="noreferrer">
      <img
        src="https://www.jobringer.com/images/anroid.png"

        alt="Google Play"
        className="h-12 w-auto"
      />
    </a>
    <a href="https://apple.com/app-store" target="_blank" rel="noreferrer">
      <img
        src="https://www.jobringer.com/images/ios.png"
        alt="App Store"
        className="h-12 w-auto lazy"
      />
    </a>
  </div>
  <h1 className="font-medium text-3xl">Mobile App
    <a href="https://play.google.com/store/apps/details?id=com.jobringer.app" target="_blank" rel="noreferrer">
      <span className="ml-2 cursor-pointer text-blue-600 font-bold text-3xl"> Download </span></a></h1>
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAACUCAMAAABx2e/vAAAAZlBMVEX///8AAAD19fXPz89ubnCbm51zc3O4ubrU1NR2dna1tbUHBwbp6elvb2/b29uhoaGsrKw5OTlhYWIUFBRZWVk0NDSRkZMlJSUoKCrJycl6enxEREVKSkuBgYHCwsNTU1MeHh6JiYuLUzW5AAAC6klEQVR4nO3d2XKjMBCFYTcGATaYXRCQWN7/JQPOJHGWCeMmE6fL57tKySKlvwQuyjfa7QCAw2G49Zo3cYK+7x/2/+5hMV9yuvXK2fwk0VbFcaxm4ax9J3xy/nOZotxFOCVpGtx68SxOW5rsrJsZMwzlWf7BeXgYjDHzxKcLjEluvX6Oqq46elWsOl5MNk1jbx1wvXIo83nx2dMNbQ2tKvLlHm9V1xypCAXutNcOLVXey3dwVK025y8XB3FRWJML+yaLJjNRt38dcFaaj0cKL673CqNC/ePL3uSg3bw4XI7YlWai/mK205I2iayNTkNN5ZuRSK08zW93ta/LNul3gkSHfKJ3t2bkp195ePv65XSN1v4PLnmzk19aOqzP+0JJ2vqSXkMD31XHba9SMelQVPP+EG5tVqTdg6xm5W5uTpW0fUbz9eZm9/6aPTT/dmhmQbMAaGZBswBoZkGzAGhmidH8+33DbwYCm+9xn9HMgGYB0MyCZgHQzIJmAdDMgmYB0Mxyj833+NsQmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgVAMwuaBUAzC5oFQDMLmgX4lnMHpTX76juaRZ21GPh5SNtOe41Jt6L2OerLibadWV2O2oo6L9bpc4/Upv/QVXoS1bxLra67LXemP4ZuIqu517mliX+9U5JntKTHeV6zNTobU+6io5bcWEk7xL4fjG0o7INTdK3TPh3I2C6Xtc278yn0eUNUdSq+jupqoixvsv2tE66ns7wjOhZFMY5jXTeLapF9sIwuH9d1Pc8tCqJyMKIOc//D6dvWll0zLsnPvZ8EP0e/ZFcmnqze9hZ3M1GvtfaSz3mzv3yidRKIe5ZfRafr7U//OfgR7hNYPO6KXjAAAAAASUVORK5CYII="
    alt="Mobile App Preview"
    className="h-80 mt-[-200px] ml-96"
  />
</div>

{/* footer section  */}
{/* Header Section */}
<div className="bg-white shadow-lg rounded-lg p-6">
  <div className="grid grid-cols-2 gap-6">

    {/* Jobs in India */}
    <div className="w-[650px] rounded-lg bg-emerald-100">
      <h2 className="text-2xl font-bold mt-4 flex justify-center mb-4">JOBS IN INDIA</h2>
      <div className="flex flex-wrap ml-6 mt-4 gap-4">
        {["Mumbai", "Delhi", "Ajmer", "Pune", "Hyderabad", "Agra", "Chennai", "Kolkata", "Indore", "Gurugram", "Jaipur", "Ahmedabad"].map((city) => (
          <span
            key={city}
            className="text-sm text-black font-medium hover:underline cursor-pointer"
          >
            #{city}
          </span>
        ))}
      </div>
    </div>





    {/* International Jobs */}
    <div className=" w-[650px] rounded-lg bg-emerald-100">
      <h2 className="text-2xl justify-center mt-4 flex font-bold mb-4">INTERNATIONAL JOBS</h2>
      <div className="flex flex-wrap ml-12 gap-4">
        {["Africa", "USA", "UK", "Australia", "Canada", "Singapore", "Dubai", "Saudi Arabia", "New Zealand"].map((country) => (
          <span
            key={country}
            className="text-sm  text-black font-medium hover:underline cursor-pointer"
          >
            #{country}
          </span>
        ))}
      </div>
    </div>
  </div>





  {/* Statistics Section */}
  <div className="border-t border-blue-900 mt-6 pt-6 grid grid-cols-4 gap-4 text-center">
    <div>
      <p className="text-gray-900 font-medium">Jobs Posted</p>
      <h3 className="text-4xl font-bold tracking-wide mt-4 text-blue-600">31179</h3>
    </div>
    <div>
      <p className="text-gray-900 font-medium">Jobs Filled</p>
      <h3 className="text-4xl font-bold tracking-wide mt-4 text-blue-600">15153</h3>
    </div>
    <div>

      <p className="text-gray-900 font-medium">Employers</p>
      <h3 className="text-4xl mt-4 font-bold tracking-wider text-blue-600">19967</h3>
    </div>
    <div>

      <p className="text-gray-900 font-medium ">Active Users</p>
      <h3 className="text-4xl font-bold mt-4 text-blue-600 tracking-wider">1295358</h3>
    </div>
  </div>




  {/* Disclaimer */}
  <div className="border-t border-blue-900 mt-6  pt-6 text-gray-900 text-lg">
    <p className="text-sm text-gray-900 ml-4 font-bold">
      <span className="text-lg text-black font-bold">Disclaimer:</span> All Trademarks and Logos are the property of their
      respective owners, depicted here purely for representation purpose.
      Jobringer.com has taken all reasonable steps to ensure that
      information on this site is genuine. Job Applicants are advised to
      evaluate independently. Jobringer.com shall not have any
      responsibility in this regard.
    </p>
  </div>
</div>




{/* Footer Section */}
<footer className="text-center mt-6 text-gray-600">
  <div className="flex justify-center gap-4 my-4">
    {["whatsapp", "facebook", "twitter", "instagram", "linkedin", "youtube", "telegram"].map(
      (icon) => (
        <span key={icon} className="cursor-pointer hover:text-blue-600">
          {icon}
        </span>
      )
    )}
  </div>


  <p>Recognized by <span className="text-orange-500 font-bold">#startupindia</span></p>

</footer>
{/* end with */}






{/* another footer with a image and content that was required*/}
<hr className="border-t-2 border-gray-900 my-4"></hr>
<div className="flex flex-wrap justify-center text-cl font-medium  text-gray-700 space-x-4 mb-4">
  <a href="#" className="hover:underline"> Terms and Conditions |</a>
  <a href="#" className="hover:underline"> Privacy Policy |</a>
  <a href="#" className="hover:underline"> Refund | Cancellation Policy |</a>
  <a href="#" className="hover:underline"> About Us |</a>
  <a href="#" className="hover:underline"> Contact Us |</a>
  <a href="#" className="hover:underline"> FAQ</a>
</div>




{/* Copyright Section */}
<div className="text-center text-cl font-medium text-gray-600">
  © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
</div>





{/* WhatsApp Floating Button */}
<a
  href="https://api.whatsapp.com/send?phone=919321405978&text=Hi"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
>
  <img
    src="https://www.iconpacks.net/icons/2/free-icon-whatsapp-logo-4456.png"
    alt="WhatsApp Logo"
    className="h-6 w-6"

  />

</a>
</div >
</div>
  )
}
export default App
