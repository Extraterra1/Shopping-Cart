import { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';

export default function Router() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    };
    console.log('fetching');
    fetchProducts();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing cart={cart} products={products} setCart={setCart} />
    }
  ]);
  return <RouterProvider router={router} />;
}
