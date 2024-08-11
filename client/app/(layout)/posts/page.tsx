"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PostsMenu } from "@/components/posts/postsMenu/PostsMenu";
import { getPaginatedPosts } from "@/services/post/post.service";
import Image from "next/image";
import images from "@/constants/images";
import "./Posts.css";
import type { PostInterface } from "@/utils/interfaces";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useUserIdUtil } from "@/utils/getUserId";
import { useQuery } from "@tanstack/react-query";
import PostBadge from "@/components/3dPosts/postBadge";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Lightformer, Environment } from "@react-three/drei";
import { ArrowRightIconBig } from "@/utils/svgIcons";

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

        if (posts.length === 0) {
          const paginatedPosts = await getPaginatedPosts();

          // setPosts((prevPosts) => [...prevPosts, ...paginatedPosts]);
          setPosts(paginatedPosts);
          return paginatedPosts;
        } else {
          const paginatedPosts = await getPaginatedPosts(
            posts[posts.length - 1].id,
          );
          // setPosts((prevPosts) => [...prevPosts, ...paginatedPosts]);
          setPosts(paginatedPosts);
          return paginatedPosts;
        }
      }
    },
  });

  // useEffect(() => {
  //   if (inView) {
  //     refetch();
  //   }
  // }, [inView, refetch]);

  return (
    <>
      <div className="flex h-screen">
        <div className="flex-grow">
          <PostsMenu />
          <div className="flex h-screen w-full overflow-x-auto">
            <div className="w-full">
              <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
                <ambientLight intensity={Math.PI} />
                <Physics interpolate gravity={[0, -30, 0]} timeStep={1 / 60}>
                  {posts?.map((post, index) => (
                    <PostBadge
                      key={index}
                      post={post}
                      userId={userId}
                      fixedStart={index - 2}
                    />
                  ))}
                </Physics>
                <Environment background blur={0.75}>
                  <color attach="background" args={["#2f2f2f"]} />
                  <Lightformer
                    intensity={2}
                    color="white"
                    position={[0, -1, 5]}
                    rotation={[0, 0, Math.PI / 3]}
                    scale={[100, 0.1, 1]}
                  />
                  <Lightformer
                    intensity={3}
                    color="white"
                    position={[-1, -1, 1]}
                    rotation={[0, 0, Math.PI / 3]}
                    scale={[100, 0.1, 1]}
                  />
                  <Lightformer
                    intensity={3}
                    color="white"
                    position={[1, 1, 1]}
                    rotation={[0, 0, Math.PI / 3]}
                    scale={[100, 0.1, 1]}
                  />
                  <Lightformer
                    intensity={10}
                    color="white"
                    position={[-10, 0, 14]}
                    rotation={[0, Math.PI / 2, Math.PI / 3]}
                    scale={[100, 10, 1]}
                  />
                </Environment>
              </Canvas>
            </div>

            <div className="mx-2 flex items-center bg-transparent">
              <ArrowRightIconBig
                className="h-10 w-10 hover:cursor-pointer"
                onClick={() => refetch()}
              />
            </div>
          </div>
        </div>

        <div className="news sm:w-1/5 md:w-2/5">
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
      </div>
    </>
  );
};

export default Posts;
