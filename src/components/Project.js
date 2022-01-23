import React from 'react';

export default function Project({ img, title, desc, code, site }) {
  return (
    <div className="max-w-full rounded-md overflow-hidden shadow-lg bg-neutral-700 text-white hover:scale-105 transition duration-500 cursor-pointer">
      <div className="h-[50%] overflow-hidden">
        <img className="h-full w-full" src={img} alt="project img" />
      </div>
      <div className="h-[50%] relative">
        <div className="">
          <h3 className="text-center font-bold">{title}</h3>
          <p className="text-lg">{desc}</p>
        </div>
        <div className=" text-center absolute bottom-4 mt-1 w-[100%]">
          <a
            className=" pl-6 pr-6 pt-1 pb-1 m-1 bg-teal-500 shadow-black rounded-xl"
            href={code}
            target="_blank"
          >
            Code
          </a>
          <a
            className="pl-8 pr-8 pt-1 pb-1 m-1 bg-teal-500 shadow-black rounded-xl"
            href={site}
            target="_blank"
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
}
