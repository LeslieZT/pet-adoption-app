import React from "react";
import { AuthenticatioLayout } from "../layouts/Authenticatio.layout";
import { SignInForm } from "../view/Authentication/SignInForm";

const SignInPage: React.FC = () => {
  return (
    <AuthenticatioLayout
      coverImage="./src/assets/sign-in-cover.png"
      alt="HappyPaws Sign In"
    >
      <SignInForm />
    </AuthenticatioLayout>
  );
};

export default SignInPage;
