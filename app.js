const express = require('express');
const app = express();
const {
  models: { Actor, Movie, Role },
} = require('./db');

app.get('/', (req, res, next) => {
  try {
    res.send(`
    <html>
      <body>
        hello world!
      </body>
    </html>
    `);
  } catch (ex) {
    next(ex);
  }
});

app.get('/api/movies', async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.send(movies);
  } catch (error) {
    next(error);
  }
});

app.get('/api/actors', async (req, res, next) => {
  try {
    const actors = await Actor.findAll();
    res.send(actors);
  } catch (error) {
    next(error);
  }
});

const init = async () => {
  try {
    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();

module.exports = app;
