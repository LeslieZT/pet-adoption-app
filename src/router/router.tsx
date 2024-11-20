import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  HomePage,
  SignInPage,
  SignUpPage,
  AdoptionPage,
  DonationPage,
  PetInfoPage,
  AdoptionApplicationPage,
  AccountPage,
  ContactPage,
  AccountCreatedPage,
  VerifyAccountPage,
  AuthProviderPage
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
          {
            path: "/adopt/:petId/application-form",
            element: <AdoptionApplicationPage />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/donate",
        element: <DonationPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
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
  {
    path: "/sign-up/success",
    element: <AccountCreatedPage />,
  },
  {
    path: "/auth/verify-email",
    element: <VerifyAccountPage />,
  },
  {
    path: "/auth/providers/:provider/callback",
    element: <AuthProviderPage />,
  }
]);
