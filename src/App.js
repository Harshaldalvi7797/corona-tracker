import React, { Component } from "react";
import logo from "./logo.svg";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { render } from "@testing-library/react";
import { Cards, Charts, CountryPicker } from "./components/index";
import styles from "./app.module.css";
import { fetchData, fetchCountries } from "./api/index";
import image from "./images/image.png";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  handleCountryChange = async country => {
    //fetch data
    const response = await fetchData(country);
    console.log(response);

    this.setState({ data: response, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className="container" style={{ paddingLeft: "30px" }}>
          <div className="row">
            <div className="col-sm-12">
              <img
                className="image"
                style={{ marginLeft: "20px", marginBottom: "20px" }}
                src={image}
              />{" "}
              <br />
              <Cards
                // @ts-ignore
                data={data}
              />
            </div>{" "}
          </div>
          <br />
          <div className="container" style={{ paddingLeft: "100px" }}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </div>
          <div className="">
            {" "}
            <Charts data={data} country={country} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
