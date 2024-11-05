import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  HomePage,
  SignInPage,
  SignUpPage,
  AdoptionPage,
  DonationPage,
  PetInfoPage,
} from "../pages";

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
        children: [
          {
            path: "/adopt",
            element: <AdoptionPage />,
          },
          {
            path: "/adopt/:petId",
            element: <PetInfoPage />,
          },
        ],
      },
      {
        path: "/donate",
        element: <DonationPage />,
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
