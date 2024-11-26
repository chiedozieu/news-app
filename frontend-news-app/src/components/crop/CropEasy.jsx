import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfilePicture } from "../../services/index/users";
import toast from "react-hot-toast";
import { userActions } from "../../store/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const CropEasy = ({ photo, setOpenCrop }) => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

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
      toast.success("Profile photo updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        photo.url,
        croppedAreaPixels,
        rotation
      );
      const file = new File([croppedImage.file], `${photo?.file?.name}`, {
        type: photo?.file?.type,
      });
      const formData = new FormData();
      formData.append("profilePicture", file);

      mutate({
        token: userState?.userInfo.token,
        formData: formData,
      });
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };

  return (
    <div className="fixed z-[1000] inset-0 bg-black/50 flex justify-center p-4 overflow-auto">
      <div className="bg-white h-fit w-full sm:max-w-[350px] p-5 rounded-lg">
        <h2 className="font-semibold text-dark-hard mb-2">Crop Image</h2>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Cropper
            image={photo?.url}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={1}
            onZoomChange={setZoom}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="">
          <label
            htmlFor="ZoomRange"
            className="block mt-2 mb-0.5 text-sm font-medium text-gray-900"
          >
            Zoom: {`${Math.round(zoom * 100)}%`}
          </label>
          <input
            type="range"
            id="ZoomRange"
            min={1}
            max={3}
            step={0.01}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4"
          />
        </div>

        <div className="">
          <label
            htmlFor="rotation"
            className="block mt-2 mb-0.5 text-sm font-medium text-gray-900"
          >
            Rotation
          </label>
          <input
            type="range"
            value={rotation}
            min={0}
            max={360}
            step={1}
            onChange={(e) => setRotation(e.target.value)}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-6"
          />
        </div>
        <div className="flex justify-between gap-2 flex-wrap">
          <button
            onClick={() => setOpenCrop(false)}
            disabled={isLoading}
            className="px-5 py-2.5 font-semibold rounded-lg border border-red-500 text-red-500 disabled:opacity-70 hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleCroppedImage}
            disabled={isLoading}
            className="px-5 py-2.5 font-semibold rounded-lg bg-blue-500 text-white disabled:opacity-70 hover:bg-blue-600"
          >
            Crop & Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropEasy;
