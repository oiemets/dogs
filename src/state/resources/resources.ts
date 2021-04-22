export type Resource<T> = {
  data: T;
  status: 'NEW' | 'LOADING' | 'READY';
}

export const getData = <T>({ data }: Resource<T>) => data;

export const setData = <T>(resource: Resource<T>, data: T): Resource<T> => ({
  ...resource,
  data
});

export const create = <T>(data: T): Resource<T> => ({
  data,
  status: 'NEW'
});

export const loading = <T>(resource: Resource<T>): Resource<T> => ({
  ...resource,
  status: 'LOADING'
});

export const ready = <T>(resource: Resource<T>): Resource<T> => ({
  ...resource,
  status: 'READY'
});

export const isReady = (resource?: Resource<any>) => Boolean(resource && resource.status === 'READY');