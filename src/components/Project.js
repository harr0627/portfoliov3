import React from 'react';

export default function Project({ img, title, desc, code, site }) {
  return (
    <div className="max-w-full rounded-md overflow-hidden shadow-lg bg-neutral-700 text-white hover:scale-105 transition duration-500 cursor-pointer">
      <div className="h-[50%] overflow-hidden">
        <img className="h-full w-full" src={img} alt={title} />
      </div>
      <div className="h-[50%] relative">
        <div>
          <h3 className="text-center font-bold">{title}</h3>
          <p className="text-lg">{desc}</p>
        </div>
        <div className=" text-center absolute bottom-4 mt-1 w-[100%]">
          <a
            tabIndex="0"
            role="button"
            className=" pl-6 pr-6 pt-1 pb-1 m-1 bg-teal-400 text-grey-800 text-neutral-700 shadow-black rounded-xl"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            tabIndex="0"
            role="button"
            className="pl-8 pr-8 pt-1 pb-1 m-1 bg-teal-400 text-grey-800 text-neutral-700 shadow-black rounded-xl"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
}
