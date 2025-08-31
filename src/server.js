//dotenv ira pegar todas as veriaveis de ambiente de .env e popular o process.env
require('dotenv').config();
const app = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
