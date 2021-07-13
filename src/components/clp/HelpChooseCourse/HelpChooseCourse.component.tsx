import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CountryCodeSelect from "../../shared/CountryCodeSelect.component";
import styles from "./helpchoosecourse.module.scss";
import Select, { components } from "react-select";
import { DownChevronIcon } from "../../shared/icons/downchevronicon";
import { CrossIcon } from "../../shared/icons/crossicon";

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
    border: "solid 1px #9ba5ba",
    padding: "0px 18px",
    boxShadow: "none",
    height: 46,
  }),
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      color: "#3a5075",
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

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props} className={styles.down_icon}>
      <DownChevronIcon color="#3a5075" />
    </components.DropdownIndicator>
  );
};

const HelpChooseCourse = (props: any) => {
  return (
    <Modal
      centered
      contentClassName={styles.modal_content}
      dialogClassName={styles.modal_dialog}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Body className={styles.modal_body}>
        <div className={styles.close_btn} onClick={props.handleClose}>
          <CrossIcon color="#000000" />
        </div>
        <div className={styles.heading}>Not sure of which course to take?</div>
        <Form className={styles.form}>
          <Form.Group
            controlId="chooseCourseBatchDate"
            className="position-relative"
          >
            <Form.Label className={styles.label}>
              Preferred batch start date
            </Form.Label>
            <Form.Control
              className={styles.input}
              type="date"
              placeholder="Select a Date"
            />
          </Form.Group>
          <Form.Group
            controlId="chooseCourseBatchPhoneNumber"
            className="position-relative"
          >
            <Form.Label className={styles.label}>Phone Number</Form.Label>
            <CountryCodeSelect className={styles.code_select} options=""/>
            <Form.Control
              className={`${styles.input} ${styles.phone_input}`}
              type="tel"
              placeholder="Enter Phone Number*"
            />
          </Form.Group>
          <Form.Group
            controlId="chooseCourseBatchDoubt"
            className="position-relative"
          >
            <Form.Label className={styles.label}>Doubts</Form.Label>
            <div>
              <Select
                instanceId="doubt-select"
                options={options}
                styles={customStyles}
                // defaultValue={{ label: "IN", value: "india" }}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator,
                }}
              />
            </div>
          </Form.Group>
          <Button className={styles.submit} variant="primary">
            SUBMIT
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HelpChooseCourse;
