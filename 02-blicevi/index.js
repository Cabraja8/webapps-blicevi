import express from "express";
import connect from "./db.js";

var app = express();

var port = 3000;

app.post("/saveItem", async (req, res) => {
  let db = await connect();
  let data = await db.collection("saveItem").insertOne({
    data: {
      item: {
        name: "Hlace",
        price: 70.53,
        brand: "New",
      },
    },
  });
  res.send("Data received:" + JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
