export interface User {
  id: string;
  username: string;
  email: string;
  picture: string;
  createdGroups: Group[];
  members: Member[];
  conversationsInitiated: Conversation[];
  conversationsReceived: Conversation[];
}

export interface Conversation {
  id: string;
  directMessages: DirectMessage[];
  userOne: User;
  userTwo: User;
}

export interface DirectMessage {
  id: string;
  content: string;
  fileUrl?: string; 
  deleted: boolean;
  user: User;
  conversation: Conversation;
  createdAt: Date;
  updatedAt: Date;
}

export interface Member {
  id: string;
  role: string;
  user: User;
  group: Group;
  createdAt: Date;
  updatedAt: Date;
}

export interface Channel {
  id: string;
  name: string;
  type: 'TEXT' | 'VOICE';
  isPrivate: boolean;
  messages?: Message[];
  member: Member;
  group: Group;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
   id: string;
   content: string;
   fileUrl?: string;
   deleted: boolean;
   member: Member;
   channel: Channel;
   createdAt: Date;
   updatedAt: Date;
}

export interface Creator extends User{

}

export interface Group {
  id: string;
  name: string;
  imageUrl: string;
  creator: Creator;
  members: Member[];
  channels: Channel[];
}

export interface PostInterface {
  id: string;
  textContent: string;
  imageContentUrl?: string;
  videoContent?: string;
  author: User;
  likes: number;
  comments?: Comment[];
  shares: number;
  views: number;
  saves: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  textContent: string;
  imageContentUrl?: string;
  videoContent?: string;
  author: User;
  post: PostInterface;
  likes: number;
  shares: number;
  views: number;
  saves: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DirectChatAreaProps {
  conversationData: Conversation;
  recipientUser: User;
  currentUser: User;
}

export interface GroupProps {
  params: {
    groupId: string;
  };
};
export interface ChatPageProps {
  params: {
    conversationId: string;
  };
};

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  transformOrigin?: string; 
  
}

interface SidebarLayoutProps {
  children: React.ReactNode;
  params: { groupId: string };
}