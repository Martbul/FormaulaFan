// "use client";

// import Image from "next/image";
// import "./Profile.css";
// import images from "@/constants/images";
// import { useAuthContext } from "@/contexts/AuthContext2";

// import { getUserPofileUtil } from "@/utils/getUserId";
// import Post from "@/components/post/Post";
// import { useQuery } from "@tanstack/react-query";
// import type { PostInterface } from "@/utils/interfaces";

// const Profile = () => {
//   const { user } = useAuthContext();

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["profile", user.email],
//     queryFn: () => getUserPofileUtil(user.email as string),
//   });
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-zinc-800">
//         <div className="loader"></div>
//       </div>
//     );
//   }
//   if (isError) {
//     return <div>Error loading data.</div>;
//   }

//   return (
//     <div className="profile-page h-screen bg-[#1e1f22] text-white">
//       <header className="profile-header relative text-center">
//         <div className={`min-h-48 cover-photo bg-[${data?.cover}]`}></div>
//         <div className="profile-info absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 text-center">
//           <Image
//             src={data?.picture}
//             alt="Profile"
//             className="profile-pic mx-auto w-24 h-24 bg-[#2c2c2c] rounded-full"
//             width={50}
//             height={50}
//           />
//           <h1>{data?.username}</h1>
//           <p>{data?.email}</p>
//           <div className="actions space-x-2">
//             <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
//               Add Friend
//             </button>
//             <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
//               Send Message
//             </button>
//           </div>
//           <div className="social-links flex justify-center space-x-2 mt-2">
//             <a href="facebook-url" className="text-white text-2xl">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="twitter-url" className="text-white text-2xl">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="instagram-url" className="text-white text-2xl">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="youtube-url" className="text-white text-2xl">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="twitch-url" className="text-white text-2xl">
//               <i className="fab fa-twitch"></i>
//             </a>
//             <a href="linkedin-url" className="text-white text-2xl">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>
//       </header>

//       <div className="profile-content flex mt-16 p-5 h-[calc(100vh-64px)]">
//         {" "}
//         {/* Adjust 64px to the actual height of your header */}
//         <aside className="profile-sidebar w-1/4 mx-2 space-y-5">
//           <section className="about-me bg-white text-black rounded-lg p-5">
//             <h2>About Me</h2>
//             <p>
//               Hi my name is Marina but some people know me as the
//               GameHuntress...
//             </p>
//             <ul className="list-none p-0">
//               <li>
//                 <strong>Joined:</strong> March 29th, 2017
//               </li>
//               <li>
//                 <strong>Lives:</strong> Los Angeles, California
//               </li>
//               <li>
//                 <strong>Country:</strong> USA
//               </li>
//               <li>
//                 <strong>Website:</strong> www.gamehuntress.com
//               </li>
//             </ul>
//           </section>

//           <section className="badges bg-white text-black rounded-lg p-5">
//             <h2>Badges</h2>
//             <div className="badges-list flex flex-wrap">
//               {/* Add badge images here */}
//             </div>
//           </section>

//           <section className="friends bg-white text-black rounded-lg p-5">
//             <h2>Friends</h2>
//             <ul className="list-none p-0 flex flex-wrap">
//               <li className="mr-2 mb-2">
//                 <Image
//                   src={images.redBull}
//                   alt="Friend 1"
//                   className="w-10 h-10 rounded-md"
//                 />
//               </li>
//               <li className="mr-2 mb-2">
//                 <Image
//                   src={images.ferrari}
//                   alt="Friend 2"
//                   className="w-10 h-10 rounded-md"
//                 />
//               </li>
//               <li className="mr-2 mb-2">
//                 <Image
//                   src={images.mclaren}
//                   alt="Friend 3"
//                   className="w-10 h-10 rounded-md"
//                 />
//               </li>
//               {/* Add more friends */}
//             </ul>
//           </section>
//         </aside>
//         <main className="main-content flex-1 mx-2">
//           <section className="posts h-full overflow-y-auto bg-[#2c2c2c]">
//             <div className="post space-y-5">
//               {data?.posts.map((post: PostInterface, index: number) => (
//                 <Post key={index} post={post} userId={data.id} />
//               ))}
//             </div>
//           </section>
//         </main>
//         <aside className="profile-right-sidebar w-1/4 mx-2 space-y-5">
//           <section className="stream-box bg-white text-black rounded-lg p-5">
//             <h2>Stream Box</h2>
//             <Image src={images.redBull} alt="Post 1" className="w-full" />
//             <p>I'm Playing Athene's Goddess Story...</p>
//           </section>

