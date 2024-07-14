"use client";
import "./Groups.css";
import Navigation from "../../components/navigation/Navigation";
import { Button } from "@/components/ui/button";
import CreatePost from "../../components/createPost/CreatePost";
import images from "../../constants/images";
import MiniPost from "../../components/miniPost/MiniPost";
import Image from "next/image";
import { createGroup } from "@/services/group/group.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchGroups from "@/components/groups/searchGroups/SearchGroups";
import { Input } from "@/components/ui/input";
import icons from "@/constants/icons";

const Groups = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const [error, setError] = useState(null);

  const handleCreateGroup = async () => {
    const result = await createGroup(user.username, user.email);
    if (!result) {
      setError(result);
    }

    router.push(`/chat/mygroup/${result.id}`);
  };

  return (
    <>
      <div className="layout remove-selecting-text">
        <div className="left">
          <Navigation />
        </div>

        <div className="main">
          <div className="feedContainer">
            <div className="heading">
              <div className="sectionTitile">
                <p>Groups</p>
              </div>
              <div className="groupsOperations">
                <div className="createGroup">
                  <button
                    className="groupBtn createBtn"
                    onClick={handleCreateGroup}
                  >
                    {" "}
                    Create
                  </button>
                </div>
              </div>
            </div>

            <div className="taskContainer">
              <div className="searchOperations">
                <div className="search-posts">
                  <div className="flex items-center w-full max-w-md mx-auto">
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Search Twitter"
                        className="bg-[#f5f8fa] border-none rounded-full pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:bg-muted"
                      >
                        <Image
                          src={icons.searchWhite}
                          alt="Search"
                          className="w-5 h-5"
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                <select className="sortSelect">
                  <option value="default">Sort by:</option>
                  <option value="default">Most members</option>
                  <option value="default">Least members</option>
                </select>
                {/* <div className="group-search">
                  <buttton>Search</buttton>
                </div> */}
              </div>

              <div className="teams">
                <div className="teamBox redbull">
                  <Image src={images.redBull} alt="Red Bull" />
                </div>
                <div className="teamBox ferrari">
                  <Image src={images.ferrari} alt="Ferrari" />
                </div>
                <div className="teamBox mclaren">
                  <Image src={images.mclaren} alt="McLaren" />
                </div>
                <div className="teamBox mercedes">
                  <Image src={images.mercedes} alt="Mercedes" />
                </div>
              </div>
            </div>

            <SearchGroups />
          </div>
        </div>

        <div className="feed">
          <div className="searchContainer">
            <CreatePost />
            <MiniPost />
            <MiniPost />
            <MiniPost />
            <MiniPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
