export const toQueryParamsString = (params?: Record<string, string>): string => 
  new URLSearchParams(params).toString();
