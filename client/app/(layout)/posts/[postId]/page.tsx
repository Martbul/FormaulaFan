"use client";

import SinglePost from "@/components/singlePost/SinglePost";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useEffect, useState } from "react";
import useUserIdUtil from "@/utils/getUserId";

const SinglePostPage = ({ params }) => {
  const [userId, setUserId] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user?.email) return;

    const getUser = async () => {
      try {
        const result = await useUserIdUtil(user.email);
        console.log(result);
        setUserId(result.id);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    getUser();
  }, [user]);

  // Ensure userId is defined before rendering SinglePost
  if (!userId) {
    return <div>Loading...</div>;
  }

  return <SinglePost postId={params.postId} userId={userId} />;
};

export default SinglePostPage;
