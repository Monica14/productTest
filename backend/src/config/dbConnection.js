import mongoose from 'mongoose';
import { environmentConfiguration } from '../enviornment/environment.local';

const url = environmentConfiguration.DB_URL

const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

export { connection };
