import { AppCommand } from "../types";

const setParams = (title: string) => (value: string | number): AppCommand => async (_, __, { history }) => {
  const { pathname } = history.location;
  const params = new URLSearchParams(history.location.search);
  params.set(title, String(value));

  history.push({
    pathname,
    search: params.toString()
  });
};

export const setLimit = setParams('limit');
export const setSortingOrder = setParams('order');
export const setSearch = setParams('q');
