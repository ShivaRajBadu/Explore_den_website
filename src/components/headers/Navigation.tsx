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
        <nav className="text-foreground">
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
        <button className="bg-brand text-background px-6 py-3 rounded-lg font-semibold text-sm font-poppins hover:bg-brand/90 duration-300 ">
          Download App
        </button>
      </div>
    </Wrapper>
  );
};

export default Navigation;
