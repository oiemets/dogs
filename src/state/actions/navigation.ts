import { AppCommand } from '../types';

const setParams = (title: string, pathname = window.location.pathname) => (
	value: string | number
): AppCommand => async (_, __, { history }) => {
	const params = new URLSearchParams(history.location.search);
	params.set(title, String(value));

	history.push({
		pathname,
		search: params.toString(),
	});
};

export const setLimitQuery = setParams('limit');
export const setSortingOrderQuery = setParams('order');
export const setSearchQuery = setParams('q', '/search');
