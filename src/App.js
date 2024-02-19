import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Interview from "./pages/Interview";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interview" element={<Interview />} ></Route>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
    </Router>
  );
}


