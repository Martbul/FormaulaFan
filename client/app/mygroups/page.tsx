import Image from 'next/image';
import './MyGroups.css'

const Group = ({ name, description }) => (
  <div className="group">
    <div className="groupImage">
      {/* <Image src={image} alt={`${name}`} /> */}
    </div>
    <div className="groupInfo">
      <h3 className="groupName">{name}</h3>
      <p className="groupDescription">{description}</p>
    </div>
  </div>
);

const MyGroups = () => {
  return (
    <>
      <div className="myGroups">
        <h1 className="title">My Groups</h1>
        <div className="groupsContainer">
          {/* Example group items */}
          <Group
            name="React Enthusiasts"
            description="A group for people who love React.js and building awesome UIs."
            image="path-to-your-image1.jpg"
          />
          <Group
            name="Node.js Developers"
            description="Discuss everything about Node.js, from back-end development to deploying."
            image="path-to-your-image2.jpg"
          />
          <Group
            name="UI/UX Designers"
            description="Share your designs and get feedback from fellow designers."
            image="path-to-your-image3.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default MyGroups;