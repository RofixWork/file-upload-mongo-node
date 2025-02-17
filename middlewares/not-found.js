import { StatusCodes } from "http-status-codes";

/**
 * Error Handler Middleware
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {import("express").Response}
 */
const notFoundMiddleware = (request, response, next) => {
    const route = `'${request.url}'` || '';
    return response.status(StatusCodes.NOT_FOUND).json({message: `Route <\ ${route} \> not found (404)`})
}

export default notFoundMiddleware;