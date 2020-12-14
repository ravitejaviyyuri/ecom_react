import React,{useContext} from "react";
import Select, { components} from "react-select";

import styles from "./countryselect.module.scss";
import { DownFilledArrow } from "../icons/downfilledarrow";
import {Country} from '../../../interfaces/country';
import {AppContext} from '../../../store';
import UPDATE_USER_STATE from '../../../store/user/action';
// const options = [
//   { value: "india", label: "India" },
//   { value: "us", label: "US" },
//   { value: "uk", label: "UK" },
// ];


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

const {state, dispatch} = useContext(AppContext);

const options = countries.map((country: Country) => 
     Object.create({ "value":country.country_name+"#"+country.currency, "label": country.country_name})
)
const onChangeHandler = (option: any) =>{
  console.log(option);
  let arr = option.value.split("#");
  console.log(arr);
  let val = {country:arr[0],currency:arr[1]}
  dispatch({ type: UPDATE_USER_STATE.type,
    action: UPDATE_USER_STATE.action.UPDATE_COUNTRY,
    data: val})
}

console.log(options)

  return (
    <div className={styles.country_select_section}>
      <span className={styles.label}>Country</span>
      <Select
        instanceId="country-select"
        options={options}
        styles={customStyles}
        isSearchable={true}
        onChange = {onChangeHandler}
        defaultValue={{ label: "India", value: "India#INR" }}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}>
        </Select>
      
    </div>
  );
};

export default CountrySelect;
