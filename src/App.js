import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Story from "./stories/main_occ/index";
import StorySectors from "./stories/main_sector/index";
import Home from "./Home";
import StoryOrg from "./stories/main_org/index";
import StoryCloud from "./stories/word_cloud/index";
import ExpDroplet from "./stories/exp_droplets/index";

const routes = [
  {
    title: "Sectors story ",
    path: "/sectors",
    component: <StorySectors />,

    category: { name: "Visualisation" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

    imageUrl:
      "https://i.ibb.co/c26qkKz/screencapture-localhost-3000-sectors-2021-12-08-18-58-56.jpg",
  },
  {
    title: "Occupation  story",
    path: "/occupations",
    component: <Story />,

    category: { name: "Visualisation" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

    imageUrl:
      "https://i.ibb.co/c26qkKz/screencapture-localhost-3000-sectors-2021-12-08-18-58-56.jpg",
  },
  {
    title: "Organizations story ",
    path: "/orgs",
    component: <StoryOrg />,

    category: { name: "Visualisation" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

    imageUrl:
      "https://i.ibb.co/25X7sPT/screencapture-localhost-3000-orgs-2021-12-08-19-00-02.jpg",
  },
  {
    title: "Cloud  story",
    path: "/cloud",
    component: <StoryCloud />,

    category: { name: "Visualisation" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

    imageUrl:
      "https://i.ibb.co/t4HkcTd/screencapture-localhost-3000-cloud-2021-12-08-19-00-22.jpg",
  },
  {
    title: "skill stack   story",
    path: "/expdroplets",
    component: <ExpDroplet />,

    category: { name: "Visualisation" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

    imageUrl:
      "https://i.ibb.co/Mhc2Nfc/screencapture-localhost-3000-expdroplets-2021-12-08-19-00-36.jpg",
  },
];
const Home_ = () => (
  <div className="flex justify-between items-center">
    <ul>
      {routes.map(({ name, path }) => (
        <li>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home routes={routes} />} />
        {routes.map(({ name, path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
}
