import _ from "lodash";

export const Paginate = (movies, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return _(movies).slice(startIndex).take(pageSize).value();
};