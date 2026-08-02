"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data, "data");
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
    
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">Login your account</h2>

        <form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="space-y-4 mt-6"
        >
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              {...register("password", {
                required: "Password field is required",
              })}
              className="input"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>

        {/* Redirect to Register Page*/}
        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link href={"/register"} className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
