import React from 'react';
import { FaFigma, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiSwift } from 'react-icons/di';
import { SiKotlin, SiAdobeillustrator, SiAdobexd } from 'react-icons/si';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
export default function About() {
  return (
    <div id="about">
      <div className="container mx-auto max-w-6xl center py-20">
        <h2 className="text-4xl ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-500 to-sky-500">
          About
        </h2>
        <div className="columns-3 flex flex-wrap justify-center py-20 px-10">
          <div className="lg:w-1/3 p-2 max-w-sm">
            <div role="none" className="grid justify-center text-3xl">
              {<MdCode />}
            </div>
            <div className="text-center text-3xl pb-1">
              <p role="heading" aria-level="3">
                Web Dev
              </p>
            </div>
            <p className="text-center min-h-40 pt-2 text-xl">
              I utilize libraries such as react to build responsive websites for
              any device. I utilize API's to provide information to users.
            </p>
            <div className="flex flex-wrap  justify-center m-1 ">
              <FaHtml5 role="none" className="icon mx-1" />
              <FaCss3Alt role="none" className="icon mx-1" />
              <DiJavascript1 role="none" className="icon mx-1" />
              <FaReact role="none" className="icon mx-1" />
            </div>
          </div>
          <div className="lg:w-1/3 p-2 max-w-sm">
            <div role="none" className="grid justify-center text-3xl">
              {<MdPhonelinkSetup />}
            </div>
            <div className="text-center text-3xl pb-1">
              <p role="heading" aria-level="3">
                App Dev
              </p>
            </div>
            <p className="text-center min-h-40 pt-2 text-xl">
              I develop mobile applications using Swift, Kotlin or React Native.
              I develop for Android or iOS devices.
            </p>
            <p className="flex flex-wrap justify-center m-1">
              <DiSwift role="none" className="icon mx-1" />
              <SiKotlin role="none" className="icon mx-1" />
              <FaReact role="none" className="icon mx-1" />
            </p>
          </div>
          <div className="lg:w-1/3 p-2 max-w-sm">
            <div role="none" className="grid justify-items-center text-3xl">
              {<MdDesktopMac />}
            </div>
            <div className="text-center text-3xl pb-1">
              <p role="heading" aria-level="3">
                UX Design
              </p>
            </div>
            <p className="text-center min-h-40 pt-2 text-xl">
              I follow Material and Human Interface design guidelines to provide
              users with intuitive and eye catching experience.
            </p>
            <p className="flex flex-wrap justify-center m-1">
              <SiAdobexd role="none" className="icon mx-1" />
              <SiAdobeillustrator role="none" className="icon mx-1" />
              <FaFigma role="none" className="icon mx-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
