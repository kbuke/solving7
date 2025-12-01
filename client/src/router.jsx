import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./Pages/Home/Home";
import App from "./App";
import { TeamLogin } from "./Pages/Admin/TeamLogin";


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
                path: "*",
                element: <Navigate to="/" replace />
            }
        ]
    }
])