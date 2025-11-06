import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-blue-600">Nutrient Track!</h1>
        <p className="text-gray-600">
          Track your recipies and colories with ease!
        </p>
      </div>
    </>
  );
}

export default App;
