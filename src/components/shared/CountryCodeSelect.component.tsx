import React from "react";
import styles from "./countrycodeselect.module.scss";

const CountryCodeSelect = (props: any) => {
  return (
    <div className={`${styles.country_select} ${props.className}`}>
      <div>
        <select name="countryPrefix" id="country-prefix">
          <option value="">IN - India</option>
          <option value="">US - India</option>
          <option value="">UK - India</option>
          <option value="">IN - India</option>
          <option value="">IN - India</option>
        </select>
      </div>
      <span>+91</span>
    </div>
  );
};

export default CountryCodeSelect;
