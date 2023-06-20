import logo from './logo.svg';
import './App.css';
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
/* import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/Error";
import Dashboard from "./pages/Dashboard";
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
/*       { path: "/login", element: <LogIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/*", element: <ErrorPage /> }, */
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />)
};

export default App;
