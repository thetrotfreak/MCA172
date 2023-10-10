const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const PORT = 3002;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/get", (request, response) => {
  db.query("SELECT * from hotel.rooms;", (error, result) => {
    if (error) {
      console.log(error);
    }
    response.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Epress\nServing http://127.0.0.1:${PORT}`);
});
