import {createBrowserRouter} from "react-router";
import App from "./App.tsx";
import {Home} from "./pages/Home.tsx";


export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: null,
        children: [
            { index: true, element: <Home /> },
            { path: "/*", element: null },
        ],
    },

    { path: "/login", element: null },
]);