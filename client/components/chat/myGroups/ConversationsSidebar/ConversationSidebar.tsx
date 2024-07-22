export const ConversationsSidebar = ({userConversatinos}) => {
   const { user } = useAuthContext();
//! вместо от бакенда да даваш arr от conversations направи всички преубразувания в бакенда и от там върни готов arr-еят  и само го дисплейни тук
   useEffect(() =>{
      const conversationUsersArr = [];
      userConversatinos.forEach((conversation) => {
         if(conversation.userOne.id)
      })
   }, [userConversatinos])

  return (
    <div className="bg-neutral-900">
      <div className="w-52 bg-zinc-950 p-2.5 border-b-2 border-black hover:bg-gray-600">
        <div className="p-1.5 text-gray-400 cursor-pointer">
          Conversations
        </div>
      </div>
      <div className="rigthSide">
        {/* {channels && (
          <ChannelsList
            channels={channels}
            groupId={groupId}
            setSelectedChatChannelId={setSelectedChatChannelId}
            selectedChatChannelId={selectedChatChannelId}
          />
        )}
        {members && <MembersList members={members} />} */}
        {userConversatinos && (

        )}
        
      </div>
    </div>
  );
};
