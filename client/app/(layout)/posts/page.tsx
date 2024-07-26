"use client";

import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { PostsMenu } from "@/components/posts/postsMenu/PostsMenu";
import Post from "@/components/post/Post";

import { getPaginatedPosts } from "@/services/post/post.service";

import Image from "next/image";
import images from "@/constants/images";

import "./Posts.css";

import type { PostInterface } from "@/utils/interfaces";
import { useAuthContext } from "@/contexts/AuthContext2";
import {useUserIdUtil} from "@/utils/getUserId";

const Posts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const { user } = useAuthContext();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (!user.email) return;
    
      const getUser = async () => {
        const result = await useUserIdUtil(user.email);
        setUserId(result.id);
      };

      getUser();
    }, [user]);

  const fetchMorePosts = useCallback(async () => {
    let paginatedPosts;
    if (posts.length !== 0) {
      paginatedPosts = await getPaginatedPosts(posts[posts.length - 1].id);
    } else {
      paginatedPosts = await getPaginatedPosts();
    }

    if (paginatedPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prevPosts) => [...prevPosts, ...paginatedPosts]);
    }
  }, [posts]);

  useEffect(() => {
    
    fetchMorePosts();
  }, []);

  useEffect(() => {
    if (inView && hasMore) {
      fetchMorePosts();
    }
  }, [inView, hasMore, fetchMorePosts]);

  return (
    <>
      <div className="flex h-screen">
        <div className="flex-grow p-5 overflow-y-auto custom-scrollbar no-scrollbar">
          <PostsMenu />
          <div className="feedContainer no-scrollbar">
            {posts.map((post, index) => (
              <Post key={index} post={post} userId={userId} />
            ))}
            {hasMore && (
              <div ref={ref} className="loading">
                <div className="flex items-center justify-center h-screen">
                  <div className="loader"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="news">
          <div className="searchContainer">
            {/* Example of a news item */}
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
      </div>
    </>
  );
};

export default Posts;
