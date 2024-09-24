interface IPagination {
  limit: number;
  page: number;
  totalRecords: number;
}

export const paginationHelper = (params: IPagination) => {
  const { limit, page, totalRecords } = params;
  const totalPages = Math.ceil(totalRecords / limit) || 1;
  const nextPage = page < totalPages ? page + 1 : '';
  const previousPage = page > 1 ? page - 1 : '';

  return {
    totalPages,
    nextPage,
    previousPage,
  };
};
