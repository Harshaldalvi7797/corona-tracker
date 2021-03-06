import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./country.css";
import { fetchCountries } from "../../api/index";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);
  console.log(setCountries);
  return (
    <div className="container" style={{ marginLeft: "0" }}>
      <div className="col-sm-6">
        <FormControl
          className={styles.FormControl}
          style={{ marginLeft: "25px" }}
        >
          <NativeSelect
            defaultValue="Global"
            onChange={e => handleCountryChange(e.target.value)}
          >
            <option value="">global</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
};
export default CountryPicker;
