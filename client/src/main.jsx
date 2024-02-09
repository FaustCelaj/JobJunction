import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import Home from './pages/Home';
import Search from './pages/Search.jsx';
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import NoMatch from './pages/NoMatch.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <SignUp />
      }, {
        path: '/search',
        element: <Search />
      }, {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
