import React from "react";
import ReactPaginate from "react-paginate";

const pagination = ({
  pageCount,
  containerClassName,
  activeClassName,
  previousClassName,
  nextClassName,
  disabledClassName,
  breakLabel,
  marginPagesDisplayed,
  pageRangeDisplayed,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      previousLabel="< Prev"
      nextLabel="Next >"
      breakLabel={breakLabel}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      previousClassName={previousClassName}
      nextClassName={nextClassName}
      pageRangeDisplayed={pageRangeDisplayed}
      containerClassName={containerClassName}
      activeClassName={activeClassName}
      disabledClassName={disabledClassName}
      onPageChange={onPageChange}
    />
  );
};

export default pagination;
