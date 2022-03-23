// Preparing async wrapper

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); // Waiting for Promise
    } catch (error) {
      next(error);             // passing to next middleware to deal with error
    }
  };
};

module.exports = asyncWrapper;
