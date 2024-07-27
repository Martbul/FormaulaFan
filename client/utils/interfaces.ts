export interface User {
  id: string; // Unique identifier for the user
  username: string; // Username of the user
  password: string; // Password of the user (consider security implications of exposing this field)
  email: string; // Email of the user
  picture?: string; // Optional profile picture URL of the user
  cover: string;
  bio?: string;
  status?: string;
  hashedRefreshToken?: string; // Optional hashed refresh token for session management
  createdAt: Date; // Timestamp when the user was created
  updatedAt: Date; // Timestamp when the user was last updated
  posts: PostInterface[]; // List of posts created by the user
  likedPosts: PostInterface[]; // List of posts liked by the user
  comments: Comment[]; // List of comments made by the user
  sharedPosts: PostInterface[]; // List of posts shared by the user
  savedPosts: PostInterface[]; // List of posts saved by the user
  conversationsInitiated: Conversation[]; // Conversations initiated by the user
  conversationsReceived: Conversation[]; // Conversations received by the user
  directMessages: DirectMessage[]; // Direct messages associated with the user
  settings?: UserSettings; // Optional user settings
  createdGroups: Group[]; // Groups created by the user
  members: Member[]; // List of members associated with the user
}

export interface Conversation {
  id: string;
  directMessages: DirectMessage[];
  userOne: User;
  userTwo: User;
}

export interface UserSettings {
  id: string; // Unique identifier for the user settings
  theme: string; // User's theme preference (e.g., 'NORMAL')
  notifications: boolean; // Whether notifications are enabled
  userId: string; // Foreign key linking to the user
  user: User; // The user associated with these settings
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
  type: "TEXT" | "VOICE";
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

export interface Creator extends User {}

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
  likedBy?: User[];
  comments?: Comment[];
  sharedBy?: User[];
  savedBy?: User[];
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
}
export interface ChatPageProps {
  params: {
    conversationId: string;
  };
}

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  transformOrigin?: string;
}

interface SidebarLayoutProps {
  children: React.ReactNode;
  params: { groupId: string };
}
