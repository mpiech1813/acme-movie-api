const app = require('./app');
const { syncAndSeed } = require('./db');

const init = async () => {
  try {
    syncAndSeed();
    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
