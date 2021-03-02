const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const GlobalErrorHandler = require("./controllers/errorController");
const AppError = require("./utility/AppError");
const app = express();
const { readdirSync } = require("fs");
dotenv.config({ pathL: "./config/config.env" });

// Body Parser START
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// Body Parser END

// Development logging with morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(morgan("prod"));
}

// Routes Middleware (v1)

// auto import all files from routes folder
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require(`./routes/${route}`))
);

// route middleware
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 401));
});

// Global Error Handler for DB
app.use(GlobalErrorHandler);

module.exports = app;
