import { StatusCodes } from "http-status-codes";

/**
 * @class
 * @param {string} message
 * @param {StatusCodes} status
 * @returns {void}
 */
class CustomAPIError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
/**
 * Craete a new CustomAPIError instance
 * @param {string} message
 * @param {StatusCodes} status
 * @returns {CustomAPIError}
 */

const createCustomAPIError = (message, status) => {
  return new CustomAPIError(message, status);
};

export { CustomAPIError, createCustomAPIError };