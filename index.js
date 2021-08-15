const app = require("./app");
const mongoose = require("mongoose");
const envJson = require("dotenv").config();

//connecting mongoDB server
const databaseString = envJson.parsed.DATABASE_PRODUCTION || process.env.DATABASE_PRODUCTION;
const password = envJson.parsed.DATABASE_PRODUCTION_PASSWORD || process.env.DATABASE_PRODUCTION_PASSWORD;
const DB = databaseString.replace("<PASSWORD>", password);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
const PORT = 5300;

app.listen(PORT, () => {
  console.log("connected at server port " + PORT);
});
