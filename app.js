const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 3000;

const names = ["hamza", "atig", "dsfsqdsqd"];

app.get("/", (req, res) => {
  res.json(names);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
