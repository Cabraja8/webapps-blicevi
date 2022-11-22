import express from "express";
import connect from "./db.js";

var app = express();

var port = 3000;

app.post("/saveItem", async (req, res) => {
  let db = await connect();
  let data = await db.collection("zad1").insertOne({
    data: {
      item: {
        name: "Hlace",
        price: 70.53,
        brand: "New",
      },
    },
  });
  res.send("item hlace saved:" + JSON.stringify(data));
  res.send("OK");
});

app.get("/getBrand", async (req, res) => {
  let cursor = await db.collection("zad1").find({}).sort({});
  let results = await cursor.toArray();

  res.json(results);
});
app.get("/getBrand?brand=New", async (req, res) => {
  let db = await connect();

  let cursor = await db.collection("zad1").find({ brand: "New" }).sort({});
  let results = await cursor.toArray();

  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
