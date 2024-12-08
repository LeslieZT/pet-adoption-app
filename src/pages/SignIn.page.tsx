import React from "react";
import { AuthenticatioLayout } from "../layouts/Authenticatio.layout";
import { SignInForm } from "../view/Authentication/SignInForm";

const SignInPage: React.FC = () => {
  return (
    <AuthenticatioLayout
      coverImage="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733588218/sign-in-picture-min_ad447p.png"
      alt="HappyPaws Sign In"
    >
      <SignInForm />
    </AuthenticatioLayout>
  );
};

export default SignInPage;
