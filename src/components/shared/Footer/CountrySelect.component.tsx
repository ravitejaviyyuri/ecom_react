import React from "react";
import Select, { components } from "react-select";
import styles from "./countryselect.module.scss";
import { DownFilledArrow } from "../icons/downfilledarrow";
import {Country} from '../../../interfaces/country';

const options = [
  { value: "india", label: "India" },
  { value: "us", label: "US" },
  { value: "uk", label: "UK" },
];

type Props = {
  countries: Country[];
}

const customStyles = {
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    fontSize: "14px",
    "@media only screen and (max-width: 767px)": {
      ...provided["@media only screen and (max-width: 767px)"],
      fontSize: "12px",
    },
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    width: 150,
    backgroundColor: "transparent",
  }),
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      color: "#ffffff",
      fontSize: "14px",
      "@media only screen and (max-width: 767px)": {
        ...provided["@media only screen and (max-width: 767px)"],
        fontSize: "12px",
      },
      opacity,
      transition,
    };
  },
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownFilledArrow color="#005fff" />
    </components.DropdownIndicator>
  );
};
const CountrySelect = ({countries}: Props) => {
  return (
    <div className={styles.country_select_section}>
      <span className={styles.label}>Country</span>
      <Select
        instanceId="country-select"
        options={options}
        styles={customStyles}
        defaultValue={{ label: "India", value: "india" }}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
      />
    </div>
  );
};

export default CountrySelect;
