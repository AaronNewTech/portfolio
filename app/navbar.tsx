import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div id="sticky-top-bar">
      <div id="sticky-top-bar-inner">
        <div className="w-1/3 mr-10">
          <Image
            src="/images/homepage1/aaron.png"
            alt="Aaron Image"
            layout="responsive"
            min-width={50}
            width={100}
            height={50}
            objectFit="cover"
            z-Index={10}
          />
        </div>
        <ul className="flex space-x-20">
          <li>
            <Link href="/#home">Home</Link>
          </li>
          <li>
            <Link href="/#about-me">About Me</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#contact-me">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
