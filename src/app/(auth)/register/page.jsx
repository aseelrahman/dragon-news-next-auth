"use client";
import Link from "next/link";
import React from "react";
import { useForm, Watch } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    const {email, name, photoUrl, password} = data;
    console.log(name, photoUrl);
    
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">
          Register your account
        </h2>

        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="space-y-4 mt-6"
        >
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your name</legend>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          {/* Photo Url */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              {...register("photoUrl", {
                required: "Photo URL field is required",
              })}
              className="input"
              placeholder="Enter your photo url address"
            />
            {errors.photoUrl && (
              <p className="text-red-500">{errors.photoUrl.message}</p>
            )}
          </fieldset>

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
          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>

        {/* Redirect to Register Page*/}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
