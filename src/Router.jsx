import { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';

export default function Router() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreassspi.com/products');
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    console.log('fetching');
    fetchProducts();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing cart={cart} products={products} setCart={setCart} error={error} />
    }
  ]);
  return <RouterProvider router={router} />;
}
