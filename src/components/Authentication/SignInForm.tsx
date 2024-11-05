import { useForm } from "react-hook-form";
import { Card } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData, SignInSchema } from "../../schema/SignIn.schema";
import { Heading } from "../Typography";
import { CustomButton } from "../Buttons";
import { InputField, PasswordField } from "../Forms";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("Login attempt with:", data);
  };

  return (
    <Card className="w-full max-w-md lg:py-10 lg:px-4">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          level="3"
          color="slate-gray"
          className="font-bold text-center"
        >
          Welcome Back 👋
        </Heading>
        <Heading
          level="6"
          color="lavender-purple"
          className="font-medium text-center"
        >
          Please enter your details to sign in
        </Heading>
        <InputField
          name="email"
          control={control}
          label="Your email"
          type="email"
          placeholder="name@flowbite.com"
          icon={HiMail}
        />
        <PasswordField
          name="password"
          control={control}
          label="Your password"
        />

        <div className="flex items-center justify-end">
          <Link
            to="#"
            className="text-sm font-medium text-lavender-purple hover:underline dark:text-primary-500"
          >
            Forgot password?
          </Link>
        </div>
        <CustomButton
          type="submit"
          color="royal-purple"
        >
          Sign in
        </CustomButton>

        <div className="flex items-center justify-center">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 bg-white">Or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomButton color="light-pastel-lilac">
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Google
          </CustomButton>

          <CustomButton color="light-pastel-lilac">
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            Facebook
          </CustomButton>
        </div>
        <div className="text-sm text-center mt-2">
          <p className="text-text-slate-gray">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-lavender-purple hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Card>
  );
};
