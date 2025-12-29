import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm(
        // {
        //     defaultValues: {
        //         email: "pitam@gmail.com",
        //         password: 123412
        //     }
        // }
    );
    console.log(errors)
    const onSubmit = data => {
        console.log(data);
    }

  return (
    <div>
      <h1 className="text-3xl font-bold text-base-content">Welcome Back</h1>
      <p className="mt-1 text-sm text-base-content/60">Login with ZapShift</p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label pb-1">
            <span className="label-text text-xs font-semibold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email",{ required: 'this field is required', minLength: { value: 4, message: "min length is 4"}, maxLength: {
                value: 9, message: "max length is 9"
            }})}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <label className="label pb-1">
            <span className="label-text text-xs font-semibold">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", {required: 'this field is required'    })}
          />
          <p className="text-red-500">{errors.password?.message}</p>

          <div className="mt-2 text-right">
            <button type="button" className="link link-hover text-xs">
              Forgot Password?
            </button>
          </div>
        </div>

        <button className="btn btn-primary w-full text-secondary" type="submit">Login</button>

        <p className="text-xs text-base-content/60">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="link link-hover font-semibold">
            Register
          </Link>
        </p>

        <div className="divider text-xs text-base-content/50">Or</div>

        <button type="button" className="btn btn-ghost w-full bg-base-200">
          <span className="mr-2">G</span> Login with google
        </button>
      </form>
    </div>
  );
}
