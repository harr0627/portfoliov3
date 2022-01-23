import React from 'react';
import Typical from 'react-typical';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

export default function hero() {
  return (
    <div className="flex items-center min-h-[40vh] md:min-h-screen">
      <div className="container m-auto ">
        <h1 className="text-center hero-text text-7xl text-white">
          Kelsey Harrison
        </h1>
        <div>
          <p className="text-center text-2xl">
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
          </p>
          <div className="flex flex-wrap mx-auto justify-center">
            <a
              className="text-3xl m-2"
              href="https://github.com/harr0627"
              target="_blank"
            >
              <FaGithub className="icon" />
            </a>
            <a
              className="text-3xl m-2"
              href="https://www.linkedin.com/in/kelsey-harrison-b2008713b/"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              className="text-3xl m-2"
              href="https://kelseyharrison.me"
              target="_blank"
            >
              <FaBlog className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
