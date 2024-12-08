import React from "react";
import { AuthenticatioLayout } from "../layouts/Authenticatio.layout";
import { SignUpForm } from "../view/Authentication/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <AuthenticatioLayout
      coverImage="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733588219/sign-up-picture-min_twifwi.png"
      alt="HappyPaws Sign Up"
    >
      <SignUpForm />
    </AuthenticatioLayout>
  );
};

export default SignUpPage;
