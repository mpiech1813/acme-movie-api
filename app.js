const express = require('express');
const app = express();

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

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
