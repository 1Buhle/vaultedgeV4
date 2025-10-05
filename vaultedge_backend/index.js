// index.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // your database connection file

dotenv.config();
const app = express();

// Use Railway's PORT or fallback to 3000
const port = process.env.PORT || 3000;

// Enable CORS for your frontend only
app.use(cors({
  origin: 'https://beautiful-peace-production.up.railway.app',
  credentials: true // required if you send cookies or JWT headers
}));

// Always send CORS headers (even on errors)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://beautiful-peace-production.up.railway.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Test database connection
db.query('SELECT 1')
  .then(() => console.log('✅ Database connected successfully!'))
  .catch(err => console.error('❌ Database connection failed:', err.message));

// Import routes
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products'); 
const userRoutes = require('./routes/user');
const packagesRoutes = require('./routes/packages');
const dealsRoutes = require('./routes/deals');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

// Mount routes using **relative paths**
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/contact', contactRoutes);
app.use('/users', userRoutes);
app.use('/packages', packagesRoutes);
app.use('/deals', dealsRoutes);
app.use('/auth', authRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running successfully 🚀' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
