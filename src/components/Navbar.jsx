import { useState } from "react";
import Button from "./ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = ["Home", "About", "Services", "Blogs"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="My_font z-50">
      <div className="flex items-center justify-between md:justify-around px-6 h-14">
        <h1 className="font-bold text-xl">Company Logo</h1>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="ml-5">
            <Button>Contact Us</Button>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1 p-1.5 rounded-md"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <AiOutlineClose className="w-6 h-6 text-gray-700" />
          ) : (
            <RxHamburgerMenu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-0.5 px-3 pb-3 border-t border-gray-100 z-50 bg-green-300  backdrop-blur-md absolute w-full left-0 top-14">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block My_font font-semibold text-sm hover:text-gray-900 hover:bg-gray-100 px-2.5 py-2 rounded-md transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="mt-1.5">
            <Button className="w-full">Contact Us</Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
