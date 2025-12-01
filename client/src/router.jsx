import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./Pages/Home/Home";
import App from "./App";


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
                path: "*",
                element: <Navigate to="/" replace />
            }
        ]
    }
])