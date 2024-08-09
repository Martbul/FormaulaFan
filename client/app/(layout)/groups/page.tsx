"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createGroup } from "@/services/group/group.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from "next/navigation";
import SearchGroups from "@/components/groups/searchGroups/SearchGroups";
import { Input } from "@/components/ui/input";
import images from "@/constants/images";
import { useMutation } from "@tanstack/react-query";
import { Suspense } from "react";

import "./Groups.css";
import Loader from "@/components/util/loader";

const Groups = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      const result = await createGroup(user.username, user.email);
      return result;
    },
    onSuccess: (result) => {
      router.push(`/chat/mygroup/${result.id}`);
    },
  });

  const onSubmit = () => {
    mutate();
  };

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-800">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return <div>There was an error: {error.message}</div>;
  }

  return (
    <>
      {/* //! suspense does nothing here */}
      <div className="layout remove-selecting-text">
        <div className="main">
          <div className="feedContainer">
            <div className="heading">
              <div className="sectionTitile">
                <p>Groups</p>
              </div>
              <div className="groupsOperations">
                <div className="createGroup">
                  <button
                    className="groupBtn createBtn grad gradHover"
                    onClick={onSubmit}
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
                  <div className="mx-auto flex w-full max-w-md items-center">
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Search Twitter"
                        className="w-full rounded-full border-none bg-[#f5f8fa] py-2 pl-4 pr-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-muted"
                      >
                        {/* <Image
                          src={icons.searchWhite}
                          alt="Search"
                          className="w-5 h-5"
                        /> */}
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
      </div>
    </>
  );
};

export default Groups;
