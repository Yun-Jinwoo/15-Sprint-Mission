import "./App.css";
import "./base.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Market from "./pages/Market";
import Community from "./pages/Community";
import AddItem from "./pages/AddItem";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/items" element={<Market />} />
      <Route path="/boards" element={<Community />} />
      <Route path="/additem" element={<AddItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
