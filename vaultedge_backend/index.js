// index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const Products = require('./models/productsModel'); // your model

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

// Routes
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const packagesRoutes = require('./routes/packages');
const dealsRoutes = require('./routes/deals');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

// Attach routes
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/contact', contactRoutes);
app.use('/users', userRoutes);
app.use('/packages', packagesRoutes);
app.use('/deals', dealsRoutes);
app.use('/auth', authRoutes);

// Default route to check server is live
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
