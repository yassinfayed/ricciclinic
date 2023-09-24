import React, { useState } from "react";
import DataTable from "./Datatable";
import axios from "axios";
import { useEffect } from "react";

const StaffViewRes = () => {

    const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch data from your backend API
    axios.get("http://localhost:8800/fetchReservations").then((response) => {
      setRequests(response.data); // Assuming the response contains the request data
    });
  }, []);

  const columns = [
    {
      Header: "Reservation ID",
      accessor: "reservationId",
    },
    {
      Header: "Patient Name",
      accessor: "patientName",
    },
    {
      Header: "Patient Phone Number",
      accessor: "patientPhoneNumber",
    },
    {
      Header: "Branch",
      accessor: "scheduleBranchName",
    },
    {
        Header: "Schedule Date",
        accessor: "scheduleDate",
        Cell: ({ value }) => {
          // Parse the UTC date string to a Date object
          const date = new Date(value);
    
          // Format the date as a string with only day, month, and year
          const formattedDate = date.toLocaleDateString();
    
          return formattedDate;
        },
      },
    {
      Header: "Shift Start Time",
      accessor: "scheduleStartTime",
    },
    {
      Header: "Shift End Time",
      accessor: "scheduleEndTime",
    },
    {
      Header: "Doctor Name",
      accessor: "doctorName",
    },
  ];

  return (
    <div className="wrap">
      <DataTable columns={columns} data={requests}></DataTable>
    </div>
  );
};

export default StaffViewRes;
