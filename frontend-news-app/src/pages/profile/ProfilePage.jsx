import React, { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userActions } from "../../store/reducers/userReducer";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState?.userInfo?.token });
    },
    queryKey: ["profile"],
  });

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        token: userState?.userInfo.token,
        userData: { name, email, password },
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data)); // save to localStorage
      queryClient.invalidateQueries(["profile"])
      toast.success("Profile Updated");
      
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [userState.userInfo, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileData?.name,
      email: profileIsLoading ? "" : profileData?.email,
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full md:max-w-sm mx-auto">
         
          <ProfilePicture avatar={profileData?.avatar} />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#3e3c3c] font-semibold block"
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
                className="text-[#3e3c3c] font-semibold block"
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
                className="text-[#3e3c3c] font-semibold block"
              >
                New Password <span className="text-[#959ead] font-light">(Optional)</span>
              </label>
              <input
                type="password"
                placeholder="Enter new password..."
                id="password"
                {...register("password")}
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

            <button
              type="submit"
              disabled={!isValid || profileIsLoading || updateProfileIsLoading || profileError}
              className="w-full bg-[#1d1d7d] py-4 md:py-2 rounded-lg text-white font-semibold my-6 hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Update Profile
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
