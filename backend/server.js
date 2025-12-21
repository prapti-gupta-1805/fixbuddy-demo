const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, name, slug, image_url, price FROM products"
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.get("/api/products/:slug", async (req, res) => {
    const { slug } = req.params;

    try {
        const productResult = await db.query(
            "SELECT * FROM products WHERE slug = $1",
            [slug]
        );

        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        const product = productResult.rows[0];

        const variantsResult = await db.query(
            "SELECT id, variant_name FROM variants WHERE product_id = $1",
            [product.id]
        );

        const emiResult = await db.query(
            "SELECT id, tenure_months, monthly_amount, interest_rate, cashback FROM emi_plans WHERE product_id = $1",
            [product.id]
        );

        res.json({
            product,
            variants: variantsResult.rows,
            emiPlans: emiResult.rows,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch product details" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});