import mongo from "mongodb";

var connection_string =
  "mongodb+srv://ivancabi1:ivancabi1@blicevi.pp03nhf.mongodb.net/?retryWrites=true&w=majority";

let client = new mongo.MongoClient(connection_string, {
  usenewUrlParser: true,
  useUnifiedTopology: true,
});

let db = null;
export default () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
    }
    client.connect((err) => {
      if (err) {
        reject("došlo je do greške " + err);
      } else {
        console.log("uspješno spajanje");
        db = client.db("blicevi");
        resolve(db);
      }
    });
  });
};
