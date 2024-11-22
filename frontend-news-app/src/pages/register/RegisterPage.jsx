import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/index/users";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userActions } from "../../store/reducers/userReducer";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data)); // save to localStorage
      toast.success("Welcome " + data.name + "!");
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [userState.userInfo, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  const password = watch("password");
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full md:max-w-sm mx-auto">
          <h1 className="font-bold text-2xl font-roboto text-center text-dark-hard mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#969696] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name..."
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                className={`w-full px-2 py-4 md:py-2 rounded-lg border border-[#00000028] placeholder:text-[#959ead] text-dark-hard mt-3 block outline-none ${
                  errors?.name ? "border-red-500" : ""
                }`}
              />
              {errors?.name?.message && (
                <p className="text-red-500 text-xs">{errors?.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#969696] font-semibold block"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email..."
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                className={`w-full px-2 py-4 md:py-2 rounded-lg border border-[#00000028] placeholder:text-[#959ead] text-dark-hard mt-3 block outline-none ${
                  errors?.email ? "border-red-500" : ""
                }`}
              />
              {errors?.email?.message && (
                <p className="text-red-500 text-xs">{errors?.email?.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#969696] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password..."
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 characters",
                  },
                })}
                className={`w-full px-2 py-4 md:py-2 rounded-lg border border-[#00000028] placeholder:text-[#959ead] text-dark-hard mt-3 block outline-none ${
                  errors?.password ? "border-red-500" : ""
                }`}
              />
              {errors?.password?.message && (
                <p className="text-red-500 text-xs">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#969696] font-semibold block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password..."
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Passwords do not match";
                    }
                  },
                })}
                className={`w-full px-2 py-4 md:py-2 rounded-lg border border-[#00000028] placeholder:text-[#959ead] text-dark-hard mt-3 block outline-none ${
                  errors?.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors?.confirmPassword?.message && (
                <p className="text-red-500 text-xs">
                  {errors?.confirmPassword?.message}
                </p>
              )}
            </div>
            <Link
              to={"/forgot-password"}
              className="font-semibold text-[#1d1d7d]"
            >
              Forgot password?
            </Link>
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="w-full bg-[#1d1d7d] py-4 md:py-2 rounded-lg text-white font-semibold my-6 hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Register
            </button>
            <p className="">
              Have and account?{" "}
              <Link
                to={"/login"}
                className="font-semibold text-[#1d1d7d] hover:text-opacity-80 disabled:opacity-70"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
