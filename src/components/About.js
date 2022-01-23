import React from 'react';
import { FaFigma, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiSwift } from 'react-icons/di';
import { SiKotlin, SiAdobeillustrator, SiAdobexd } from 'react-icons/si';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
export default function About() {
  return (
    <div id="about">
      <div className="container mx-auto max-w-6xl center py-20">
        <h2 className="text-4xl">About</h2>
        {/* <p className="about">
          I have a wide range of experience in web development, mobile
          development and UX design.
        </p> */}
        <div className="columns-3 flex flex-wrap justify-center py-20 px-10">
          <div className="lg:w-1/3 p-2">
            <div className="grid justify-center text-3xl">{<MdCode />}</div>
            <div className="text-center text-3xl pb-1">Web Dev</div>
            <p className="text-center pt-2 text-xl">
              I utilize libraries such as react to build responsive websites for
              any device. I utilize API's to provide information to users.
            </p>
            <p className="flex flex-wrap justify-center m-1">
              <FaHtml5 className="icon mx-1" />
              <FaCss3Alt className="icon mx-1" />
              <DiJavascript1 className="icon mx-1" />
              <FaReact className="icon mx-1" />
            </p>
          </div>
          <div className="lg:w-1/3 p-2">
            <div className="grid justify-center text-3xl">
              {<MdPhonelinkSetup />}
            </div>
            <div className="text-center text-3xl pb-1">App Dev</div>
            <p className="text-center pt-2 text-xl">
              I develop mobile applications using Swift, Kotlin or React Native.
            </p>
            <p className="flex flex-wrap justify-center m-1">
              <DiSwift className="icon mx-1" />
              <SiKotlin className="icon mx-1" />
              <FaReact className="icon mx-1" />
            </p>
          </div>
          <div className="lg:w-1/3 p-2">
            <div className="grid justify-items-center text-3xl">
              {<MdDesktopMac />}
            </div>
            <div className="text-center text-3xl pb-1">UX Design</div>
            <p className="text-center pt-2 text-xl">
              I follow Material and Human Interface design guidelines to provide
              users with intuitive and eye catching experience.
            </p>
            <p className="flex flex-wrap justify-center m-1">
              <SiAdobexd className="icon mx-1" />
              <SiAdobeillustrator className="icon mx-1" />
              <FaFigma className="icon mx-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
