import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/shared/Layout";
import HomePage from "./pages/HomePage";
import AllQuotesList from "./pages/AllQuotesList";
import OneQuotePage from "./pages/OneQuotePage";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, 
                element: <HomePage/>,
            },
            {
                index: true, 
                path: '/quotes',
                element: <AllQuotesList/>,
            },
            {
                index: true, 
                path: `/quotes/:id`,
                element: <OneQuotePage />,
            },
            {
                path: "*",
                element: <div>404 - Not Found</div>
            }

        ]
    }
])