'use client'

import { useEffect, useState } from 'react';
import { PostsMenu } from '@/components/posts/postsMenu/PostsMenu';
import Post from '@/components/post/Post';

import { getAllPosts } from '@/services/post/post.service';

import Image from 'next/image';
import images from '@/constants/images';

import './Posts.css'


const Posts = () => {
  const [posts ,setPosts] = useState([])

  useEffect(() =>{
    const fetchAllPosts = async() => {
      const allPost = await getAllPosts()
      console.log('all',allPost);
      
      setPosts(allPost)
    }
    fetchAllPosts()
  }, [])
    
   return (
     <>
       <div className="layout">
        

         <div className="posts">
           <PostsMenu  />
           <div className="feedContainer">
            {posts.map((post, index) =>(
              <Post key={index} post={post}/>
            ))}
           </div>
         </div>

         <div className="news">
           <div className="searchContainer">
             {/* Example of a news item */}
             <div className="newsItem">
               <div className="newsImage">
                 <Image src={images.madridNews} alt="News" />
                 <div className="newsTextOverlay">
                   <h3 className="newsTitle">News Title</h3>
                   <p className="newsTimestamp">Timestamp</p>
                   <p className="newsCreator">Creator</p>
                 </div>
               </div>
             </div>
             <div className="newsItem">
               <div className="newsImage">
                 <Image src={images.f1RaceCalendar} alt="News" />
                 <div className="newsTextOverlay">
                   <h3 className="newsTitle">News Title</h3>
                   <p className="newsTimestamp">Timestamp</p>
                   <p className="newsCreator">Creator</p>
                 </div>
               </div>
             </div>
             <div className="newsItem">
               <div className="newsImage">
                 <Image src={images.crashLanceStroll} alt="News" />
                 <div className="newsTextOverlay">
                   <h3 className="newsTitle">News Title</h3>
                   <p className="newsTimestamp">Timestamp</p>
                   <p className="newsCreator">Creator</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
}
 
export default Posts;