const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'vehicleMaintenanceDB';

let db;

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db(DB_NAME);
});

app.post('/api/vehicles', (req, res) => {
  const newVehicle = req.body;
  db.collection('vehicles').insertOne(newVehicle, (err, result) => {
    if (err) {
      console.error('Error inserting vehicle:', err);
      res.status(500).json({ error: 'An error occurred while inserting the vehicle.' });
      return;
    }
    res.json(result.ops[0]);
  });
});

app.get('/api/vehicles', (req, res) => {
  db.collection('vehicles').find({}).toArray((err, vehicles) => {
    if (err) {
      console.error('Error fetching vehicles:', err);
      res.status(500).json({ error: 'An error occurred while fetching vehicles.' });
      return;
    }
    res.json(vehicles);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
