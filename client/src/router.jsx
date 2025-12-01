import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./Pages/Home/Home";
import App from "./App";
import { TeamLogin } from "./Pages/Login/TeamLogin";
import { AdminPg } from "./Pages/Admin/AdminPg";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "teamlogin",
                element: <TeamLogin />
            },
            {
                path: "admin",
                element: <AdminPg />
            },
            {
                path: "*",
                element: <Navigate to="/" replace />
            }
        ]
    }
])