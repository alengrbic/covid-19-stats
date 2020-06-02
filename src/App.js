import React, { Component } from "react";
import Maps from "./components/Maps";
import "./styles/App.css";

import CasesInput from "./components/CasesInput";

export class App extends Component {
  state = {
    data: [],
    total: [],
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = () => {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => console.log(err));

    fetch("https://api.covid19api.com/world/total")
      .then((res) => res.json())
      .then((data) => this.setState({ total: data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="divEdit" style={{ backgroundColor: "#000" }}>
        <h1 style={{ textAlign: "center", color: "white", margin: "0" }}>
          Coronavirus (Covid-19) Statistics
        </h1>
        <p>
          Coronaviruses are a large family of viruses which may cause illness in
          animals or humans. In humans, several coronaviruses are known to cause
          respiratory infections ranging from the common cold to more severe
          diseases such as Middle East Respiratory Syndrome (MERS) and Severe
          Acute Respiratory Syndrome (SARS). The most recently discovered
          coronavirus causes coronavirus disease COVID-19.
        </p>
        <h2>Live updates on Covid-19</h2>

        <Maps countryName={this.state.data} />
        <CasesInput data={this.state.data} total={this.state.total} />
        {/* <p>
          Data providers : <br /> https://corona.lmao.ninja/v2/countries <br />
          https://api.covid19api.com/world/total
        </p> */}
      </div>
    );
  }
}

export default App;
