"use client"

import Post from "@/components/post/Post";
import { useAuthContext } from "@/contexts/AuthContext2";
import { getUserSavePosts } from "@/services/post/post.service";
import { useUserIdUtil } from "@/utils/getUserId";
import type { PostInterface } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";


const Bookmarks = () => {
   const { user } = useAuthContext();
  

    const {data, isLoading, isError}  = useQuery({
      queryKey: ["saved", user?.email],
      queryFn: async () => {
        if (!user || !user.email) {
          throw new Error("User or user email is not here...");
        }
        const posts = await getUserSavePosts(user.email);
        const userId = await useUserIdUtil(user.email);
        return { posts, userId};
      },
      enabled: !!user?.email, 
    
    })
    if (isError) {
      return <div>Error loading data.</div>;
    }
  
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen bg-zinc-800">
          <div className="loader"></div>
        </div>
      );
    }
    const { posts, userId } = data || {};

   return (
      <section className="posts h-full overflow-y-auto bg-[#2c2c2c]">
      <div className="post space-y-5">
        {posts?.map((post:PostInterface, index:number) => (
          <Post key={index} post={post} userId={userId} />
        ))}
      </div>
    </section>
   );
}
 
export default Bookmarks 