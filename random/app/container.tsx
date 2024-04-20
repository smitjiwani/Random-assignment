import React, { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "./container.css";

export default function Container() {
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);

  //data is repitetive

  const data = [
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
    { date: '22.07.2021', reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv' },
    { date: '20.07.2021', reportName: 'RUR_L1_01_01_2021_31_03_2021.csv' },
    { date: '19.07.2021', reportName: 'RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv' },
  ];

  const paginatedData = data.slice(offset, offset + perPage);

  const totalPages = Math.ceil(data.length / perPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    const newOffset = (page - 1) * perPage;
    setOffset(newOffset);
  };

  // might not work in all case react-pagination should be used but wasnt allowed in the question

  return (
    <div className="container">
      <div className="right">
        <div className="filterbutton">
          <FilterAltIcon />
        </div>
        <div className="closebutton">
          X
        </div>
      </div>
      <h2>Recently Generated Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Report Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.reportName}</td>
              <td>Download</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">

        <a
          onClick={() => handlePageChange(1)}
        >
          {"I<"}
        </a>


        <a
          onClick={() => handlePageChange(offset / perPage)}

        >
          Prev
        </a>

        {Array.from({ length: totalPages }, (_, index) => (
          <a
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={offset === index * perPage ? "active" : ""}
          >
            {index + 1}
          </a>
        ))}

        <a
          onClick={() => handlePageChange(offset / perPage + 2)}

        >
          Next
        </a>

        <a
          onClick={() => handlePageChange(totalPages)}

        >
          {">I"}
        </a>

        <span>
          Rows per page:
          <select onChange={(e) => setPerPage(Number(e.target.value))}>
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </span>
      </div>
    </div>
  );
}
