import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }:any) => {
  const handlePageChange = (page:any) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center py-4">
      <button
        className="bg-black text-white px-4 py-2 rounded-md mr-2"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="text-lg text-black">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="bg-black text-white px-4 py-2 rounded-md ml-2"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
