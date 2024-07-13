import Navigation from '../../components/navigation/Navigation';

import './Posts.css'
import Post from '../../components/post/Post';
import images from '../../constants/images';
import Image from 'next/image';

const Posts = () => {
   return (
     <>
       <div className="layout">
         <div className="left">
           <Navigation />
         </div>

         <div className="posts">
           <div className="other-groups">
             <p>Your Other Groups:</p>
             <div className="group-logo">
               <span>Group 1</span>
             </div>
             <div className="group-logo">
               <span>Group 2</span>
             </div>
            //! buttins for wrinting a post, search and so on
           </div>
           <div className="feedContainer">
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
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