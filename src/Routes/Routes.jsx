import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }
      ]
    },
  ]);