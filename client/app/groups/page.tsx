'use client'
import "./Groups.css";
import Navigation from "../../components/navigation/Navigation";

import CreatePost from "../../components/createPost/CreatePost";
import images from "../../constants/images";
import MiniPost from "../../components/miniPost/MiniPost";
import Link from "next/link";
import Image from "next/image";
import { createGroup } from "@/services/group/group.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from 'next/navigation'
import { useState } from "react";

const Groups = () => {

const { user } = useAuthContext();
const router = useRouter()

const [error, setError] = useState(null);

  const handleCreateGroup = async () => {
    const result = await createGroup(user.username, user.email)
    if(!result) {
      setError(result)
    }

  
       router.push(`/chat/group/${result.id}`)
  }

  return (
    <>
      <div className="layout">
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
                <div className="addGroup">
                  <button className="groupBtn addBtn">Add</button>
                </div>
                <div className="createGroup">
                  <button className="groupBtn createBtn" onClick={handleCreateGroup}> Create</button>
                </div>
              </div>
            </div>

            <div className="taskContainer">
              <div className="searchOperations">
                <input
                  type="text"
                  placeholder="Find Task"
                  className="searchInput"
                />
                <select className="moduleSelect">
                  <option value="all">Module: All</option>
                </select>
                <select className="sortSelect">
                  <option value="default">Sort by:</option>
                </select>
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

            <div className="searchChatResults">
              <div className="resultContainer">
                <Link className="chatView" href="/group1">
                  <div className="media">
                    <Image src={images.redBull} alt="" />
                  </div>
                  <div className="text">
                    <div className="chatName">
                      <p>Redbull 1</p>
                    </div>
                    <div className="participats">
                      <p>Participants: 234</p>
                    </div>
                  </div>
                </Link>

                <div className="chatView">
                  <div className="media">
                    <Image src={images.redBull} alt="" />
                  </div>
                  <div className="text">
                    <div className="chatName">
                      <p>Redbull 1</p>
                    </div>
                    <div className="participats">
                      <p>Participants: 234</p>
                    </div>
                  </div>
                </div>
                <div className="chatView">
                  <div className="media">
                    <Image src={images.redBull} alt="" />
                  </div>
                  <div className="text">
                    <div className="chatName">
                      <p>Redbull 1</p>
                    </div>
                    <div className="participats">
                      <p>Participants: 234</p>
                    </div>
                  </div>
                </div>
                <div className="chatView">
                  <div className="media">
                    <Image src={images.redBull} alt="" />
                  </div>
                  <div className="text">
                    <div className="chatName">
                      <p>Redbull 1</p>
                    </div>
                    <div className="participats">
                      <p>Participants: 234</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
