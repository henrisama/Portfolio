import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
