// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/scatterplot
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
const data = [
  {
    id: "group A",
    data: [
      {
        x: 69,
        y: 86,
      },
      {
        x: 83,
        y: 67,
      },
      {
        x: 88,
        y: 67,
      },
      {
        x: 88,
        y: 74,
      },
      {
        x: 72,
        y: 69,
      },
      {
        x: 58,
        y: 120,
      },
      {
        x: 75,
        y: 111,
      },
      {
        x: 15,
        y: 83,
      },
      {
        x: 5,
        y: 94,
      },
      {
        x: 81,
        y: 92,
      },
      {
        x: 41,
        y: 36,
      },
      {
        x: 58,
        y: 119,
      },
      {
        x: 59,
        y: 80,
      },
      {
        x: 85,
        y: 76,
      },
      {
        x: 10,
        y: 5,
      },
      {
        x: 5,
        y: 45,
      },
    ],
  },
];

const Home = () => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    xFormat=">-.2f"
    yScale={{ type: "linear", min: 0, max: "auto" }}
    yFormat=">-.2f"
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "weight",
      legendPosition: "middle",
      legendOffset: 46,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "size",
      legendPosition: "middle",
      legendOffset: -60,
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: "left-to-right",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Home;
