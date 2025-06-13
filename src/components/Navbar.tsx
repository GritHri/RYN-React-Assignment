import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black">
      <div className='max-w-7xl mx-[100px] sm:px-6'>
        <div className='flex items-center justify-between py-6 md:py-9'>
          <div className='flex-shrink-0'>
            <Link to="/">
              <img src={Logo} alt="Logo" className='h-8 w-auto' />
            </Link>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              type='button'
              className='text-white hover:text-gray-300 focus:outline-none'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              ) : (
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              )}
            </button>
          </div>
          
          <div className='hidden md:flex md:items-center md:justify-center md:flex-1'>
            <ul className='flex space-x-4'>
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-full transition-colors duration-200 ${
                      isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-full transition-colors duration-200 ${
                      isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-full transition-colors duration-200 ${
                      isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className='hidden md:flex items-center justify-end flex-shrink-0'>
            <button className='text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-200'>
              HIRE ME
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-800'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <div className='pt-4'>
            <button className='w-full text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer'>
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
