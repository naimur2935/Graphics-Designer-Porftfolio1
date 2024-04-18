import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import './CommonComponents.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // State variables
  const [prevScrollPos, setPrevScrollPos] = useState(0); // To track previous scroll position
  const [showNav, setShowNav] = useState(true); // To toggle visibility of the navbar
  const [menu, setMenu] = useState(false); // To toggle visibility of the mobile menu
  const location = useLocation()?.hash;

  // Effect to handle navbar visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setShowNav(false);
      } 
      if(currentScrollPos === 0) {
        // Scrolling at the top
        setShowNav(true);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`max-w-6xl mx-auto w-screen transition-all z-50 duration-1000 bg-[#110430] fixed top-0 ${showNav ? "" : "shadow"}`}>
      {/* Navbar content */}
      <div className={`w-full mx-auto flex justify-between items-center py-5 px-3  text-white`}>
        {/* Website logo */}
        <h3 className={`${showNav ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"} duration-300 font-extrabold`}>Akash A.</h3>

        {/* Menu icon */}
        <div className="text-4xl lg:hidden">
          {menu ? <AiOutlineClose onClick={() => setMenu(false)} /> : <BiMenu onClick={() => setMenu(true)} />}
        </div>

        {/* Navigation Items */}
        <ul className={`w-full lg:w-auto text-center space-y-2 lg:space-y-0 lg:flex justify-center lg:justify-between items-center lg:space-x-10 font-medium uppercase duration-1000 lg:relative lg:left-0 lg:top-0 absolute ${menu ? "top-[72px] md:top-[80px] left-0 bg-[#110430] z-50 p-3" : "-left-[0px] -top-[1000px]"}`}>
          <li onClick={() => setMenu(false)}>
            <Link
             to="/"
             className={`bg-gradient-to-r from-[#B216E0] bg-clip-text px-4 to-[#425EFF] duration-500 ${location == '' ? "text-transparent":"hover:text-transparent"}`}
             >Home</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link 
            to="/#about"
            className={`bg-gradient-to-r from-[#B216E0] bg-clip-text px-4 to-[#425EFF] duration-500 ${location == '#about' ? "text-transparent":"hover:text-transparent"}`}
            >About Me</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link 
            to="/#portfolio"
            className={`bg-gradient-to-r from-[#B216E0] bg-clip-text px-4 to-[#425EFF] duration-500 ${location == '#portfolio' ? "text-transparent":"hover:text-transparent"}`}
            >Portfolio</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link 
            to="/#services"
            className={`bg-gradient-to-r from-[#B216E0] bg-clip-text px-4 to-[#425EFF] duration-500 ${location == '#services' ? "text-transparent":"hover:text-transparent"}`}
            >Services</Link>
          </li>
          <li onClick={() => setMenu(false)}>
          <button className="bg-gradient-to-r from-[#B216E0] to-[#425EFF] px-8 py-3 rounded-lg font-medium lg:hidden">Download My CV</button>
          </li>
        </ul>
        <button onClick={() => setMenu(false)} className="bg-gradient-to-r from-[#B216E0] to-[#425EFF] px-8 py-3 rounded-lg font-medium hidden lg:block">Download My CV</button>

      </div>
    </nav>
  );
};

export default Navbar;
