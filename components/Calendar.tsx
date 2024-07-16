"use client";

import { Calendar as AntdCalendar } from "antd";
import styled from "@emotion/styled";

const CalendarWrapper = styled.div`
  margin: 10px;
`;

const Calendar = () => {
  return (
    <CalendarWrapper>
      <AntdCalendar />
    </CalendarWrapper>
  );
};

export default Calendar;
