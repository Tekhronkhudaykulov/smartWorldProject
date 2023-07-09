import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./paginationStyle.css";
import { PaginationItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PaginationBox = ({ postsPerPage, totalPosts, paginate }: any) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = useState(0);

  const dispatch = useDispatch<Dispatch>();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch.productSlice.getProduct(searchParams);
  }, []);

  return (
    <nav>
      <ul className="pagination">
        <div className="per">Per</div>

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
        <div className="next">Next</div>
      </ul>
    </nav>
  );
};

export default PaginationBox;
