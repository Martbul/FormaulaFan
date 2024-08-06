"use client";

import "./SearchGroups.css";
import { getAllGroups } from "@/services/group/group.service";
import SearchGroupCard from "./searchGroupCard/SearchGroupCard";
import { useQuery } from "@tanstack/react-query";

export default function SearchGroups() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["groups"],
    queryFn: getAllGroups,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-2/6">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="searchChatResults">
      <div className="resultContainer">
        {data.map((group, index) => (
          <SearchGroupCard
            key={index}
            id={group.id}
            imageUrl={group.imageUrl}
            groupName={group.name}
            members={group.members}
          />
        ))}
      </div>
    </div>
  );
}
