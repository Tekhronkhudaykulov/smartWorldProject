import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./paginationStyle.css";

const PaginationBox = ({ postsPerPage, totalPosts, paginate }: any) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = useState(0);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, i) => (
          <li key={number} className={`page-item ${active === i && `active`}`}>
            <a
              onClick={() => {
                paginate(number);
                setActive(i);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationBox;
