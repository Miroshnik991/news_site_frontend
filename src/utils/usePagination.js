import { useState } from 'react';

const usePagination = (postsPerPage, filteredposts) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    filteredposts.length / postsPerPage,
  );
  const nposts = filteredposts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  return {
    totalPages, currentPage, setCurrentPage, nposts,
  };
};

export default usePagination;
