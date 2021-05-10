import { AppCommand } from '../types';

const setParams = (title: string) => (
	value: string | number,
	pathname: string = window.location.pathname
): AppCommand => async (_, __, { history }) => {
	const params = new URLSearchParams(history.location.search);
	params.set(title, String(value));
	console.log(pathname);
	history.push({
		pathname,
		search: params.toString(),
	});
};

export const setLimitQuery = setParams('limit');
export const setSortingOrderQuery = setParams('order');
export const setSearchQuery = setParams('q');
