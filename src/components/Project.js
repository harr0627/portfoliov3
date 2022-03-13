import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Project({ img, title, desc, code, site }) {
  return (
    <div className="grid lg:gap-10 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 auto-rows-fr">
      <div className="grid place-content-center md:max-h-96">
        <img className="md:max-h-96" src={img} alt={title} />
      </div>
      <div>
        <h3 className="text-center pb-3 font-bold">{title}</h3>
        <p className="text-lg  text-center ">{desc}</p>
        <div className="mt-10 grid gap-1 grid-cols-1 place-content-center">
          <a
            role="button"
            className="githubLinka"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="githubLink text-rose-600 shadow-black" />
          </a>
        </div>
      </div>
    </div>
  );
}
