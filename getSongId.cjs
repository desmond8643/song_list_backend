const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function main() {
  const db = process.env.ATLAS_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db("maimai");
    const songsCollection = database.collection("songs");

    const songTitle = "星めぐり、果ての君へ。"; // Replace with the actual song title

    const song = await songsCollection.findOne({ title: songTitle });
    if (song) {
      const songId = song._id;
      console.log(`The _id of the song "${songTitle}" is ${songId}`);
    } else {
      console.log(`Song with title "${songTitle}" not found.`);
    }

    // Additional operations with the retrieved song or other operations...
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();