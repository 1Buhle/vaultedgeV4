// index.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express();

// Use Railway’s PORT or fallback to 3000
const port = process.env.PORT || 3000;

// Enable CORS for your frontend only
app.use(cors({
    origin: 'https://beautiful-peace-production.up.railway.app',
    credentials: true // required if you send cookies or JWT headers
}));

app.use(bodyParser.json());
app.use(express.json());

// Import routes
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products'); 
const userRoutes = require('./routes/user');
const packagesRoutes = require('./routes/packages');
const dealsRoutes = require('./routes/deals');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

// Mount routes
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/contact', contactRoutes);
app.use('/users', userRoutes);
app.use('/packages', packagesRoutes);
app.use('/deals', dealsRoutes);
app.use('/auth', authRoutes);

// Root route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
