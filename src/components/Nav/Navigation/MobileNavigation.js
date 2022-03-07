import { useState } from 'react';
import NavLinks from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <AiOutlineClose
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="MobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}
