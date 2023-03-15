import React from "react";

import React, { lazy , Suspense} from "react";

import  ReactDOM  from "react-dom/client";



import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Shimmer from "./components/Shimmer";


const PokeInfo = lazy(() => import("./components/PokeInfo"));
const Home = lazy(() => import("./components/Body"));



const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/pokeInfo/:id",
        element :<PokeInfo />
      },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const Routes = ()=>(
    <Suspense fallback={<Shimmer />}>
<RouterProvider router={appRouter} />
    </Suspense>
)

root.render(<Routes/>);


