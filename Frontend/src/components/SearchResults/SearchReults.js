import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import ResultsItem from "../ResultsItem/ResultsItem";

const SearchReults = () => {
  const location = useLocation();
  const results = location.state.result;
  console.log(results);
  if (results.length === 0) {
    return (
      <span style={{ textAlign: "center" }}> Không tìm thấy sản phẩm nào</span>
    );
  } else
    return (
      <>
        <span>Kết quả: {results.length}</span>
        {results.map((result) => (
          <ResultsItem result={result} />
        ))}
      </>
    );
};

export default SearchReults;
