import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/Main/Main';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Login from './components/AuthScreens/Login';
import Signup from './components/AuthScreens/Signup';
import { Toaster } from "react-hot-toast";

/***
 * @reduxSetup
 * */
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from './redux/store';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/sign-in",
        element: < Login />
      },
      {
        path: "/sign-up",
        element: <Signup />
      },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate /*loading={<LoadingScreen/>}*/ persistor={persistor}>
        <Toaster position="top-center" reverseOrder={false} />

        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);


