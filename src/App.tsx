import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Recipes from "./components/Recipes";
import Caloriestracker from "./components/Caloriestracker";
import MyList from "./components/MyList";
import RecipeDetails from "./components/RecipeDetails";
import CalorieCalc from "./components/CalorieCalc";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/calories-tracker" element={<Caloriestracker />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/calorie-calculator" element={<CalorieCalc />} />
      </Routes>
    </Router>
  );
}

export default App;
