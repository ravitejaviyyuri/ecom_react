import React,{useState,useContext, useEffect} from "react";
import Select, { components } from "react-select";
import styles from "./countrycodeselect.module.scss";
import { DownFilledArrow } from "./icons/downfilledarrow";
import {Country} from "../../interfaces/country"
import {AppContext} from '../../store';
import UPDATE_USER_STATE from '../../store/user/action';

const customStyles = {
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    fontSize: "14px",
    "@media only screen and (max-width: 767px)": {
      ...provided["@media only screen and (max-width: 767px)"],
      fontSize: "14px",
    },
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    width: 55,
    "&:hover": {
      border: "none",
    },
  }),
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      color: "#192f60",
      fontSize: "14px",
      padding: 0,
      "@media only screen and (max-width: 767px)": {
        ...provided["@media only screen and (max-width: 767px)"],
        fontSize: "14px",
      },
      opacity,
      transition,
    };
  },
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    padding: 0,
  }),
};

// const options = [
//   { value: "india", label: "IN" },
//   { value: "us", label: "US" },
//   { value: "uk", label: "UK" },
// ];

const DropdownIndicator = (props:any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownFilledArrow color="#192f60" />
    </components.DropdownIndicator>
  );
};

type Props={
  options:any;
  className:string;
}

const CountryCodeSelect = ({className,options}: Props) => {

  const{state,dispatch} = useContext(AppContext);
  const[code,setCode] = useState("+");
  
  const onChangeHandler = (option: any) =>{
    let arr = option.value.split("#");
    let val = {country:arr[0],currency:arr[1]}
    setCode(arr[2]);
    dispatch({ type: UPDATE_USER_STATE.type,
      action: UPDATE_USER_STATE.action.UPDATE_COUNTRY,
      data: val})
  }

  return (
    <div className={`${styles.country_select} ${className}`}>
      <div>
        <Select
          instanceId="country-code-select"
          options={options}
          styles={customStyles}
          defaultValue={{ label: "IN", value: "india" }}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator,
          }}
          onChange={onChangeHandler}
        />
      </div>
        <span>{code}</span>
    </div>
  );
};

export default CountryCodeSelect;
