"use client"

import Post from "@/components/post/Post";
import { useAuthContext } from "@/contexts/AuthContext2";
import { getUserSavePosts } from "@/services/post/post.service";
import { useUserIdUtil } from "@/utils/getUserId";
import type { PostInterface } from "@/utils/interfaces";
import { useEffect, useState } from "react";

const Bookmarks = () => {
   const { user } = useAuthContext();
   const [getUserSavedPosts, setUserSavedPosts] = useState<[PostInterface] | null>(null);
   const [userId, setUserId] = useState<string | null>(null);

   useEffect(() => {
      if (!user.email) return;
  
      const findUserSavedPosts = async () => {
        const posts = await getUserSavePosts(user.email);
        console.log(posts);
  
        setUserSavedPosts(posts);


        const foundUserId = await useUserIdUtil(user.email);
        console.log(foundUserId.id);
        
        setUserId(foundUserId.id)
      };
      
      
  
      findUserSavedPosts();
    }, [user]);
   return (
      <section className="posts h-full overflow-y-auto bg-[#2c2c2c]">
      <div className="post space-y-5">
        {getUserSavedPosts?.map((post, index) => (
          <Post key={index} post={post} userId={userId} />
        ))}
      </div>
    </section>
   );
}
 
export default Bookmarks 