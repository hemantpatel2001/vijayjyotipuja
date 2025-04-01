import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../../src/App.css";
import TopContactDetails from "./TopContactDetails";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Guruji", href: "/about" },
    { name: "Kalsarp Puja", href: "/services" },
    {
      name: "Other Puja",
      dropdown: [
        { name: "Navgrah Puja", href: "/puja/navgrah" },
        { name: "Rudra Abhishek", href: "/puja/rudra-abhishek" },
        { name: "Mangal Dosh Puja", href: "/puja/mangal-dosh" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <TopContactDetails />
      <nav className="shadow-lg flex  justify-between items-center">
        <div className="ml-16 p-2">
               {/* Logo  */}
               <Link to="/" className="text-2xl font-bold">
              <img
                className="h-14"
                src="http://kalsarppoojainujjain.com/assets/images/Logo/logo-ankit-guruji.png"
                alt="Logo"
              />
            </Link>
        </div>
        <div className="max-w-6xl  px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 justify-end gap-2 items-center">
       

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:space-x-8 text-lg">
              {navigation.map((item, index) =>
                item.dropdown ? (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span className="cursor-pointer px-3 py-2 text-md font-bold text-gray-900 hover:text-orange-600">
                      {item.name}
                    </span>
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-8 w-48 bg-white z-10  shadow-lg rounded-md border border-gray-200">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="px-3 py-2 text-md font-bold text-gray-900 hover:text-orange-600"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Contact Button */}
            <div className="hidden sm:flex items-center">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-xl font-medium hover:bg-orange-700">
                +917067771773
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
