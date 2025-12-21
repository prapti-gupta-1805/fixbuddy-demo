TRUNCATE TABLE emi_plans RESTART IDENTITY CASCADE;
TRUNCATE TABLE variants RESTART IDENTITY CASCADE;
TRUNCATE TABLE products RESTART IDENTITY CASCADE;

INSERT INTO products (name, slug, image_url, mrp, price) VALUES
('iPhone 17 Pro', 'iphone-17-pro', 'https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg', 149999, 139999),
('Samsung Galaxy S24 Ultra', 'samsung-galaxy-s24-ultra', 'https://m.media-amazon.com/images/I/4179exet8fL._SY300_SX300_QL70_FMwebp_.jpg', 139999, 129999),
('Google Pixel 9', 'google-pixel-9', 'https://m.media-amazon.com/images/I/51RxA5MRlvL._SX342_.jpg', 99999, 89999),
('OnePlus 13', 'oneplus-13', 'https://m.media-amazon.com/images/I/41h2cTyybzL._SY300_SX300_QL70_FMwebp_.jpg', 74999, 69999),
('Nothing Phone (3)', 'nothing-phone-3', 'https://m.media-amazon.com/images/I/31zcxD4kMJL._SY300_SX300_QL70_FMwebp_.jpg', 49999, 45999);


INSERT INTO variants (product_id, variant_name) VALUES
-- iPhone 17 Pro
(1, '128 GB'),
(1, '256 GB'),

-- Samsung Galaxy S24 Ultra
(2, '256 GB'),
(2, '512 GB'),

-- Google Pixel 9
(3, '128 GB'),
(3, '256 GB'),

-- OnePlus 13
(4, '256 GB'),
(4, '512 GB'),

-- Nothing Phone (3)
(5, '128 GB'),
(5, '256 GB');

INSERT INTO emi_plans (product_id, tenure_months, monthly_amount, interest_rate, cashback) VALUES
-- iPhone 17 Pro
(1, 6, 23333, 0.00, 5000),
(1, 12, 12499, 10.50, 0),

-- Samsung Galaxy S24 Ultra
(2, 6, 21666, 0.00, 4000),
(2, 12, 11499, 10.50, 0),

-- Google Pixel 9
(3, 6, 14999, 0.00, 3000),
(3, 12, 7999, 10.50, 0),

-- OnePlus 13
(4, 6, 11666, 0.00, 2000),
(4, 12, 6499, 10.50, 0),

-- Nothing Phone (3)
(5, 6, 7666, 0.00, 1500),
(5, 12, 4299, 10.50, 0);