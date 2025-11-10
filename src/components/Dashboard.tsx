import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg0gradient-to-br from-green-700 via-green-600 to-green-500 text-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-green-600">Nutrient Track</h1>

          {/* Desktop Menu */}
          <ul className="hidden mdflex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-green-600">
                Recipies
              </Link>
            </li>
            <li>
              <Link to="/my-list" className="hover:text-green-600">
                My List
              </Link>
            </li>
            <li>
              <Link to="/calories-tracker" className="hover:text-green-600">
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
              <a href="#" className="block hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-green-600">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-green-600">
                My List
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-green-600">
                About
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-4 pt-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl text-lg font-semibold text-black">
            Eat Smart, Live Healthy
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover delicious recipes and track your daily calorie intake
            effortlessly with NutriTrack.
          </p>
          <div className="mt-8">
            <button className="bg-white text-green-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="mt-12">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Healthy Food"
              className="mx-auto w-40 opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
