import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import SuggestPost from "./container/SuggestPost";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";

const ArticleDetailPage = () => {
  const breadCrumbsData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Article title",
      link: "/blog/1",
    },
  ];
  const postsData = [
    {
      _id: 1,
      image: "https://picsum.photos/227",
      title: "Benefits of digital technology in schools",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,",
      createdAt: "2024-09-23T05:59:32.575+00:00",
    },
    {
      _id: 2,
      image: "https://picsum.photos/226",
      title: "What I saw in downtown Los Angeles",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,",
      createdAt: "2024-10-30T14:47:03.268+00:00",
    },
    {
      _id: 3,
      image: "https://picsum.photos/228",
      title: "Why schools should embrace digital technology",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae",
      createdAt: "2024-10-30T11:20:36.153+00:00",
    },
    {
      _id: 4,
      image: "https://picsum.photos/229",
      title: "The other day, I was reading a book on technology",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,",
      createdAt: "2024-09-23T05:59:32.575+00:00",
    },
  ];
  const tagsData = [
    "Sports",
    "Business",
    "Lifestyle",
    "Politics",
    "Church",
    "Tech",
    "Arts & Culture",
  ];

  return (
    <MainLayout>
      <div className="container mx-auto p-5 max-w-5xl">
        <article className="flex-1 mb-16">
          <BreadCrumbs data={breadCrumbsData} />
          <h1 className="text-2xl font-roboto font-extrabold text-[#030303c1] mb-8">
            How the government is reaping the benefits of digital technology in
            schools
          </h1>
          <p className="text-[#03030366] text-sm mb-4">8th May 2023</p>
          <img
            src="https://picsum.photos/225"
            alt=""
            className="w-full lg:w-[80%] lg:h-[400px]"
          />
          <Link to="/blog?category=selectedCategory" className="text-[#3d56f8]">
            Education
          </Link>
          <div className="mt-4 text-dark-soft lg:w-[80%]">
            <p className="leading-7 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque numquam ipsum culpa est natus quod consequuntur error
              alias, soluta, quasi eius ullam quae fugiat! Voluptas adipisci
              dolorem, quisquam culpa cupiditate accusamus doloribus
              necessitatibus, inventore, totam fugiat voluptatum eaque aliquam
              recusandae?
            </p>
            <p className="leading-7 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque numquam ipsum culpa est natus quod consequuntur error
              alias, soluta, quasi eius ullam quae fugiat! Voluptas adipisci
              dolorem, quisquam culpa cupiditate accusamus doloribus
              necessitatibus, inventore, totam fugiat voluptatum eaque aliquam
              recusandae?
            </p>
          </div>
          <CommentsContainer className="mt-10" loggedInUserId={"a"} />
        </article>
          <div className="mt-7">
            <h2 className="font-roboto font-medium mb-4 md:text-xl text-dark-hard">
              <SocialShareButtons
                url={encodeURI("https://www.google.com")}
                title={encodeURIComponent("Google website")}
              />
            </h2>
          </div>
        <div className="">
          <SuggestPost
            header="Latest Articles"
            posts={postsData}
            tags={tagsData}
            className={"mt-8"}
          />
        </div> 
      </div>
    </MainLayout>
  );
};

export default ArticleDetailPage;
