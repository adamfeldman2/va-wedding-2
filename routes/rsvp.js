module.exports = (app, mongoose) => {
  app.post('/api/rsvp', (req, res) => {
    console.log('req.body:', req.body);
    res.send({ message: 'RSVP received!' });
  });
};
