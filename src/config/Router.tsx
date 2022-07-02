import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/Projects";
import Resume from "../views/Resume";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default Router;
