import React, { useState } from 'react'; // Import useState from React
import { Link } from 'react-router-dom';
import logo from "../assets/chog.gif";
import { navLinks } from '../Data/Data';

const Nav = ({ nav }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={`w-full ${nav ? "fixed bg-black duration-300 top-0 left-0 z-30" : "absolute bg-transparent"} transition-all`}>
      <nav className='max-w-[1540px] m-auto py-6 px-6 max-lg:px-12 flex justify-between items-center gap-14 max-xl:gap-5 max-sm:py-4 max-sm:px-6'>
        {/* Logo */}
        <Link to="/" className='font-semibold text-5xl flex justify-center items-center text-white gap-1'>
          <img src={logo} alt="logo" width={60} height={60} />
          FIT-NADS
        </Link>

        {/* Links */}
        <ul className='flex flex-1 justify-end gap-10 max-xl:gap-7 max-lg:flex-col max-lg:bg-stone-700 max-lg:text-white max-lg:pt-10 max-lg:pb-3 max-lg:px-4 max-lg:gap-4 max-lg:absolute max-lg:top-24 max-lg:left-[5%] max-lg:w-[90%] max-lg:z-20 max-sm:top-20'>
          {navLinks.map((val) => (
            <li key={val.label} className={`text-white font-medium hover:text-red-500 text-xl max-lg:text-lg`}>
              {val.label === "Article" ? (
                <Link to="/article">{val.label}</Link>
              ) : (
                <a href={val.href}>{val.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
