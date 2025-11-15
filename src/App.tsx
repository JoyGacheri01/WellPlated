import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Recipes from "./components/Recipes";
import MyList from "./components/MyList";
import RecipeDetails from "./components/RecipeDetails";
import CalorieCalc from "./components/CalorieCalc";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/calorie-calculator" element={<CalorieCalc />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        
      </Routes>
    </Router>
  );
}

export default App;
