import React from 'react';
import Typical from 'react-typical';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

export default function hero() {
  return (
    <div className="flex items-center min-h-screen">
      <div className="container m-auto ">
        <h1 className="text-center text-7xl ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-500 to-sky-500">
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
    </div>
  );
}
