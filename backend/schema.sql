
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    image_url TEXT,
    mrp INTEGER NOT NULL,
    price INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS variants (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    variant_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS emi_plans (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    tenure_months INTEGER NOT NULL,
    monthly_amount INTEGER NOT NULL,
    interest_rate DECIMAL(5,2) NOT NULL,
    cashback INTEGER DEFAULT 0
);
