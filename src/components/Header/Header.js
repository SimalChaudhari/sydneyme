import { Link } from 'react-router-dom';
import { useState } from 'react';
import SydneyLogo from "../../assets/images/sydney_logo.png";
import { CgClose, CgMenuLeft } from 'react-icons/cg';

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of navigation links
  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Company Formation', to: '/company-formation' },
    { name: 'CR Amendments', to: '/cr-amendments' },
    { name: 'Consulting Services', to: '/consulting-services' },
    { name: 'Products', to: '/products' },
    { name: 'CR For Sale', to: '/cr-for-sale' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg bg-white relative rounded-2xl font-firasans z-10">
      <nav className="container mx-auto flex lg:justify-around justify-between items-center max-w-webContainer lg:px-0 md:px-5 py-1">
        <img src={SydneyLogo} alt="logo" className="lg:ml-0 ml-3 w-[175px]" />

        <div className="md:hidden flex items-center cursor-pointer lg:mr-0 mr-3 text-black" onClick={toggleMenu}>
          {isMenuOpen ? <CgClose className="text-3xl" /> : <CgMenuLeft className="text-3xl" />}
        </div>

        <div className="hidden md:flex lg:space-x-8 md:space-x-1 pr-10">
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm text-custome-black  hover:text-gray-400 transition-all py-8">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-red-400 p-8 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-10`}>
        <div className="flex justify-end">
          <CgClose className="text-3xl text-black cursor-pointer" onClick={toggleMenu} />
        </div>

        <div className="flex flex-col items-start mt-10 space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-2xl text-black font-bold hover:text-gray-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
