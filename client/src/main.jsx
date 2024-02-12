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
import Logout from "./components/authentication/Logout.jsx"; 
import SignIn from "./components/authentication/signIn.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "search", element: <Search /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "job", element: <Job /> },
      { path: "logout", element: <Logout /> }, 
      { path: "signin", element: <SignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
