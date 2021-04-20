import express from 'express';
import './database/connect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`✅ Server started at http://localhost:${PORT}`));