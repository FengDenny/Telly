const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
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

module.exports = app;
