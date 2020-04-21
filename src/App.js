import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { Cards, Charts, CountryPicker } from "./components/index";
import styles from "./app.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: {}
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
    // console.log(data:{fetchData});
  }
  render() {
    //const data = this.state;
    //console.log(data);
    return (
      <div className={styles.container}>
        {/* <h1>Welcome</h1> */}
        <Cards data={this.state.data} />
        {/* <Charts /> */}
        <CountryPicker />
      </div>
    );
  }
}

export default App;
