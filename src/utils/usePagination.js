import { useState } from 'react';

const usePagination = (postsPerPage, filteredposts) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    filteredposts.length / postsPerPage,
  );
  const paginationPosts = filteredposts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  return {
    totalPages, currentPage, setCurrentPage, paginationPosts,
  };
};

export default usePagination;
