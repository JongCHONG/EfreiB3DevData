import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Homepage/HomePage";
import List from "./pages/ListPage/ListPage";
import Student from "./pages/StudentPage/StudentPage"
import Creation from "./pages/CreationPage/CreationPage"
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route path="/list/students" element={<List list="students"/>} />
      <Route path="/student/:id" element={<Student />} />
      <Route path="/createStudent/" element={<Creation create="student"/>} />
      <Route path="/createProfessor/" element={<Creation create="professor"/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
