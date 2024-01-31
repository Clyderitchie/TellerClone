import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/homepage/Home.jsx';
import Error from './pages/errorpage/errorPage.jsx';
import ClientView from './pages/singleClientView/singleclient.jsx';
import Deposit from './pages/deposit/depositScreen.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/client/:clientId', // When I get the search bar working on home page this path will change to /client/:clientId
        element: <ClientView />
      },
      {
        path: '/deposit/:clientId',
        element: <Deposit />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


// /api/client
// /api/account
// /api/teller