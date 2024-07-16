"use client";

import "./SearchGroups.css";
import { useState, useEffect } from "react";
import { getAllGroups } from "@/services/group/group.service";
import SearchGroupCard from "./searchGroupCard/SearchGroupCard";

interface Group {
  id: string;
  name: string;
  imageUrl: string;
  creator: any;
  members: any;
  channels: any;
}

export default function SearchGroups() {
  const [searchResult, setSearchResult] = useState<Group[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  //! for now make 2 differnt function sor getting all groups initialy and serach, BUT you need to make one  function for bought
  // const searchGroups = async() =>{
  //   try {

  //   } catch (error) {

  //   }
  // }

  //! implement also pagination
  const getGroups = async () => {
    try {
      const result: Group[] = await getAllGroups();
      setSearchResult(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    getGroups();
    console.log("getting all groups from DB");
  }, []);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="searchChatResults">
      <div className="resultContainer">
        {searchResult.map((group, index) => (
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
