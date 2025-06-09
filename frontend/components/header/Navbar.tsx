// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaCode, FaBars, FaTimes, FaFileCode, FaLaptopCode, FaKeyboard } from "react-icons/fa";
// import { IoMdHome } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import FloatingDockDemo from "../FloatingDockCompo";
// import { CiHome } from "react-icons/ci";
// import { GoHome, GoTerminal } from "react-icons/go";
// import { VscBracketDot, VscHome, VscTerminal } from "react-icons/vsc";
// import { CgTerminal } from "react-icons/cg";
// import { BiMessageAltDetail, BiNetworkChart } from "react-icons/bi";
// import { HiOutlineLink } from "react-icons/hi";
// import { TbMessageCode, TbPlugConnected } from "react-icons/tb";
// import { FiGlobe } from "react-icons/fi";
// import { SiPostman } from "react-icons/si";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { PiStackSimpleLight } from "react-icons/pi";
// // const Navbar = () => {
// //   const [navbarOpen, setNavbarOpen] = useState(false);

// //   const toggleNavbar = () => {
// //     setNavbarOpen((prevState) => !prevState); // Toggle the sidebar visibility
// //   };

// //   return (
// //     <>
// //       <header>
// //         {/* Top Navbar */}
// //         <div className="fixed top-0 left-2 right-2 h-10 my-2 border-[#1A1E33] bg-[#1A1E33] rounded-lg flex items-center justify-between md:justify-center px-4 md:px-8 shadow-md z-50">
// //           <Link href={"/"} className="text-xl font-bold">
// //             <FaCode className="inline align-middle mr-2 md:text-2xl" />
// //           </Link>
// //           <div
// //             style={{
// //               fontFamily: "Source Code Pro, monospace",
// //             }}
// //             className=" text-xl md:text-2xl font-bold text-white"
// //           >
// //             Monika&lt;Dangar&gt;
// //           </div>

// //           {/* Hamburger Menu */}
// //           <button
// //             aria-label="Toggle navigation"
// //             onClick={toggleNavbar}
// //             className="md:hidden z-60 relative "
// //           >
// //             {navbarOpen ? (
// //               <FaTimes className="text-2xl text-white" />
// //             ) : (
// //               <FaBars className="text-2xl" />
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         <div
// //           className={`fixed inset-0 bg-black bg-opacity-90 transition-transform duration-300 ease-in-out ${navbarOpen ? "translate-x-0" : "translate-x-full"
// //             } md:hidden z-40`}
// //         >
// //           <nav className="flex flex-col items-center justify-center h-full space-y-6">
// //             <Link
// //               href={"#about"}
// //               onClick={() => setNavbarOpen(!navbarOpen)}
// //               className="flex flex-col items-center text-3xl text-white hover:text-gray-300 transition-colors duration-200"
// //             >
// //               <IoMdHome className="mb-2" />
// //               <span className="text-lg">About</span>
// //             </Link>
// //             <Link
// //               href={"#projects"}
// //               onClick={() => setNavbarOpen(!navbarOpen)}
// //               className="flex flex-col items-center text-3xl text-white hover:text-gray-300 transition-colors duration-200"
// //             >
// //               <FaFileCode className="mb-2" />
// //               <span className="text-lg">Projects</span>
// //             </Link>
// //             <Link
// //               href={"#contact"}
// //               onClick={() => setNavbarOpen(!navbarOpen)}
// //               className="flex flex-col items-center text-3xl text-white hover:text-gray-300 transition-colors duration-200"
// //             >
// //               <MdEmail className="mb-2" />
// //               <span className="text-lg">Contact</span>
// //             </Link>
// //           </nav>
// //         </div>

