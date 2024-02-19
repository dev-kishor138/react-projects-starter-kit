import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../main/MainLayouts";
import Error from "../pages/Error/Error";
import Homepage from "../pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
])