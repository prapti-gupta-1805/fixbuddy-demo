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

    const emiPlans = Array.isArray(data.emiPlans) ? data.emiPlans : [];

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6">
                    <h1 className="text-2xl font-semibold mt-2">{data.product.name}</h1>

                    <div className="mt-6 flex items-center justify-center h-96 overflow-hidden">
                        <img
                            src={data.product.image_url}
                            alt={data.product.name}
                            className="max-h-80 object-contain"
                        />
                    </div>

                </div>

                <div>
                    <div className="text-right">
                        <div className="text-3xl font-bold">₹{data.product.price}</div>
                        <div className="text-gray-500 line-through">₹{Math.round(data.product.price * 1.1)}</div>
                    </div>

                    <h3 className="mt-4 font-semibold">EMI plans backed by mutual funds</h3>

                    <div className="mt-4 space-y-4">
                        {emiPlans.length === 0 ? (
                            <p className="text-gray-500">No EMI plans</p>
                        ) : (
                            emiPlans.map((e) => (
                                <div key={e.id} className="flex items-center justify-between p-4">
                                    <div>
                                        <div className="font-semibold">₹{e.monthly_amount} x {e.tenure_months} months</div>
                                        {e.cashback ? (
                                            <div className="text-sm text-green-600">Additional cashback of ₹{e.cashback}</div>
                                        ) : (
                                            <div className="text-sm text-green-600">Additional cashback of ₹7,500</div>
                                        )}
                                    </div>

                                    <div className="text-sm text-gray-500">{e.interest_rate ?? "0%"} interest</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}