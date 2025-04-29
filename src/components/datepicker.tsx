import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd.MM.yyyy"
      className="outline-none"
    />
  );
};
