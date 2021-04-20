import { Middleware } from 'redux';

export const createReduxLoggerMiddleware: () => Middleware = () => {
  if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger');
    return createLogger({
      duration: true,
      timestamp: false,
      diff: true,
      collapsed: true
    });
  }
  return () => next => action => next(action);
}

