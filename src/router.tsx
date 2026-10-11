import {createBrowserRouter} from "react-router";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: null,
        children: [
            { index: true, element: null },
            { path: "/*", element: null },
        ],
    },

    { path: "/login", element: null },
]);