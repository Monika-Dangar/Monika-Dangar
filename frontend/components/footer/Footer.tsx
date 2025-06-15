import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mx-24 my-24">
        <div className="md:flex flex-col md:flex-row justify-center md:justify-around ">
          <div className="flex items-center justify-center">
            <h5
              className=" mt-1 text-xl"
              style={{
                fontFamily: "Source Code Pro, monospace",
              }}
            >
              <span className="text-white">Monika&lt;Dangar&gt;</span>
            </h5>
          </div>

          <div className="text-xl">
            <div
              className=" flex justify-center space-x-4"
              style={{ fontFamily: "Source Code Pro, monospace" }}
            >
              <Link href={"#about"} className="text-primary hover:text-gray-300">
                home
              </Link>
              <Link href={"#projects"} className="text-primary hover:text-gray-300">
                projects
              </Link>
              <Link href={"#contact"} className="text-primary hover:text-gray-300">
                contact
              </Link>
            </div>
          </div>
        </div>

        <p
          className="text-center my-16 text-primary"
          style={{ fontFamily: "Source Code Pro, monospace" }}
        >
          &copy;2024 Monika Dangar | Web Developer
        </p>
      </footer>
    </>
  );
};

export default Footer;
