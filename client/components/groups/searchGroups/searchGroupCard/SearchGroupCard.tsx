import Image from "next/image";
import Link from "next/link";
import "./SearchGroupCard.css";

export default function SearchGroupCard({id, imageUrl,groupName,members}){
   return (
     <Link className="chatView" href={`/chat/mygroup/${id}`}>
       <div className="media">
         {/* <Image
           src={imageUrl}
           alt=""
           width={100} 
           height={100}
         /> */}
       </div>
       <div className="text">
         <div className="chatName">
           <p>{groupName}</p>
         </div>
         <div className="participats">
           <p>{members.length}</p>
         </div>
       </div>
     </Link>
   );
}