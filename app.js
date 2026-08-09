require("dotenv").config();

const express = require("express");

const cors = require("cors");

const { errors } = require("celebrate");

const { requestLogger, errorLogger } = require("./middlewares/logger");

const NotFoundError = require("./errors/NotFoundError");

const { ALLOWED_ORIGIN, CLIENT_URL } = require("./utils/config");

const connectDB = require("./utils/db");

const app = express();

const { PORT = 3001 } = process.env;
const HOST = "0.0.0.0";

const allowedOrigins = [
  CLIENT_URL,
  ALLOWED_ORIGIN,
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
].filter(Boolean);

app.use(requestLogger);

const mainRouter = require("./routes/index");

const errorHandler = require("./middlewares/error-handler");

app.use(express.json());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      const error = new Error("Not allowed by CORS");
      error.statusCode = 403;
      return callback(error);
    },
    credentials: true,
  })
);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.get("/", (req, res) => {
  res.json({ message: "WTWR API is running!" });
});

app.use("/", mainRouter);

app.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

module.exports = app;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, HOST, () => {
    console.log(`App listening on ${HOST}:${PORT}`);
    connectDB();
  });
}
