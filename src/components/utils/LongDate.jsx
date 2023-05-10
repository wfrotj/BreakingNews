import React from "react";
import moment from "moment";

function LongDate({ timestamp }) {
  const formattedDate = moment(timestamp).format("dddd, MMMM Do YYYY");
  return <span>{formattedDate}</span>;
}

export default LongDate;
