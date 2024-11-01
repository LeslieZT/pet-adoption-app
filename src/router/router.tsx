import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage, SignInPage, SignUpPage } from "../pages";
import { AdoptPage } from "../pages/Adopt.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/adopt",
        element: <AdoptPage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);
