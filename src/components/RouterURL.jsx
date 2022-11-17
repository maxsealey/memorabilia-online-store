import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';

const RouterURL = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<AuthPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default RouterURL;