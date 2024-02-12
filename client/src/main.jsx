import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Search from "./pages/Search.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Job from "./pages/Job.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      // In here we can update it with the jobPosting id, whichever job the user clicks on will bring them to the specific job page
      // {
      //   path: "/search/id:",
      //   element: <Search />,
      // },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/job",
        element: <Job />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
