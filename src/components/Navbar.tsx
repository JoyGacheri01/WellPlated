import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-green-600">Nutrient Track</h1>

                {/* Desktop Menu */}
                <ul className="hidden mdflex space-x-6 text-gray-700 font-medium">
                    <li><a href="#" className="hover:text-green-600">Home</a></li>
                    <li><a href="#" className="hover:text-green-600">Recipies</a></li>
                    <li><a href="#" className="hover:text-green-600">My List</a></li>
                    <li><a href="#" className="hover:text-green-600">About</a></li>

                </ul>
                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 focus:outline-none">
                    ☰
                </button>
            </div>
                  {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-gray-700 px-4 pb-3 space-y-3 border-t">
          <li><a href="#" className="block hover:text-green-600">Home</a></li>
          <li><a href="#" className="block hover:text-green-600">Recipes</a></li>
          <li><a href="#" className="block hover:text-green-600">My List</a></li>
          <li><a href="#" className="block hover:text-green-600">About</a></li>
        </ul>
      )}

        </nav>
    );
};
 export default Navbar;


