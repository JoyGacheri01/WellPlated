import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Recipes from "./components/Recipes";
import Caloriestracker from "./components/Caloriestracker"
import MyList from "./components/MyList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/calories-tracker" element={<Caloriestracker />} />
        <Route path="/my-list" element={<MyList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
