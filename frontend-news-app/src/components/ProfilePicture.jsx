import React from "react";
import { stables } from "../constants";
import { CiCamera } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const ProfilePicture = ({ avatar }) => {
  return (
    <div className="w-full flex items-center gap-x-4 relative">
      <div className=" w-12 h-12 rounded-full outline outline-offset-2 outline-1 overflow-hidden outline-primary mb-6">
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
        <input type="file" className="sr-only" id="profilePicture " />
      </div>
      {avatar && (
        <button
          type="button"
          className="absolute top-9 left-9 bg-[#dd4040] rounded-full text-white p-1"
        >
          <CiTrash size={14} />
        </button>
      )}
    </div>
  );
};

export default ProfilePicture;
