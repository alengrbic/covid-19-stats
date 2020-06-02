import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export class Chart extends Component {
  render() {
    console.log(this.props.dataset);
    const data = this.props.dataset.map((el, i) => {
      return {
        name: this.props.dataset[i].country,
        infected: this.props.dataset[i].infected,
        recovered: this.props.dataset[i].recovered,
      };
    });
    return (
      <div>
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" width={1} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="infected" fill="#8884d8" barSize={10} />
          <Bar dataKey="recovered" fill="#82ca9d" barSize={10} x />
        </BarChart>
      </div>
    );
  }
}

export default Chart;
