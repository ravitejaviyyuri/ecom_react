import React from "react";
import Select, { components } from "react-select";
import styles from "./countryselect.module.scss";

const options = [
  { value: "india", label: "India" },
  { value: "us", label: "US" },
  { value: "uk", label: "UK" },
];

const customStyles = {
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    width: 150,
    backgroundColor: "transparent",
  }),
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, color: "#ffffff", opacity, transition };
  },
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="6"
        viewBox="0 0 1024 1024"
      >
        <title></title>
        <g id="icomoon-ignore"></g>
        <path fill="#005fff" d="M0 232.727h980.247l-493.382 513.862z"></path>
      </svg>
    </components.DropdownIndicator>
  );
};
const CountrySelect = () => {
  return (
    <div className={styles.country_select_section}>
      <span className={styles.label}>Country</span>
      <Select
        options={options}
        styles={customStyles}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
      />
    </div>
  );
};

export default CountrySelect;
