const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
console.log('Database Connection ⚡️⚡️ : ', mongoose.connection.readyState);

const app = express();
const PORT = process.env.PORT || 5000;

// bodyParser middleware
app.use(bodyParser.json());

// guest schema
const guestSchema = mongoose.Schema({
  g1First: String,
  g1Last: String,
  attending: String,
  numAttending: String,
  g1Dinner: String,
  g1Dietary: String,
  g2First: String,
  g2Last: String,
  g2Dinner: String,
  g2Dietary: String,
  message: String
});

// rsvp model
const Guest = mongoose.model('Guest', guestSchema);

// post rsvp to db
app.post('/api/rsvp', async (req, res) => {
  try {
    const newGuest = await new Guest({ ...req.body }).save();
    res.send({ success: true });
  } catch (err) {
    console.log('Error: ', err);
    res.send({ success: false });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
