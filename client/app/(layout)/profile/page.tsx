"use client";

import Image from "next/image";
import "./Profile.css";
import images from "@/constants/images";
import { useAuthContext } from "@/contexts/AuthContext2";

import { getUserPofileUtil } from "@/utils/getUserId";
import Post from "@/components/post/Post";
import { useQuery } from "@tanstack/react-query";


const Profile = () => {
  const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile", user.email],
    queryFn: () => getUserPofileUtil(user.email)
  });
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-zinc-800">
     <div className="loader"></div>
   </div>
  }
  if (isError) {
   return <div>Error loading data.</div>;
 }

  return (
    <div className="profile-page h-screen bg-[#1e1f22] text-white">
      <header className="profile-header relative text-center">
<div className={`min-h-48 cover-photo bg-[${data?.cover}]`}>         
          
        </div>
        <div className="profile-info absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 text-center">
          <Image
            src={data?.picture}
            alt="Profile"
            className="profile-pic mx-auto w-24 h-24 bg-[#2c2c2c] rounded-full"
            width={50}
            height={50}
          />
          <h1>{data?.username}</h1>
          <p>{data?.email}</p>
          <div className="actions space-x-2">
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
              Add Friend
            </button>
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
              Send Message
            </button>
          </div>
          <div className="social-links flex justify-center space-x-2 mt-2">
            <a href="facebook-url" className="text-white text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="twitter-url" className="text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="instagram-url" className="text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="youtube-url" className="text-white text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="twitch-url" className="text-white text-2xl">
              <i className="fab fa-twitch"></i>
            </a>
            <a href="linkedin-url" className="text-white text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </header>

      <div className="profile-content flex mt-16 p-5 h-[calc(100vh-64px)]">
        {" "}
        {/* Adjust 64px to the actual height of your header */}
        <aside className="profile-sidebar w-1/4 mx-2 space-y-5">
          <section className="about-me bg-white text-black rounded-lg p-5">
            <h2>About Me</h2>
            <p>
              Hi my name is Marina but some people know me as the
              GameHuntress...
            </p>
            <ul className="list-none p-0">
              <li>
                <strong>Joined:</strong> March 29th, 2017
              </li>
              <li>
                <strong>Lives:</strong> Los Angeles, California
              </li>
              <li>
                <strong>Country:</strong> USA
              </li>
              <li>
                <strong>Website:</strong> www.gamehuntress.com
              </li>
            </ul>
          </section>

          <section className="badges bg-white text-black rounded-lg p-5">
            <h2>Badges</h2>
            <div className="badges-list flex flex-wrap">
              {/* Add badge images here */}
            </div>
          </section>

          <section className="friends bg-white text-black rounded-lg p-5">
            <h2>Friends</h2>
            <ul className="list-none p-0 flex flex-wrap">
              <li className="mr-2 mb-2">
                <Image
                  src={images.redBull}
                  alt="Friend 1"
                  className="w-10 h-10 rounded-md"
                />
              </li>
              <li className="mr-2 mb-2">
                <Image
                  src={images.ferrari}
                  alt="Friend 2"
                  className="w-10 h-10 rounded-md"
                />
              </li>
              <li className="mr-2 mb-2">
                <Image
                  src={images.mclaren}
                  alt="Friend 3"
                  className="w-10 h-10 rounded-md"
                />
              </li>
              {/* Add more friends */}
            </ul>
          </section>
        </aside>
        <main className="main-content flex-1 mx-2">
          <section className="posts h-full overflow-y-auto bg-[#2c2c2c]">
            <div className="post space-y-5">
              {data?.posts.map((post, index) => (
                <Post key={index} post={post} userId={data.id} />
              ))}
            </div>
          </section>
        </main>
        <aside className="profile-right-sidebar w-1/4 mx-2 space-y-5">
          <section className="stream-box bg-white text-black rounded-lg p-5">
            <h2>Stream Box</h2>
            <Image src={images.redBull} alt="Post 1" className="w-full" />
            <p>I'm Playing Athene's Goddess Story...</p>
          </section>

          <section className="photos bg-white text-black rounded-lg p-5">
            <h2>Photos</h2>
            <div className="photos-list flex flex-wrap">
              {/* Add photo thumbnails here */}
            </div>
          </section>

          <section className="twitter-feed bg-white text-black rounded-lg p-5">
            <h2>Twitter Feed</h2>
            <div className="tweet bg-gray-200 rounded-lg p-3 mb-2">
              <p>Just posted a photo @ Disneyland</p>
              <span>2 hours ago</span>
            </div>
            {/* Add more tweets */}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Profile;
