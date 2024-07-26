const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/router");
const cors = require("cors");

const port = process.env.PORT || 8006;

// CORS configuration
const corsOptions = {
  origin: '*', // Replace '*' with specific domain(s) if you want to restrict access
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
