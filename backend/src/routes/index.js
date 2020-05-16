import { app, express } from '../server';
import products from './products';
import auth from './auth';

const router = express.Router();

// allow cross origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token,Authorization',
    );
    next();
});

// routes
app.use('/products', products);
app.use('/auth', auth);