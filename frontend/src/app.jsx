import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./productList";
import ProductDetail from "./productDetail";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    );
}