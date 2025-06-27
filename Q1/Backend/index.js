
import bodyParser from "body-parser";
import express from "express";
import axios from "axios";
import pg from "pg";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
// -------------------------------------------------

// -------------------------------------------------
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`Server is running on http://localhost:${port}`);
  });

