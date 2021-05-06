import { AppCommand } from "../types";

export const setLimit = (limit: number): AppCommand => async (_, __, {history}) => {
    const { pathname } = history.location;
    const params = new URLSearchParams(history.location.search);
    params.set('limit', String(limit));
    
    history.push({
        pathname,
        search: params.toString()
    });    
}