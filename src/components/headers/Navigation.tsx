import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between py-8 ">
        <Link href="/" className="">
          <Image
            src="/icons/logo.svg"
            alt="explore den logo"
            width={0}
            height={0}
            priority
            className="w-auto h-auto"
          />
        </Link>
        <nav className="text-foreground hidden lg:block">
          <ul className="flex gap-9 capitalize">
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/destination">
                Destination
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/activites">
                Activites
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hidden lg:block  bg-brand  text-background px-6 py-3 rounded-lg font-semibold text-sm font-poppins hover:bg-brand/90 duration-300 ">
          Download App
        </button>
        <div className="cursor-pointer block lg:hidden">
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Navigation;
