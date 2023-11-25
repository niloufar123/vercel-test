import React, { Suspense } from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import { ServiceLoading, SuspenseLoading } from "./components/loading";
import ErrorIndex from "./pages/errors";
import Login from "./pages/login";

function App() {


  const router = createBrowserRouter([
    {

      element: <MainLayout />,

      children: [
        {
          index: true,
          path: "/",
          element: <HomePage />,

        },{
          path:"/login",
          element:<Login/>
        }
      ]
    }
    , {
      path: "*",
      element: <ErrorIndex />
    }
  ]);


  return (
    <div>
      <Suspense fallback={<SuspenseLoading />}>
        <RouterProvider router={router} />
      </Suspense>
      <ServiceLoading />

    </div>
  )

}

export default App;
