import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    }
  ]);
  return <RouterProvider router={router} />;
}
