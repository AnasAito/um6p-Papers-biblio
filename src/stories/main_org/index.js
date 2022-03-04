import React from "react";
import Metric from "./comps/metric.js";
import SectorData from "./data.js";

const itemLabels = [
  "OFPPT",
  "ALTADOS",
  "UM6P",
  "Sofrecom Services",
  "ManPower",
];
const imgs = [
  "https://i.ibb.co/6NDn7wB/download.jpg",
  "https://i.ibb.co/DR6vzMz/download-2.png",
  "https://i.ibb.co/NVHD3Cm/download.png",
  "https://i.ibb.co/nQwnVvR/logo-2.png",
  "https://i.ibb.co/d4J68hQ/MPG-MP-Logo-195x151-3x.png",
];
const colorsRight = ["blue", "green", "red", "purple", "yellow"];
const SkillCard = ({ styleBg, nodeData, name, imgLink }) => (
  <div className={` ${styleBg}   border-rounded  shadow p-4  bg-white `}>
    <div class="flex flex-row items-center">
      <img className="h-16 w-16 rounded-full" src={imgLink}></img>
      <p className="font-mono font-semibold  pb-2 pl-2 ">{name}</p>
    </div>

    <Metric active={"twins"} data={nodeData} />
  </div>
);

export default function App() {
  return (
    <main className="flex flex-col flex-1 mb-10 ">
      <div className="pt-10 self-center">
        {" "}
        <p className="font-mono font-semibold  text-center  text-4xl">
          Top 5 recruiting companies
        </p>
        <p className="font-mono text-gray-500  text-right  text-xs">
          Moroccan job postings (07/2021-09/2021)
        </p>
      </div>

      <div className="grid grid-cols-2 px-6 pt-10 gap-2 ">
        {["108205", "319789", "323411", "3292", "1498"].map((item, idx) => (
          <>
            <SkillCard
              styleBg={`bg-gradient-to-bl from-${colorsRight[idx]}-50 via-white to-gray-100`}
              name={`${itemLabels[idx]} - Hard skills`}
              nodeData={SectorData[item]["hard"]}
              imgLink={imgs[idx]}
            />
            <SkillCard
              styleBg={`bg-gradient-to-bl from-gray-50 via-white to-${colorsRight[idx]}-100`}
              name={`${itemLabels[idx]} - Soft skills`}
              nodeData={SectorData[item]["soft"]}
              imgLink={imgs[idx]}
            />
          </>
        ))}
      </div>
      <div className="flex flex-row  px-5  pt-5  font-mono justify-between">
        {" "}
        <p>@Anas_AITAOMAR</p> <p>Powered by SkillNER</p>
      </div>
    </main>
  );
}
