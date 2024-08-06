"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PostsMenu } from "@/components/posts/postsMenu/PostsMenu";
import Post from "@/components/post/Post";

import { getPaginatedPosts } from "@/services/post/post.service";

import Image from "next/image";
import images from "@/constants/images";

import "./Posts.css";

import type { PostInterface } from "@/utils/interfaces";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useUserIdUtil } from "@/utils/getUserId";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const Posts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const { user } = useAuthContext();
  const [userId, setUserId] = useState(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts", user.email],
    queryFn: async () => {
      if (user.email) {
        const result = await useUserIdUtil(user.email as string);
        setUserId(result.id);
      }

      if (posts.length === 0) {
        const paginatedPosts = await getPaginatedPosts();

        setPosts((prevPosts) => [...prevPosts, ...paginatedPosts]);

        return paginatedPosts;
      } else {
        const paginatedPosts = await getPaginatedPosts(
          posts[posts.length - 1].id,
        );
        setPosts((prevPosts) => [...prevPosts, ...paginatedPosts]);

        return paginatedPosts;
      }
    },
  });

  useEffect(() => {
    if (inView) {
      refetch();
    }
  }, [inView, refetch]);

  return (
    <>
      <div className="flex h-screen">
        <div className="flex-grow p-5 overflow-y-auto custom-scrollbar no-scrollbar">
          <PostsMenu />
          <div className="feedContainer no-scrollbar">
            {posts?.map((post, index) => (
              <Post key={index} post={post} userId={userId} />
            ))}
            {hasMore && (
              <div ref={ref}>
                <div className="flex items-center justify-center h-screen">
                  <div className="loader"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="news md:w-2/5 sm:w-1/5">
          <div className="searchContainer">
            Example of a news item
            <div className="newsItem">
              <div className="newsImage">
                <Image src={images.f1RaceCalendar} alt="News" />
                <div className="newsTextOverlay">
                  <h3 className="newsTitle">News Title</h3>
                  <p className="newsTimestamp">Timestamp</p>
                  <p className="newsCreator">Creator</p>
                </div>
              </div>
            </div>
            <div className="newsItem">
              <div className="newsImage">
                <Image src={images.f1RaceCalendar} alt="News" />
                <div className="newsTextOverlay">
                  <h3 className="newsTitle">News Title</h3>
                  <p className="newsTimestamp">Timestamp</p>
                  <p className="newsCreator">Creator</p>
                </div>
              </div>
            </div>
            <div className="newsItem">
              <div className="newsImage">
                <Image src={images.crashLanceStroll} alt="News" />
                <div className="newsTextOverlay">
                  <h3 className="newsTitle">News Title</h3>
                  <p className="newsTimestamp">Timestamp</p>
                  <p className="newsCreator">Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Posts;
