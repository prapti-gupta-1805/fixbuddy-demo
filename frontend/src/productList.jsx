import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading products…</p>;
    }

return (
    <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Smartphones</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p) => (
                <Link
                    key={p.id}
                    to={`/products/${p.slug}`}
                    className="group bg-white border rounded-xl p-4 hover:shadow-lg transition"
                >
                    <div className="h-48 flex items-center justify-center">
                        <img
                            src={p.image_url}
                            alt={p.name}
                            className="h-40 object-contain group-hover:scale-105 transition"
                        />
                    </div>

                    <h3 className="mt-4 font-semibold text-lg">{p.name}</h3>

                    <p className="text-gray-500 line-through text-sm">
                        ₹{Math.round(p.price * 1.1)}
                    </p>

                    <p className="text-xl font-bold text-black">
                        ₹{p.price}
                    </p>

                    <p className="text-sm text-green-600 mt-1">
                        EMI starting from ₹{Math.floor(p.price / 12)}
                    </p>
                </Link>
            ))}
        </div>
    </div>
);

}