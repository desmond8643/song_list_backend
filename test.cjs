const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './config.env' });

const cors = require('cors');
const app = express();
const port = 443; // Choose a port number for your server

app.use(cors())

// MongoDB connection and route
app.get('/api/festivalplus', async (req, res) => {
  const db = process.env.ATLAS_URI;
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
  const db = process.env.ATLAS_URI;
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

app.get('/api/charts', async (req, res) => {
  const db = process.env.ATLAS_URI;
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
  const db = process.env.ATLAS_URI;
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

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});