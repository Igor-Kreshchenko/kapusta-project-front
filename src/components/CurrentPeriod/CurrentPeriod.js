import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import transactionsOps from "../../redux/transactions/transactionsOps";
import DatePicker, { registerLocale } from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import styles from "./CurrentPeriod.module.scss";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";
registerLocale("ru", ru);

const CurrentDatePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const month = format(new Date(startDate), "MM");
  const year = format(new Date(startDate), "yyyy");

  useEffect(() => {
    dispatch(transactionsOps.getAllTransactionByMonth({ month, year }));
  }, [month, dispatch, year]);

  return (
    <div className={styles.DatePickerConteiner}>
      <p className={styles.DatePickerTitle}>Текущий период:</p>
      <div className={styles.current_month}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="LLLL yyyy"
          showMonthYearPicker
          locale="ru"
          className={styles.DatePicker}
        />
      </div>
    </div>
  );
};

export default CurrentDatePicker;
