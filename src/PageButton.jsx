import React from "react";

function PageButton({ currentPage, setCurrentPage }) {
  const handleClick = () => {
    // Update the currentPage value by calling the setCurrentPage function
    setCurrentPage(currentPage + 1);
  };

  return (
    <button onClick={handleClick}>Next Page</button>
  );
}

export default PageButton;