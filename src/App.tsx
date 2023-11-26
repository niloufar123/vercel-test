import React, { Suspense } from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import { ServiceLoading, SuspenseLoading } from "./components/loading";
import ErrorIndex from "./pages/errors";
import Login from "./pages/login";
import PatientList from "./pages/patientList";
import { ToastContainer } from "react-toastify";

function App() {


  const router = createBrowserRouter([
    {

      element: <MainLayout />,

      children: [
        {
          index: true,
          path: "/",
          element: < Login />,

        }, {
          path: "/patientList",
          element: <PatientList />
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ServiceLoading />

    </div>
  )

}

export default App;
