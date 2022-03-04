import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/home";

const routes = [
  {
    title: "Home ",
    path: "/home",
    component: (
      <div className=" flex justify-center items-center h-1/2 w-1/2">
        <Home />
      </div>
    ),

    category: { name: "Visualisation" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

    imageUrl:
      "https://i.ibb.co/c26qkKz/screencapture-localhost-3000-sectors-2021-12-08-18-58-56.jpg",
  },
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-96 w-96 bg-red-300">
              <Home />
              tets
            </div>
          }
        />
        {routes.map(({ name, path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
}
