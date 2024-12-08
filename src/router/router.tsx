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
  AuthProviderPage,
  DonationSuccessPage,
  DonationFailPage,
  AdoptionApplicationSuccessPage,
  ContactSuccessPage,
} from "../pages";
import { ErrorPage } from "../pages/Error.page";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
            element: (
              <ProtectedRoute>
                <AdoptionApplicationPage />
              </ProtectedRoute>
            ),
          },
          {
            path: "/adopt/:petId/application-form/success",
            element: (
              <ProtectedRoute>
                <AdoptionApplicationSuccessPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/contact/success",
        element: <ContactSuccessPage />,
      },
      {
        path: "/donate",
        element: <DonationPage />,
      },
      {
        path: "/donate/success",
        element: <DonationSuccessPage />,
      },
      {
        path: "/donate/cancel",
        element: <DonationFailPage />,
      },
      {
        path: "/account",
        element: (
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        ),
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
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);
