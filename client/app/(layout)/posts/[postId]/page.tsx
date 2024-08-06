"use client";

import SinglePost from "@/components/singlePost/SinglePost";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useUserIdUtil } from "@/utils/getUserId";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SinglePostPage = ({ params }: { params: any }) => {
  const [userId, setUserId] = useState(null);
  const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["singlePost", user.email],
    queryFn: () => useUserIdUtil(user.email as string),
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

  return <SinglePost postId={params.postId} userId={data.id} />;
};

export default SinglePostPage;
