const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan');

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(require("./controllers/auth/protectRoute").protect)
// app.use("/login",require("./routes/authRoute"));  //login is not applicable
app.use("/info",require("./routes/infoRoute"));

module.exports = app;