import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-green-600">Nutrient Track</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-green-600">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/my-list" className="hover:text-green-600">
                My List
              </Link>
            </li>
            <li>
              <Link to="/calories-calc" className="hover:text-green-600">
                Calorie Tracker
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white text-gray-700 px-4 pb-3 space-y-3 border-t">
            <li>
              <Link to="/" className="block hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="block hover:text-green-600">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/my-list" className="block hover:text-green-600">
                My List
              </Link>
            </li>
            <li>
              <Link
                to="/calories-tracker"
                className="block hover:text-green-600"
              >
                Calorie Tracker
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
