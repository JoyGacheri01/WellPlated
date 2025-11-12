const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-4 pt-20">
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

      <footer className="bg-green-600 text-white text-center py-4 mt-10">
        &copy; 2024 Nutrient Track. Built with ❤️ for a healthier you.
      </footer>
    </div>
  );
};

export default Dashboard;
