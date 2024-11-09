import React from "react";
import { Link } from "react-router-dom";

const SuggestPost = ({ className, header, posts = [], tags }) => {
  return (
    <div className={`w-full shadow-sm ${className}`}>
      <h2 className="font-roboto text-2xl font-medium"> {header}</h2>
      <div className="grid md:grid-cols-2 gap-4 gap-y-5 mt-5">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-5">
            <img
              src={post.image}
              alt=""
              className="aspect-square md:w-40 md:h-40 "
            />
            <div className="flex flex-col">
              <h3 className="font-roboto text-lg font-medium mt-2">
                {post.title}
              </h3>
              <p className="text-[#00000085] text-sm">
                {post.description}
              </p>
              <span className="text-[#00000085] text-xs mt-4">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto text-dark-hard font-medium mt-8">Tags</h2>
      <div className="flex flex-wrap gap-2 mt-4 ">
        {tags.map((tag, index) => (
          <Link
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white"
            key={index}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestPost;
