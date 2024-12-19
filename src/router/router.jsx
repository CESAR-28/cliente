import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { productsLoader } from '../services/loaders/productsLoader';
import FormNewProduct from '../components/FormNewProduct';
import newProductAction from '../services/actions/newProductAction';
import ProductDetails from '../components/ProductDetails';
import { productDetailsLoader } from '../services/loaders/productDetailsLoader';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'
import { customersLoader } from '../services/loaders/customersLoader';
import FormNewCustomers from '../components/FormNewCustomers';
import newCustomerAction from '../services/actions/newCustomerAction';
import CustomerDetails from '../components/CustomerDetails';
import { customerDetailsLoader } from '../services/loaders/customerDetailsLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: productsLoader,
        children: [
          { path: '/products/create-product', element: <FormNewProduct />, action: newProductAction },
          { path: '/products/:id', element: <ProductDetails />, loader: productDetailsLoader}
        ],
      },
      {
        path: '/customers',
        element: <Customers />,
        loader: customersLoader,
        children: [
          {path: '/customers/create-customer', element: <FormNewCustomers />, action: newCustomerAction },
          {path: '/customers/:id', element: <CustomerDetails />, loader: customerDetailsLoader}
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);