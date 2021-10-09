import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import styles from './CurrentPeriod.module.scss'
import ru from "date-fns/locale/ru";
import { format } from 'date-fns'
registerLocale("ru", ru);

const CurrentDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
 
    const currentDate = format(new Date(startDate), 'MM/yyyy')
    console.log(currentDate)

    return (
        <div className={styles.DatePickerConteiner}>
            <p className={styles.DatePickerTitle}>Текущий период:</p>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                locale='ru'
                className={styles.DatePicker}
            />
      </div>
    );
  };

export default CurrentDatePicker;