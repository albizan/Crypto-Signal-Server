// Vendor imports
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

// Custom imports
import configData from './config';
import signalRouter from './routes/signals.routes';
import gemRouter from './routes/gems.routes';

const app = express();
const logger = morgan('dev');
const PORT = configData.port;
const URI = configData.dbURI;
mongoose.connect(URI);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger);
app.use('/api/signals', signalRouter);
app.use('/api/gems', gemRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
