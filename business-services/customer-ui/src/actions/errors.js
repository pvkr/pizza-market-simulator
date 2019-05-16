import * as types from '../constants/ActionTypes'
import * as errors from '../constants/ErrorTypes'

class ServerError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerError);
    }
    this.response = response;
  }
}

class ClientError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ClientError);
    }
    this.response = response;
  }
}

export const handleErrors = response => {
    if (!response.ok) {
        if (Math.floor(response.status / 100) === 4) {
          throw new ClientError(response);
        }
        throw new ServerError(response);
    }
    return response;
}

export const resolveErrorAction = (error, clientErrorAction) => {
  if (error instanceof ServerError) {
    return {type: types.ERROR, error: errors.SERVER_ERROR};
  }
  if (error instanceof ClientError) {
    if (clientErrorAction && typeof clientErrorAction === "function")
      return clientErrorAction(error.response);
    throw new Error('No handler for client errors');
  }
  return {type: types.ERROR, error: errors.SERVER_UNAVAILABLE};
}
