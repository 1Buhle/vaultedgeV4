// productsModel.js

const db = require('../db');

// Fetches all products from the database
exports.getProducts = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    } catch (error) {
        // 🔥 Logs the specific MySQL error to your server console (Railway logs)
        console.error('DATABASE QUERY ERROR in getProducts:', error); 
        // Re-throw a generic error to be caught by the controller
        throw new Error('Failed to retrieve products from the database.');
    }
}

// Fetches a single product by ID
exports.getProductById = async (product_id) => {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
        return rows[0];
    } catch (error) {
        console.error('DATABASE QUERY ERROR in getProductById:', error);
        throw new Error(`Failed to retrieve product ID ${product_id}.`);
    }
}

// Fetches products by brand
exports.getProductByBrand = async (product_brand) => {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE product_brand = ?', [product_brand]);
        return rows;
    } catch (error) {
        console.error('DATABASE QUERY ERROR in getProductByBrand:', error);
        throw new Error(`Failed to retrieve products for brand ${product_brand}.`);
    }
}