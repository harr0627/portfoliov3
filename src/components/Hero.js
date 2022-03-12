import React from 'react';
import Typical from 'react-typical';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';
import { ReactComponent as HeroImage } from '../assets/images/proudProgrammer.svg';

export default function hero() {
  return (
    <div className="container m-auto flex items-center w-screen min-h-screen flex-wrap sm:flex-wrap  md:flex-wrap lg:flex-nowrap lx:flex-nowrap 2xl:flex-nowrap">
      <div className="container m-auto w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <h1 className="text-center text-4xl lg:text-7xl ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-500 to-sky-500">
          Kelsey Harrison
        </h1>
        <div className="mx-2">
          <div className="text-center text-2xl">
            <Typical
              loop={1}
              steps={[
                'UX Designer',
                1000,
                'Web Developer',
                1000,
                'Software Developer',
                2000,
                'Full-Stack Developer',
              ]}
            />
          </div>
          <div className="flex flex-wrap mx-auto justify-center">
            <a
              aria-label="github button"
              className="text-3xl m-2"
              href="https://github.com/harr0627"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              aria-label="Linkedin button"
              className="text-3xl m-2"
              href="https://www.linkedin.com/in/kelsey-harrison-b2008713b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              aria-label="Blog button"
              className="text-3xl m-2"
              href="https://kelseyharrison.me"
              target="_blank"
              rel="noreferrer"
            >
              <FaBlog className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="container m-auto w-full sm:w-full md:w-full max-h-fit lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <HeroImage className="container m-auto max-w-full max-h-52 sm:w-1/2 md:w-1/2 lg:p-20 lg:max-h-fit xl:w-full xl:p-20 2xl:w-full 2xl:p-20" />
      </div>
    </div>
  );
}
