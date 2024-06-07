"use client";
import React, { useEffect } from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import { NavLinks } from "@/constants/data";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navigation = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    // Function to handle scroll
    const handleScroll = () => {
      if (isOpen) {
        window.scrollTo(0, 0);
      }
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  return (
    <Wrapper>
      <div className="flex items-center justify-between py-8 ">
        <Logo />
        {/* desktop */}
        <nav className="text-foreground hidden lg:block">
          <ul className="flex gap-9 capitalize">
            {NavLinks.map((link, index) => {
              const isActive = pathName === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`nav-link ${isActive ? "text-brand" : ""}`}
                    href={link.link}
                    scroll={false}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* mobile and tablet */}

        <nav
          className={`lg:hidden text-background   p-4  bg-textPrimary  duration-300 h-full top-0 z-50 w-[80%] sm:w-[60%] right-0 fixed   ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="justify-end flex border-b pb-4 border-textSecondary">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" w-min ml-auto mr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col  text-center  capitalize">
            {NavLinks.map((link, index) => {
              const isActive = pathName === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`nav-link ${
                      isActive ? "text-brand" : ""
                    }  py-6 block hover:text-brand/90 duration-300 border-b border-textSecondary`}
                    href={link.link}
                    scroll={false}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <button className="block mx-auto mt-10 w-full   bg-brand  text-background px-6 py-3 rounded-lg font-semibold text-sm font-poppins hover:bg-brand/90 duration-300 ">
                Download App
              </button>
            </li>
          </ul>
        </nav>

        <button className="hidden lg:block  bg-brand  text-background px-6 py-3 rounded-lg font-semibold text-sm font-poppins hover:bg-brand/90 duration-300 ">
          Download App
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer block lg:hidden"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9H27M5 16H27M5 23H27"
              stroke="#242021"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navigation;
