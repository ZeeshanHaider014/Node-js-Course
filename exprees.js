const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Wellcome to FLAT 804");
});
app.get("/Roomates", (req, res) => {
  const roomates = [
    { name: "Sarkar", age: 21 },
    { name: "Karamat", age: 23 },
    { name: "AMAN", age: 22 },
    {name: "BASHARAT" , age: 24},
    { name: "Sarkar", age: 21 },
    { name: "Karamat", age: 23 },
    { name: "AMAN", age: 22 },

  ];
  res.send(roomates);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
