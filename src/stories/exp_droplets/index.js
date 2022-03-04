import React from "react";
import Droplets from "./assets/droplets.png";

export default function App() {
  return (
    <main className="flex flex-col px-2  pb-5 bg-gradient-to-t from-white  to-indigo-100  ">
      <div className="pt-10 self-center">
        {" "}
        <p className="font-mono font-semibold  text-center  text-4xl">
          Main skill stacks by years of experience
        </p>
        <p className="font-mono text-gray-500  text-right  text-xs">
          Moroccan job postings (07/2021-09/2021)
        </p>
      </div>
      <img src={Droplets}></img>
      <div className="flex flex-row px-5  pt-5  font-mono justify-between">
        {" "}
        <p>@Anas_AITAOMAR</p> <p>Powered by SkillNER</p>
      </div>
    </main>
  );
}
