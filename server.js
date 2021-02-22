const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config/config.env" });

// DB connection configuration
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB: ${process.env.DATABASE} successfully!`);
  });

// Routes

//  port declarations
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(
    `App is running on port: ${port} in ${process.env.NODE_ENV} mode `
  );
});
