import React, { PureComponent } from "react";

export default function Metric({ active, data }) {
  //console.log(data);
  return (
    <>
      {active === "twins" && (
        <div class="space-y-4 mt-4">
          {Object.keys(data).map((key) => (
            <div class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none">
              <div class="flex-1">
                <div
                  class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
                  style={{ width: `${parseInt(data[key])}%` }}
                ></div>{" "}
                <p>{key}</p>
              </div>{" "}
              <p class="pl-2">{data[key].toFixed(2)}</p>{" "}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
