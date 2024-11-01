import React from "react";
import { AuthenticatioLayout } from "../layouts/Authenticatio.layout";
import { SignUpForm } from "../views/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <AuthenticatioLayout
      coverImage="./src/assets/sign-up-cover.png"
      alt="HappyPaws Sign Up"
    >
      <SignUpForm />
    </AuthenticatioLayout>
  );
};

export default SignUpPage;
