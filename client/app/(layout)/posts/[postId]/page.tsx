"use client";

import SinglePost from "@/components/singlePost/SinglePost";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useUserIdUtil } from "@/utils/getUserId";
import { useEffect, useState } from "react";

const SinglePostPage = ({ params }: { params: any }) => {
  const [userId, setUserId] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user?.email) return;

    const getUser = async () => {
      try {
        const result = await useUserIdUtil(user.email as string);
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
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return <SinglePost postId={params.postId} userId={userId} />;
};

export default SinglePostPage;
