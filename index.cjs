const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './config.env' });

const cors = require('cors');
const app = express();
const port = 443; // Choose a port number for your server

app.use(cors())
app.use(bodyParser.json())

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

// MongoDB connection and route
app.get('/api/festivalplus', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('Festival+');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/api/buddies', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('Buddies');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/api/buddiesplus', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('Buddies+');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/api/prism', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('Prism');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get("/api/buddiespluslevel14", async (req, res) => {
  const db = process.env.ATLAS_URI
  const client = new MongoClient(db)
  try {
    await client.connect()
    const database = client.db("maimai")
    const collection = database.collection("Buddies+")
    const documents = await collection.find({ level: { $gt: 13.9 } }).toArray()
    res.json(documents)
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
})

app.get("/api/prismlevel14", async (req, res) => {
  const db = process.env.ATLAS_URI
  const client = new MongoClient(db)
  try {
    await client.connect()
    const database = client.db("maimai")
    const collection = database.collection("Prism")
    const documents = await collection.find({ level: { $gt: 13.9 } }).toArray()
    res.json(documents)
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
})


app.get('/api/utage', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('utage');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/api/charts', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('charts');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/api/songs', async (req, res) => {
  const db = process.env.MONGODB_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const database = client.db('maimai');
    const collection = database.collection('songs');

    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

let data = []
app.post('/api/submit', (req, res) => {
  const formData = req.body;

  // Process the form data
  for (const key in formData) {
    const value = formData[key];
    // Perform any desired operations with the key-value pair
    console.log(`${key}: ${value}`);
  }

  data = []
  data.push(formData);
  res.json(formData);
});

app.get('/api/submit', (req, res) => {
  res.json(data);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});