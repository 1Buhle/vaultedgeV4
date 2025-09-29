// productsModel.js

const db = require('../db'); // ✅ Correct path to db.js

// Fetches all products from the database
exports.getProducts = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    } catch (error) {
        console.error('Error in getProducts:', error);
        // Re-throw the error to be handled by the controller's catch block
        throw new Error('Database query failed to fetch all products.');
    }
};

// Fetches a single product by ID
exports.getProductById = async (product_id) => {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
        return rows[0];
    } catch (error) {
        console.error('Error in getProductById:', error);
        throw new Error(`Database query failed for product ID: ${product_id}`);
    }
};

// Fetches products by brand
exports.getProductByBrand = async (product_brand) => {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE product_brand = ?', [product_brand]);
        return rows;
    } catch (error) {
        console.error('Error in getProductByBrand:', error);
        throw new Error(`Database query failed for brand: ${product_brand}`);
    }
};