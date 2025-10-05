const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

// Use the port Railway provides, or fallback to 3000 for local testing
const port = process.env.PORT || 3000;

app.use(cors());
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

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/contact', contactRoutes);
app.use('/users', userRoutes);
app.use('/packages', packagesRoutes);
app.use('/deals', dealsRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
