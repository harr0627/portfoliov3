import React from 'react';
import Project from './Project.js';
import projects from '../assets/data.js';

export default function Projects() {
  return (
    <>
      <div id="projects" className=" pt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-center ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-500 to-sky-500">
            Projects
          </h2>
          <div className="sm:p-2 mx-auto">
            <div className="px-10 py-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 auto-rows-fr">
              {projects.map((item) => (
                <Project
                  key={item.id}
                  title={item.name}
                  desc={item.desc}
                  img={item.img}
                  site={item.site}
                  code={item.code}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
