import React from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import "./MyDatePicker.scss";

const MyDatePicker = ({ selectedDate, handleChange }) => (
  <div className="datepicker__container">
    <div className="datepicker__Icon" />
    <DatePicker
      className="datepicker"
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
