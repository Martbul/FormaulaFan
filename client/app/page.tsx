import Navigation from '../components/navigation/Navigation';

export default function Home() {
  return (
    

    <div className="layout">
      <div className="left">
        <Navigation />
      </div>

      <div className="main">
        <div className="feedContainer"></div>
      </div>

      <div className="feed">
        <div className="searchContainer"></div>
      </div>
    </div>
  );
}