// //         {/* Sidebar for larger screens */}
// //         <div className="hidden fixed left-2 md:flex items-center justify-center my-2 h-[calc(100vh-1rem)] w-10 border border-[#1A1E33] bg-[#1A1E33] rounded-lg shadow-md z-50">
// //           <nav className="flex flex-col items-center justify-center space-y-4">
// //             <Link
// //               href={"#about"}
// //               className="relative group text-3xl text-white hover:text-gray-300 hover:text-[#FBBF24] transition-colors duration-200"
// //             >
// //               {/* <GoHome /> */}
// //               <VscHome />
// //               {/* <IoMdHome /> */}
// //               <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white text-black text-sm rounded-md py-1 px-2 border border-light-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
// //                 welcome()
// //               </span>
// //             </Link>
// //             <Link
// //               href={"#projects"}
// //               className="relative group text-3xl text-white hover:text-gray-300 hover:text-[#FBBF24] transition-colors duration-200"
// //             >
// //               <VscBracketDot />
// //               {/* <FaFileCode /> */}
// //               <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap  bg-white text-black text-sm rounded-md py-1 px-2 border border-light-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 myBuilds()
// //               </span>
// //             </Link>
// //             <Link
// //               href={"#contact"}
// //               className="relative group text-3xl text-white hover:text-gray-300 hover:text-[#FBBF24] transition-colors duration-200"
// //             >
// //               {/* <CgTerminal /> */}
// //               {/* <FaKeyboard /> */}
// //               <HiOutlineLink />
// //               <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white text-black text-sm rounded-md py-1 px-2 border border-light-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 reachOut()
// //               </span>
// //             </Link>
// //           </nav>
// //         </div>

// //         {/* Bottom Navbar */}
// //         <div className="fixed bottom-0 left-2 right-2 h-10 my-2 border border-[#1A1E33] bg-[#1A1E33] rounded-lg flex items-center justify-end px-4 md:px-8 shadow-md z-50">
// //           <FloatingDockDemo />
// //         </div>
// //       </header>

// //       {/* Define custom properties in CSS for consistent sidebar width */}
// //       <style jsx global>{`
// //         :root {
// //           --navbar-height: 2.5rem; /* Adjust to match the height of your navbars */
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // const Navbar = () => {
// //   const [navbarOpen, setNavbarOpen] = useState(false);

// //   const toggleNavbar = () => {
// //     setNavbarOpen((prevState) => !prevState);
// //   };

// //   return (
// //     <>
// //       <header>
// //         {/* Top Navbar */}
// //         <div className="fixed top-0 left-2 right-2 h-10 my-2 border border-gray-700 rounded-lg flex items-center justify-between md:justify-center px-4 md:px-8 shadow-md z-50 bg-secondary">
// //           <Link href={"/"} className="text-xl font-bold text-primary">
// //             <FaCode className="inline align-middle mr-2 md:text-2xl" />
// //           </Link>
// //           <div
// //             style={{
// //               fontFamily: "Source Code Pro, monospace",
// //             }}
// //             className="text-xl md:text-2xl font-bold text-primary"
// //           >
// //             Monika&lt;Dangar&gt;
// //           </div>
// //           <button
// //             aria-label="Toggle navigation"
// //             onClick={toggleNavbar}
// //             className="md:hidden z-60 relative"
// //           >
// //             {navbarOpen ? (
// //               <FaTimes className="text-2xl text-primary" />
// //             ) : (
// //               <FaBars className="text-2xl text-primary" />
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         <div
// //           className={`fixed inset-0 bg-secondary bg-opacity-90 transition-transform duration-300 ease-in-out ${navbarOpen ? "translate-x-0" : "translate-x-full"
// //             } md:hidden z-40`}
// //         >
// //           <nav className="flex flex-col items-center justify-center h-full space-y-6">
// //             <Link
// //               href={"#about"}
// //               onClick={() => setNavbarOpen(!navbarOpen)}
// //               className="flex flex-col items-center text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
// //             >
// //               {/* <IoMdHome className="mb-2" /> */}
// //               <VscHome className="mb-2" />
// //               <span className="text-lg">welcome()</span>
// //             </Link>
// //             <Link
// //               href={"#projects"}
// //               onClick={() => setNavbarOpen(!navbarOpen)}
// //               className="flex flex-col items-center text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
// //             >
// //               {/* <FaFileCode className="mb-2" /> */}
// //               <VscBracketDot className="mb-2" />
// //               <span className="text-lg">myBuilds()</span>
// //             </Link>
// //             <Link
// //               href={"#contact"}
// //               onClick={() => setNavbarOpen(!navbarOpen)}
// //               className="flex flex-col items-center text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
// //             >
// //               {/* <MdEmail className="mb-2" /> */}
// //               <HiOutlineLink className="mb-2" />
// //               <span className="text-lg">reachOut()</span>
// //             </Link>
// //           </nav>
// //         </div>

