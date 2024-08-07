"use client";

import { useAuthContext } from "@/contexts/AuthContext2";
import { useUserIdUtil } from "@/utils/getUserId";
import { useQuery } from "@tanstack/react-query";
import Post from "@/components/post/Post";
import { getSinglePost } from "@/services/post/post.service";

const SinglePostPage = ({ params }: { params: any }) => {
  const { user } = useAuthContext();  

   const { data, isLoading, isError } = useQuery({
     queryKey: ["singlePost", user?.email],
     queryFn: async () => {
       if (!user || !user.email) {
         throw new Error("User or user email is not here...");
       }
       const {id} = await useUserIdUtil(user.email as string);

       const singlePost = await getSinglePost(params.postId);
       return { id, singlePost};
     },
     enabled: !!user?.email,
   });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-zinc-800">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return <div>Error loading data.</div>;
  }

  
  const { id, singlePost, } =
    data || {};

  return <Post post={singlePost} userId={id} />;
  // return <SinglePost postId={params.postId} userId={data.id} />;
};

export default SinglePostPage;
