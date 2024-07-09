import './Home.css'
import Navigation from '../../components/navigation/Navigation';

const Home = () => {
   return (
     <>
       <div className="layout">
         <div className="left">
           <Navigation />
         </div>

         <div className="main">
           <div className="feedContainer">
           
           </div>
         </div>

         <div className="feed">
           <div className="searchContainer">
          
           </div>
         </div>
       </div>
     </>
   );
}
 
export default Home;