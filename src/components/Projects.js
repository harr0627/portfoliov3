import React from 'react';
import Project from './Project.js';
import projects from '../assets/data.js';

export default function Projects() {
  return (
    <>
      <div id="projects">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl">Projects</h2>
          <div className="sm:p-2 mx-auto">
            <div className="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 auto-rows-fr">
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