import React, { Component } from "react";
import { Map, TileLayer, Popup, Circle } from "react-leaflet";

export class Maps extends Component {
  state = {
    zoom: 2,
    country: "",
  };

  render() {
    const position2 = [40.37767, 49.89201];

    if (!this.props.countryName[0]) {
      return <div>Please Wait</div>;
    } else {
      return (
        <div>
          <Map
            style={{ height: "50vh", width: "100%" }}
            center={position2}
            zoom={this.state.zoom}
            minZoom="2"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />

            {}
            {this.props.countryName.map((el, i) => {
              let radiusSize = null;
              if (el.cases > 200000) {
                radiusSize = el.cases / 2;
              } else if (el.cases < 15000) {
                radiusSize = el.cases + 50000;
              } else {
                radiusSize = el.cases;
              }
              const position = [el.countryInfo.lat, el.countryInfo.long];
              return (
                <Circle
                  onclick={() => {
                    this.setState({ country: el.country });
                  }}
                  key={el.countryInfo._id + el.country}
                  color="red"
                  radius={radiusSize}
                  center={position}
                >
                  <Popup>
                    <h3>
                      {" "}
                      <img
                        src={this.props.countryName[i].countryInfo.flag}
                        height="20px"
                        width="30px"
                        alt=""
                      />{" "}
                      {this.props.countryName[i].country}
                    </h3>
                    <br />
                    Cases: {this.props.countryName[i].cases}
                    <br />
                    Recovered: {this.props.countryName[i].recovered}
                    <br />
                    Deceased: {this.props.countryName[i].deaths}
                  </Popup>
                </Circle>
              );
            })}
          </Map>
        </div>
      );
    }
  }
}

export default Maps;
