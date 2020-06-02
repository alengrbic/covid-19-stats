import React, { Component } from "react";
import "../styles/Chart.css";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export class Chart extends Component {
  render() {
    console.log(this.props.data);
    const data = [
      {
        stats: `Cases: ${this.props.data.cases}`,
        A: this.props.data.cases,
      },
      {
        stats: `Active: ${this.props.data.active}`,
        A: this.props.data.active,
      },
      {
        stats: `Critical: ${this.props.data.critical}`,
        A: this.props.data.critical,
      },
      {
        stats: `Deceased: ${this.props.data.deaths}`,
        A: this.props.data.deaths,
      },
      /* {
        stats: "Tests",
        A: this.props.data.tests,
      }, */
      {
        stats: `Recovered: ${this.props.data.recovered}`,
        A: this.props.data.recovered,
      },
    ];
    return (
      <div
        style={{
          color: "#000",
          backgroundColor: "#fff",
          paddingTop: "1em",
        }}
      >
        <ResponsiveContainer height={300}>
          <RadarChart
            className="fnt"
            fontSize={"0.6em"}
            outerRadius={120}
            width={530}
            height={1550}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="stats" />
            {/* <PolarRadiusAxis angle={30} domain={[0, 100]} /> */}
            <Radar
              name={this.props.data.country}
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Legend className="fnt2" />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
