import './MembersList.css'

export const MembersList = () => {
  return (
    <>
      <div className="rigthSide">
        <div className="text-channels">
          <div className="text-channels-header">CHAT</div>
          <div className="textChannel">
            <p>TextChannel1</p>
          </div>
          <div className="textChannel">
            <p>TextChannel2</p>
          </div>
          <div className="textChannel">
            <p>TextChannel3</p>
          </div>
        </div>
        <div className="voice-channels">
          <div className="voice-channels-header">VOICE CAHNNELS</div>
          <div className="voiceChannel">
            <p>voiceChannel1</p>
          </div>
          <div className="voiceChannel">
            <p>voiceChannel2</p>
          </div>
          <div className="voiceChannel">
            <p>voiceChannel3</p>
          </div>
        </div>
        <div className="members-list">
          <div className="member">User1</div>
          <div className="member">User2</div>
          <div className="member">User3</div>
        </div>
      </div>
    </>
  );
};