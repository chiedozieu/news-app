import React, { useState } from "react";
import { stables } from "../constants";
import { CiCamera } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import CropEasy from "./crop/CropEasy";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfilePicture } from "../services/index/users";
import { userActions } from "../store/reducers/userReducer";

const ProfilePicture = ({ avatar }) => {
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ token, formData }) => {
      return updateProfilePicture({
        token: token,
        formData: formData,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      setOpenCrop(false);
      localStorage.setItem("account", JSON.stringify(data)); // save to localStorage
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile photo removed");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto({ url: URL.createObjectURL(file), file });
    setOpenCrop(true);
  };

  const handleDeleteImage = async () => {
    if (
      window.confirm("Are you sure you want to delete your profile picture?")
    ) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", undefined);

        mutate({
          token: userState?.userInfo.token,
          formData: formData,
        });
      } catch (error) {
        toast.error(error?.message);
        console.log(error);
      }
    }
  };
  return (
    <>
      {openCrop &&
        createPortal(
          <CropEasy photo={photo} setOpenCrop={setOpenCrop} />,
          document.getElementById("portal")
        )}
      <div className="w-full flex items-center gap-x-4 relative">
        <div className=" w-20 h-20 rounded-full outline outline-offset-2 outline-1 overflow-hidden outline-[#dc14145e] mb-6">
          <label
            htmlFor="profilePicture"
            className="cursor-pointer inset-0 rounded-full bg-transparent"
          >
            {avatar ? (
              <img
                src={stables.UPLOAD_FOLDER_BASE_URL + avatar}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-50/50 flex items-center justify-center">
                <CiCamera className="w-7 h-auto text-primary" />
              </div>
            )}
          </label>
          <input
            type="file"
            className="sr-only"
            id="profilePicture"
            onChange={handleFileChange}
          />
        </div>
        {avatar && (
          <button
            onClick={handleDeleteImage}
            disabled={isLoading}
            type="button"
            className="absolute bottom-3 left-14 font-bold rounded-full p-1 bg-white"
          >
            <CiTrash size={20} color="red" />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfilePicture;
