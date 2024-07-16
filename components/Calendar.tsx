"use client";

import { Calendar as AntdCalendar } from "antd";
import styled from "@emotion/styled";
import dayjs from "dayjs";

const CalendarWrapper = styled.div`
  margin: 10px;
`;

const Calendar = () => {
  return (
    <CalendarWrapper>
      <AntdCalendar
        disabledDate={date => {
          return date < dayjs().subtract(1, "day");
        }}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
