// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function NavLinks(props) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link className="nav-item" smooth to="#">
          Home
        </Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link className="nav-item" smooth to="/#about">
          About
        </Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link className="nav-item" smooth to="/#projects">
          Projects
        </Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link className="nav-item" smooth to="/#projects">
          Contact
        </Link>
      </li>
    </ul>
  );
}
