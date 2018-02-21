const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// mongoose.connect(keys.mongoURI);
// console.log('Database Connection ⚡️⚡️ : ', mongoose.connection.readyState);

const app = express();
const PORT = process.env.PORT || 5000;

// bodyParser middleware
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
