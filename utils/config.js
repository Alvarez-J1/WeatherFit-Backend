const {
  JWT_SECRET = "some-very-strong-key",
  MONGO_URL = "mongodb://127.0.0.1:27017/wtwr",
} = process.env;

module.exports = {
  JWT_SECRET,
  MONGO_URL,
};
