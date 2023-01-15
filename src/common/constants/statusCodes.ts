const statusCodes = {
  notFound: 404,
  internalServerError: 500,
} as const;

export type StatusCodes = (typeof statusCodes)[keyof typeof statusCodes];

export default statusCodes;