// //         {/* Sidebar for larger screens */}
// //         <div className="hidden fixed left-2 md:flex items-center justify-center my-2 h-[calc(100vh-1rem)] w-10 border border-gray-700 rounded-lg shadow-md z-50 bg-secondary">
// //           <nav className="flex flex-col items-center justify-center space-y-4">
// //             <Link
// //               href={"#about"}
// //               className="relative group text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
// //             >
// //               <VscHome />
// //               <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-secondary text-primary text-sm rounded-md py-1 px-2 border border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 welcome()
// //               </span>
// //             </Link>
// //             <Link
// //               href={"#projects"}
// //               className="relative group text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
// //             >
// //               <VscBracketDot />
// //               <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-secondary text-primary text-sm rounded-md py-1 px-2 border border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 myBuilds()
// //               </span>
// //             </Link>
// //             <Link
// //               href={"#contact"}
// //               className="relative group text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
// //             >
// //               <HiOutlineLink />
// //               <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-secondary text-primary text-sm rounded-md py-1 px-2 border border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 reachOut()
// //               </span>
// //             </Link>
// //           </nav>
// //         </div>

// //         {/* Bottom Navbar */}
// //         <div className="fixed bottom-0 left-2 right-2 h-10 my-2 border border-gray-700 rounded-lg flex items-center justify-end px-4 md:px-8 shadow-md z-50 bg-secondary">
// //           <FloatingDockDemo />
// //         </div>
// //       </header>

// //       <style jsx global>{`
// //         :root {
// //           --navbar-height: 2.5rem;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// export default Navbar

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCode, FaBars, FaTimes, FaFileCode, FaLaptopCode, FaKeyboard } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import FloatingDockDemo from "../FloatingDockCompo";
import { VscBracketDot, VscHome, VscTerminal } from "react-icons/vsc";
import { HiOutlineLink } from "react-icons/hi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        {/* Top Navbar */}
        <div className="fixed top-0 left-2 right-2 h-10 my-2 border border-gray-700 rounded-lg flex items-center justify-between md:justify-center px-4 md:px-8 shadow-md z-50 bg-secondary">
          <Link href={"/"} className="text-xl font-bold text-primary">
            <FaCode className="inline align-middle mr-2 md:text-2xl" />
          </Link>
          <div className="text-xl md:text-2xl font-bold text-primary">
            Monika&lt;Dangar&gt;
          </div>
          <button
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
            className="md:hidden z-60 relative"
          >
            {navbarOpen ? (
              <FaTimes className="text-2xl text-primary" />
            ) : (
              <FaBars className="text-2xl text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-secondary bg-opacity-90 transition-transform duration-300 ease-in-out ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden z-40`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            <Link
              href={"#about"}
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex flex-col items-center text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
            >
              <IoMdHome className="mb-2" />
              <span className="text-lg font-medium">About</span>
            </Link>
            <Link
              href={"#projects"}
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex flex-col items-center text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
            >
              <FaFileCode className="mb-2" />
              <span className="text-lg font-medium">Projects</span>
            </Link>
            <Link
              href={"#contact"}
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex flex-col items-center text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
            >
              <MdEmail className="mb-2" />
              <span className="text-lg font-medium">Contact</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar for larger screens */}
        <div className="hidden fixed left-2 md:flex items-center justify-center my-2 h-[calc(100vh-1rem)] w-10 border border-gray-700 rounded-lg shadow-md z-50 bg-secondary">
          <nav className="flex flex-col items-center justify-center space-y-4">
            <Link
              href={"#about"}
              className="relative group text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
            >
              <VscHome />
              <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-secondary text-primary text-sm rounded-md py-1 px-2 border border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                welcome()
              </span>
            </Link>
            <Link
              href={"#projects"}
              className="relative group text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
            >
              <VscBracketDot />
              <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-secondary text-primary text-sm rounded-md py-1 px-2 border border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                myBuilds()
              </span>
            </Link>
            <Link
              href={"#contact"}
              className="relative group text-3xl text-primary hover:text-accent-blue transition-colors duration-200"
            >
              <HiOutlineLink />
              <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-secondary text-primary text-sm ROUND-md py-1 px-2 border border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                reachOut()
              </span>
            </Link>
          </nav>
        </div>

        {/* Bottom Navbar */}
        <div className="fixed bottom-0 left-2 right-2 h-10 my-2 border border-gray-700 rounded-lg flex items-center justify-end px-4 md:px-8 shadow-md z-50 bg-secondary">
          <FloatingDockDemo />
        </div>
      </header>

      <style jsx global>{`
        :root {
          --navbar-height: 2.5rem;
        }
      `}</style>
    </>
  );
};

export default Navbar;