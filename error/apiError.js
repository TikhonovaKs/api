class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }

  static forbiden(message) {
    return new ApiError(400, message);
  }
}

module.exports = ApiError;