//           <section className="photos bg-white text-black rounded-lg p-5">
//             <h2>Photos</h2>
//             <div className="photos-list flex flex-wrap">
//               {/* Add photo thumbnails here */}
//             </div>
//           </section>

//           <section className="twitter-feed bg-white text-black rounded-lg p-5">
//             <h2>Twitter Feed</h2>
//             <div className="tweet bg-gray-200 rounded-lg p-3 mb-2">
//               <p>Just posted a photo @ Disneyland</p>
//               <span>2 hours ago</span>
//             </div>
//             {/* Add more tweets */}
//           </section>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Profile;







"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { getUserPofileUtil } from "@/utils/getUserId";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useQuery } from "@tanstack/react-query";
import type { PostInterface } from "@/utils/interfaces";
import Image from "next/image";
import Post from "@/components/post/Post";

export default function Profile() {
   const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile", user.email],
    queryFn: () => getUserPofileUtil(user.email as string),
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
  return (
    <div className="flex flex-col lg:flex-row bg-[#1e1f22] text-white w-full h-screen md:overflow-y-auto sm:overflow-y-auto no-scrollbar">
      <aside className="bg-neutral-800 rounded-xl p-6 flex flex-col items-center lg:w-1/4 lg:mr-4 lg:mb-0 mb-4 lg:mb-0">
        <Avatar className="w-24 h-24">
          {/* <AvatarImage src="/placeholder-user.jpg" alt="@user" /> */}
          <Image
            src={data?.picture}
            alt="Profile"
            className="profile-pic mx-auto w-24 h-24 bg-[#2c2c2c] rounded-full"
            width={50}
            height={50}
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="text-center mt-4">
          <h3 className="text-xl font-bold">{data?.username}</h3>
          <p className="text-muted-foreground">{data?.bio}</p>
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-2xl font-bold">
              {data?.followedBy.length}{" "}
              <span className="text-sm text-muted-foreground">Followers</span>
            </div>
            <div className="text-2xl font-bold">
              {data?.following.length}{" "}
              <span className="text-sm text-muted-foreground">Following</span>
            </div>
            <div className="text-2xl font-bold">
              3.4K <span className="text-sm text-muted-foreground">Likes</span>
            </div>
            <div className="text-2xl font-bold">
                 {data?.posts.length}{" "} <span className="text-sm text-muted-foreground">Posts</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button  className="flex-1 bg-zinc-900 hover:bg-zinc-800">
             Follow
            </Button>
            <Button className="flex-1 bg-zinc-900 hover:bg-zinc-800">
              Send Message
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 lg:flex lg:flex-col lg:gap-4 p-4 lg:p-6">
        <div className="flex gap-4 mb-4">
          <Button variant="ghost" className="flex-1">
            Posts
          </Button>
          <Button variant="ghost" className="flex-1">
            Liked
          </Button>
          <Button variant="ghost" className="flex-1">
            Favorites
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="grid gap-6">
             {data?.posts.map((post: PostInterface, index: number) => (
                <Post key={index} post={post} userId={data.id} />
              ))}
           
          </div>
        </ScrollArea>
      </main>

      <aside className="bg-neutral-900 rounded-lg p-6 lg:w-1/4 lg:ml-4 lg:mb-0 mb-4 h-[600px] lg:h-screen overflow-auto no-scrollbar">
        <h3 className="text-xl font-bold mb-4">Groups</h3>
        <div className="grid gap-4 mb-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Design Collective</h4>
                <p className="text-sm text-muted-foreground">120 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A group for designers to share ideas and collaborate on
                projects.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Tech Enthusiasts</h4>
                <p className="text-sm text-muted-foreground">350 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A community for tech lovers to discuss the latest trends and
                innovations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Book Club</h4>
                <p className="text-sm text-muted-foreground">80 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A group for book enthusiasts to discuss and share their favorite
                reads.
              </p>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4">Chats</h3>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Design Team</h4>
                <p className="text-sm text-muted-foreground">12 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A chat for the design team to discuss projects and share ideas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Marketing Team</h4>
                <p className="text-sm text-muted-foreground">20 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A chat for the marketing team to discuss campaigns and
                strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  );

}
