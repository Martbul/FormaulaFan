"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const CalendarComponent = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md text-neutral-200 "
      />
    </div>
  );
};
export default CalendarComponent;
