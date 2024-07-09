import Image from 'next/image';
import Navigation from '../../components/navigation/Navigation';
import icons from '../../constants/icons';
import './Settings.css'


const Settings = () => {
   return (
      <>
          <div className="layout">
         <div className="left">
           <Navigation />
         </div>
            <div>
               
</div>
       <div className="settings">
         <h1>Settings</h1>
         <div className="settings-section">
           <h2>Account</h2>
           <div className="settings-item">
             <Image src={icons.profile} alt="Profile" className="settings-icon" />
             <div className="settings-details">
               <p className="settings-title">Profile</p>
               <p className="settings-description">
                 Update your profile information
               </p>
             </div>
             <button className="settings-button">Edit</button>
           </div>
           <div className="settings-item">
             <Image
               src={icons.settings}
               alt="Privacy"
               className="settings-icon"
             />
             <div className="settings-details">
               <p className="settings-title">Privacy</p>
               <p className="settings-description">
                 Manage your privacy settings
               </p>
             </div>
             <button className="settings-button">Edit</button>
           </div>
         </div>

         <div className="settings-section">
           <h2>Notifications</h2>
           <div className="settings-item">
             <Image
               src={icons.bell}
               alt="Notifications"
               className="settings-icon"
             />
             <div className="settings-details">
               <p className="settings-title">Notifications</p>
               <p className="settings-description">
                 Customize your notifications
               </p>
             </div>
             <button className="settings-button">Edit</button>
           </div>
         </div>

         <div className="settings-section">
           <h2>Security</h2>
           <div className="settings-item">
             <Image src={icons.unlock} alt="Password" className="settings-icon" />
             <div className="settings-details">
               <p className="settings-title">Password</p>
               <p className="settings-description">Change your password</p>
             </div>
             <button className="settings-button">Edit</button>
           </div>
           <div className="settings-item">
             <Image
               src={icons.security}
               alt="Two-Factor Authentication"
               className="settings-icon"
             />
             <div className="settings-details">
               <p className="settings-title">Two-Factor Authentication</p>
               <p className="settings-description">
                 Enable or disable two-factor authentication
               </p>
             </div>
             <button className="settings-button">Edit</button>
           </div>
               </div>
               
               </div>
               
       </div>
     </>
   );
};

export default Settings;