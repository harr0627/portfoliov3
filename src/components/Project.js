import React from 'react';

export default function Project({ img, title, desc, code, site }) {
  return (
    <div>
      <div>
        <img className="" src={img} alt={title} />
      </div>
      <div>
        <h3 className="text-center font-bold">{title}</h3>
        <p className="text-lg">{desc}</p>
      </div>
      <div className="grid gap-1 grid-cols-2">
        <a
          role="button"
          className="text-center text-rose-600 shadow-black rounded-xl"
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>

        <a
          role="button"
          className="text-center text-rose-600 shadow-black rounded-xl"
          href={site}
          target="_blank"
          rel="noreferrer"
        >
          Site
        </a>
      </div>
    </div>
  );
}
