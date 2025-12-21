import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${slug}`)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <p>Loading product…</p>;
    }

    if (!data || !data.product) {
        return <p>Product not found</p>;
    }

    const variants = Array.isArray(data.variants) ? data.variants : [];
    const emiPlans = Array.isArray(data.emiPlans) ? data.emiPlans : [];

    return (
        <div style={{ padding: 20 }}>
            <h1>{data.product.name}</h1>
            <p>Price: ₹{data.product.price}</p>

            <h3>Variants</h3>
            {variants.length === 0 ? (
                <p>No variants</p>
            ) : (
                <ul>
                    {variants.map((v) => (
                        <li key={v.id}>{v.variant_name}</li>
                    ))}
                </ul>
            )}

            <h3>EMI Plans</h3>
            {emiPlans.length === 0 ? (
                <p>No EMI plans</p>
            ) : (
                <ul>
                    {emiPlans.map((e) => (
                        <li key={e.id}>
                            {e.tenure_months} months — ₹{e.monthly_amount}/month
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}