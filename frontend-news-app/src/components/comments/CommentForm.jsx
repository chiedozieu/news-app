import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = '',
}) => {
  const [value, setValue] = useState(initialText);
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-[#2a40e946] rounded-lg p-4">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={5}
          className="w-full focus:outline-none bg-transparent"
          placeholder="Leave you comment here..."
        ></textarea>
        <div className="flex flex-col-reverse min-[420px]:flex-row items-center gap-2 pt-2">
        {
          formCancelHandler && (
            <button
            type="button"
            className="px-6 py-2.5 font-semibold rounded-lg border border-red-500 text-red-500"
            onClick={formCancelHandler}
          >
            Cancel
          </button>
          )
        }
          <button
            type="submit"
            className="px-6 py-2.5 font-semibold rounded-lg bg-primary text-white"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
