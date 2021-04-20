const express = require('express');
require('./database/connect');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`✅ Server started at http://localhost:${PORT}`));