import React, { Component } from "react";
import Chart from "./Chart";
import "../styles/CasesInput.css";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

export class CasesInput extends Component {
  state = {
    inputValue: "",
    suggestions: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.data.forEach((el) => {
        this.setState({ suggestions: [...this.state.suggestions, el.country] });
      });
    }, 1000);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.blur();
  };

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    let countryData = (
      <div>
        <div className="flexContent">
          <div className="brd">
            <h3>Worldwide</h3>
          </div>
          <div className="brd">
            <h4>Cases:</h4>
            <h3>{this.props.total.TotalConfirmed}</h3>
          </div>
          <div className="brd">
            <h4>Deceased:</h4>
            <h3>{this.props.total.TotalDeaths}</h3>
          </div>
          <div className="brd">
            <h4>Recovered:</h4>
            <h3>{this.props.total.TotalRecovered}</h3>
          </div>
        </div>
      </div>
    );
    this.props.data.forEach((el) => {
      if (this.state.inputValue.toLowerCase() === el.country.toLowerCase()) {
        countryData = (
          <div>
            <div className="flexContent">
              <div className="brd">
                <h4>Country:</h4>
                <h3>{el.country}</h3>
              </div>
              <div className="brd">
                <h4>Cases:</h4>
                <h3>{el.cases}</h3>
              </div>
              <div className="brd">
                <h4>Deceased:</h4>
                <h3>{el.deaths}</h3>
              </div>
              <div className="brd">
                <h4>Recovered:</h4>
                <h3>{el.recovered}</h3>
              </div>
            </div>
          </div>
        );
      }
    });

    let countryChart = null;
    this.props.data.forEach((el) => {
      if (this.state.inputValue.toLowerCase() === el.country.toLowerCase()) {
        countryChart = <Chart data={el} />;
      }
    });

    return (
      <div>
        <div className="main">
          <form onSubmit={this.handleSubmit} action="">
            {/* <input
              placeholder="Look up by country name..."
              type="text"
              name=""
              id=""
              onChange={this.handleInput}
            /> */}
            <TextInput
              Component="input"
              style={{ color: "#000" }}
              options={this.state.suggestions}
              onChange={(e) => {
                this.setState({ inputValue: e });
              }}
              trigger=""
              spacer=""
              placeholder="Look up by country name..."
            />
          </form>
        </div>
        {countryData}
        {countryChart}
      </div>
    );
  }
}

export default CasesInput;
