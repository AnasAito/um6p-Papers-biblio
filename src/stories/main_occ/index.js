import React from "react";
import Metric from "./comps/metric.js";
import OccData from "./data.js";

const itemLabels = [
  "Software Engineer",
  "Manager",
  "Developer",
  "Commercial",
  "Technician",
];
const colorsRight = ["blue", "green", "red", "purple", "yellow"];
const SkillCard = ({ styleBg, nodeData, name }) => (
  <div className={` ${styleBg}   border-rounded  shadow p-4  bg-white`}>
    <p className="font-mono font-semibold  pb-2 ">{name}</p>

    <Metric active={"twins"} data={nodeData} />
  </div>
);

export default function App() {
  return (
    <main className="flex flex-col flex-1 mb-10 ">
      <div className="pt-10 self-center">
        {" "}
        <p className="font-mono font-semibold  text-center  text-4xl">
          Most in-demand occupations{" "}
        </p>
        <p className="font-mono text-gray-500  text-right  text-xs">
          Moroccan job postings (07/2021-09/2021)
        </p>
      </div>

      <div className="grid grid-cols-2 px-6 pt-10 gap-2 ">
        {[
          "ingénieur",
          "manager",
          "développeur",
          "commercial",
          "technicien",
        ].map((item, idx) => (
          <>
            <SkillCard
              styleBg={`bg-gradient-to-bl from-${colorsRight[idx]}-50 via-white to-gray-100`}
              name={`${itemLabels[idx]} - Hard skills`}
              nodeData={OccData[item]["hard"]}
            />
            <SkillCard
              styleBg={`bg-gradient-to-bl from-gray-50 via-white to-${colorsRight[idx]}-100`}
              name={`${itemLabels[idx]} - Soft skills`}
              nodeData={OccData[item]["soft"]}
            />
          </>
        ))}
      </div>
      <div className="flex flex-row   px-5  pt-5  font-mono justify-between">
        {" "}
        <p>@Anas_AITAOMAR</p> <p>Powered by SkillNER</p>
      </div>
    </main>
  );
}
