import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/Portfolio/" element={<Home />} />
      <Route path="/Portfolio/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
