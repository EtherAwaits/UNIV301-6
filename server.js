const express = require("express");

const PORT = 80;

const app = express();
app.use(express.static("src"));
app.use(express.json());

app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is Successfully Running on localhost:${PORT}`);
  else console.log("Error occurred, server can't start", error);
});
