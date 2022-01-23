import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <>
      <nav
        role="navigation"
        className="justify-center w-[100vw] flex bg-neutral-800 fixed top-0"
        aria-label="Global"
      >
        <div className="flex justify-center">
          <Link className="m-2 nav-item" smooth to="#">
            Home
          </Link>
          <Link className="m-2 nav-item" smooth to="/#about">
            About
          </Link>
          <Link className="m-2 nav-item" smooth to="/#projects">
            Projects
          </Link>
        </div>
      </nav>
    </>
  );
}
