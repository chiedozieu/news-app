import React, { useState } from "react";
import { stables } from "../constants";
import { CiCamera } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import CropEasy from "./crop/CropEasy";
import { createPortal } from "react-dom";

const ProfilePicture = ({ avatar }) => {
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto({ url: URL.createObjectURL(file), file });
    setOpenCrop(true);
  };
  return (
    <>
      {openCrop &&
        createPortal(
          <CropEasy photo={photo} setOpenCrop={setOpenCrop} />,
          document.getElementById("portal")
        )}
      <div className="w-full flex items-center gap-x-4 relative">
        <div className=" w-16 h-16 rounded-full outline outline-offset-2 outline-1 overflow-hidden outline-primary mb-6">
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
            type="button"
            className="absolute top-10 left-10 font-bold rounded-full p-1 bg-white"
          >
            <CiTrash size={20} color="red" />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfilePicture;
