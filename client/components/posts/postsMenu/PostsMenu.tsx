// import React, { useEffect } from "react";
// import { Dialog, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import dynamic from "next/dynamic";
// import { WriteIcon, SearchIcon } from "@/utils/svgIcons";
// import { useForm, Controller } from "react-hook-form";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useQuery, useMutation } from "@tanstack/react-query";

// import "./PostsMenu.css";
// import { getSearchResultsPosts } from "@/services/post/post.service";

// type SearchFormData = {
//   searchForm: string;
// };

// const DynamicCreatePostModal = dynamic(
//   () => import("../../posts/CreatePostModal/CreatePostModal"),
//   {
//     ssr: false,
//   },
// );

// export const PostsMenu = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState: { errors },
//   } = useForm<SearchFormData>();

//   const searchTerm = watch("searchForm");

//   useEffect(() => {
//     if (searchTerm !== undefined) {
//       const params = new URLSearchParams(searchParams.toString());
//       if (searchTerm) {
//         params.set("search", searchTerm);
//       } else {
//         params.delete("search");
//       }
//       router.push(pathname + "?" + params.toString());
//     }
//   }, [searchTerm, pathname, router, searchParams]);

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["searchPosts", searchTerm],
//     queryFn: async () => {
//       const searchResultsPosts = getSearchResultsPosts(searchTerm);
//       },
//     enabled: !!searchTerm, 
//   });

//   const onSubmit = (data: SearchFormData) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("search", data.searchForm);
//     router.push(pathname + "?" + params);
//   };

//   return (
//     <div className="post-menu-layout remove-selecting-text mx-5 mt-5">
//       <Dialog>
//         <div className="create-post">
//           <DialogTrigger asChild>
//             <WriteIcon className="h-8 w-8" />
//           </DialogTrigger>
//         </div>
//         <div className="select-feed">
//           <div className="flex h-5 items-center space-x-4 text-sm">
//             <div className="menu-feed-option">Friends</div>
//             <Separator orientation="vertical" />
//             <div className="menu-feed-option">For You</div>
//             <Separator orientation="vertical" />
//             <div className="menu-feed-option">Following</div>
//           </div>
//         </div>
//         <div className="search-posts">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mx-auto flex w-full max-w-md items-center">
//               <div className="relative flex w-full rounded-full bg-white shadow-lg">
//                 <Input
//                   type="text"
//                   placeholder="Search"
//                   className="w-full rounded-full border-none bg-[#f5f8fa] py-2 pl-4 pr-10 text-gray-700 placeholder-gray-500 transition-all duration-300 ease-in-out focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
//                   {...register("searchForm")}
//                 />
//                 <Button type="submit">
//                   <SearchIcon className="absolute right-3 top-2 h-5 w-5 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-primary" />
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <DynamicCreatePostModal />
//       </Dialog>
//     </div>
//   );
// };



import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { WriteIcon, SearchIcon } from "@/utils/svgIcons";
import { useForm } from "react-hook-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSearchResultsPosts } from "@/services/post/post.service";

import "./PostsMenu.css";

type SearchFormData = {
  searchForm: string;
};

const DynamicCreatePostModal = dynamic(
  () => import("../../posts/CreatePostModal/CreatePostModal"),
  {
    ssr: false,
  },
);

//! work in proggress for the search bar posts
export const PostsMenu = () => {
 const router = useRouter();
 const pathname = usePathname();
  const searchParams = useSearchParams();
  const { register, handleSubmit, watch } = useForm<SearchFormData>();

  const searchTerm = watch("searchForm");

  // Query with manual triggering
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["searchPosts", searchTerm],
    queryFn: async () => {
      if (!searchTerm) return; // Return early if no search term
      const searchResultsPosts = await getSearchResultsPosts(searchTerm);
      return searchResultsPosts;
    },
    enabled: false, // The query will not automatically run
  });

  const onSubmit = (data: SearchFormData) => {
     const params = new URLSearchParams(searchParams.toString());
     params.set("search", data.searchForm);
     router.push(pathname + "?" + params);
    // Manually trigger the query
    refetch();
  };

  return (
    <div className="post-menu-layout remove-selecting-text mx-5 mt-5">
      <Dialog>
        <div className="create-post">
          <DialogTrigger asChild>
            <WriteIcon className="h-8 w-8" />
          </DialogTrigger>
        </div>
        <div className="select-feed">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div className="menu-feed-option">Friends</div>
            <Separator orientation="vertical" />
            <div className="menu-feed-option">For You</div>
            <Separator orientation="vertical" />
            <div className="menu-feed-option">Following</div>
          </div>
        </div>
        <div className="search-posts">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto flex w-full max-w-md items-center">
              <div className="relative flex w-full rounded-full bg-white shadow-lg">
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-full border-none bg-[#f5f8fa] py-2 pl-4 pr-10 text-gray-700 placeholder-gray-500 transition-all duration-300 ease-in-out focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register("searchForm")}
                />
                <Button type="submit">
                  <SearchIcon className="absolute right-3 top-2 h-5 w-5 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-primary" />
                </Button>
              </div>
            </div>
          </form>
        </div>
        <DynamicCreatePostModal />
      </Dialog>
    </div>
  );
};
