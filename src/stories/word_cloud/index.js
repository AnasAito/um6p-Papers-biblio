import React from "react";

import bac2 from "./assets/ba2.png";
import bac2Hard from "./assets/bac_2_hard.png";
import bac5 from "./assets/bac5.png";
import bac5Hard from "./assets/bac_5_hard.png";
import bac3 from "./assets/bac3.png";
import bac3Hard from "./assets/bac_3_hard.png";

export default function App() {
  return (
    <main className="flex flex-col px-2  pb-10 bg-gradient-to-r from-purple-200 via-white to-green-100  ">
      <div className="pt-10 self-center">
        {" "}
        <p className="font-mono font-semibold  text-center  text-4xl">
          In-demand skills by study level{" "}
        </p>
        <p className="font-mono text-gray-500  text-right  text-xs">
          Moroccan job postings (07/2021-09/2021)
        </p>
      </div>
      <div className=" self-center pt-10">
        <p className="font-mono font-semibold  text-center pb-2   text-3xl">
          Bac+5
        </p>
        <div className="flex flex-row space-x-2 ">
          <div>
            <img alt="" className=" rounded-md  bg-black " src={bac5Hard}></img>
            <p className="font-mono ">Hard skills</p>
          </div>
          <div>
            <img alt="" className=" rounded-md  bg-black " src={bac5}></img>{" "}
            <p className="font-mono  ">Soft skills</p>
          </div>
        </div>
      </div>
      {/** */}
      <div className=" self-center pt-5">
        <p className="font-mono font-semibold  text-center pb-2   text-3xl">
          Bac+3/+4
        </p>
        <div className="flex flex-row space-x-2 ">
          <div>
            <img alt="" className=" rounded-md  bg-black " src={bac3Hard}></img>
            <p className="font-mono ">Hard skills</p>
          </div>
          <div>
            <img alt="" className=" rounded-md  bg-black " src={bac3}></img>{" "}
            <p className="font-mono  ">Soft skills</p>
          </div>
        </div>
      </div>
      {/** */}
      <div className=" self-center pt-5">
        <p className="font-mono font-semibold  text-center pb-2   text-3xl">
          Bac+2
        </p>
        <div className="flex flex-row space-x-2 ">
          <div>
            <img alt="" className=" rounded-md  bg-black " src={bac2Hard}></img>
            <p className="font-mono ">Hard skills</p>
          </div>
          <div>
            <img alt="" className=" rounded-md  bg-black " src={bac2}></img>{" "}
            <p className="font-mono  ">Soft skills</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row  px-5  pt-5  font-mono justify-between">
        {" "}
        <p>@Anas_AITAOMAR</p> <p>Powered by SkillNER</p>
      </div>
    </main>
  );
}
