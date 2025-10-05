const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise'); // if you’re using MySQL

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
app.use(cors({
    origin: 'https://beautiful-peace-production.up.railway.app',
    credentials: true
}));

app.use(bodyParser.json());
app.use(express.json());

// Database connection (adjust with Railway credentials)
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};
let connection;

async function connectDB() {
    try {
        connection = await mysql.createPool(dbConfig);
        console.log('Connected to MySQL database');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}
connectDB();

// Pass DB connection to routes via app.locals
app.locals.db = connection;

// Routes
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products'); 
const userRoutes = require('./routes/user');
const packagesRoutes = require('./routes/packages');
const dealsRoutes = require('./routes/deals');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/contact', contactRoutes);
app.use('/users', userRoutes);
app.use('/packages', packagesRoutes);
app.use('/deals', dealsRoutes);
app.use('/auth', authRoutes);

// Root health check
app.get('/', (req, res) => res.send('Backend is running on Railway!'));

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
