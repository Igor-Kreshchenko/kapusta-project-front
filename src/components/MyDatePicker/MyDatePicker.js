import React from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import "./MyDatePicker.scss";

const MyDatePicker = ({ selectedDate, handleChange }) => (
  <div className="datepicker__container">
    <label className="datepicker__Icon" htmlFor="datepicker" />
    <DatePicker
      className="datepicker"
      id="datepicker"
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="dd.MM.yyyy"
      name="date"
      fixedHeight
      withPortal
    />
  </div>
);

export default MyDatePicker;
