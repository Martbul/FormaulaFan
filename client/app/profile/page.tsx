import Image from 'next/image';
import icons from '../../constants/icons';
import images from '../../constants/images';
import './Profile.css'

const Profile = () => {
    return (
      <div className="profile-page">
        <header className="profile-header">
          <div className="cover-photo">
            <Image src={images.f1Start} alt="Cover" />
          </div>
          <div className="profile-info">
            <Image src={icons.profile} alt="Profile" className="profile-pic" />
            <h1>Marina Valentine</h1>
            <p>www.gamehuntress.com</p>
            <div className="actions">
              <button>Add Friend</button>
              <button>Send Message</button>
            </div>
            <div className="social-links">
              <a href="facebook-url">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="twitter-url">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="instagram-url">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="youtube-url">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="twitch-url">
                <i className="fab fa-twitch"></i>
              </a>
              <a href="linkedin-url">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </header>

        <div className="profile-content">
          <aside className="profile-sidebar">
            <section className="about-me">
              <h2>About Me</h2>
              <p>
                Hi my name is Marina but some people know me as the
                GameHuntress...
              </p>
              <ul>
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

            <section className="badges">
              <h2>Badges</h2>
              <div className="badges-list">{/* Add badge images here */}</div>
            </section>

            <section className="friends">
              <h2>Friends</h2>
              <ul>
                <li>
                  <Image src={images.redBull} alt="Friend 1" />
                </li>
                <li>
                  <Image src={images.ferrari} alt="Friend 2" />
                </li>
                <li>
                  <Image src={images.mclaren} alt="Friend 3" />
                </li>
                {/* Add more friends */}
              </ul>
            </section>
          </aside>

          <main className="main-content">
            <section className="posts">
              <div className="post">
                <p>
                  Hi all! Remember that today I'll be livestreaming along with
                  @ValentineRose...
                </p>
                 <Image src={images.redBull} alt="Post 1" />
                <div className="post-actions">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Share</button>
                </div>
              </div>
              <div className="post">
                <p>
                  Hi all! I’ve been officially made a game streaming partner for
                  @twitch!...{" "}
                </p>
                
                 <Image src={images.redBull} alt="Post 1" />
                <div className="post-actions">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Share</button>
                </div>
              </div>
              {/* Add more posts */}
            </section>
          </main>

          <aside className="profile-right-sidebar">
            <section className="stream-box">
              <h2>Stream Box</h2>
           
                 <Image src={images.redBull} alt="Post 1" />
              <p>I'm Playing Athene's Goddess Story...</p>
            </section>

            <section className="photos">
              <h2>Photos</h2>
              <div className="photos-list">
                {/* Add photo thumbnails here */}
              </div>
            </section>

            <section className="twitter-feed">
              <h2>Twitter Feed</h2>
              <div className="tweet">
                <p>Just posted a photo @ Disneyland</p>
                <span>2 hours ago</span>
              </div>
              {/* Add more tweets */}
            </section>
          </aside>
        </div>
      </div>
    );

}
 
export default Profile;