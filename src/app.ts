import express from 'express';
import bodyParser from 'body-parser';
import fileRouter from './routes/fileRouter';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/files', fileRouter);

dotenv.config();

app.listen(port, () => {
    console.log(`Server is r on port ${port}`);
});
