import { useState } from 'react';

const usePagination = (postsPerPage, filteredPosts) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage,
  );
  const paginationPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  return {
    totalPages, currentPage, setCurrentPage, paginationPosts,
  };
};

export default usePagination;
