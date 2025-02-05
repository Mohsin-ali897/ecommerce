import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center py-4 gap-4">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 rounded-md transition-all ${
          currentPage === 1 ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-black text-white hover:bg-gray-800"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>

      {/* Page Info */}
      <span className="text-lg font-medium text-black">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        className={`px-4 py-2 rounded-md transition-all ${
          currentPage === totalPages ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-black text-white hover:bg-gray-800"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
