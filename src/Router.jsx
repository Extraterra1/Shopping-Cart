import { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

export default function Router() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing cart={cart} error={error} />
    },
    {
      path: '/shop',
      element: <Shop loading={loading} cart={cart} products={products} setCart={setCart} error={error} />
    },
    {
      path: '/cart',
      element: <Cart cart={cart} setCart={setCart} />
    }
  ]);
  return <RouterProvider router={router} />;
}
