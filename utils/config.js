const {
  JWT_SECRET = "some-very-strong-key",
  MONGODB_URI,
  MONGO_URL,
  CLIENT_URL,
  ALLOWED_ORIGIN,
} = process.env;

module.exports = {
  JWT_SECRET,
  MONGODB_URI: MONGODB_URI || MONGO_URL || "mongodb://127.0.0.1:27017/wtwr",
  CLIENT_URL,
  ALLOWED_ORIGIN,
};
