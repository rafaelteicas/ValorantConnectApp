export interface Message {
  data: {
    message: string;
    userId: string;
  };
  path: MessagePathAPI['path'] | string;
}
export interface MessageAPI {
  data: {
    message: string;
    userId: string;
  };
  timestamp: {nanoseconds: number; seconds: number};
}

export interface MessagePathAPI {
  path: {
    userId: string;
    postId: string;
    authorId: string;
  };
}

export interface MessageResponse {
  message: string;
  userId: string;
}

export interface ConversationAPI {
  id: number;
  path: string;
  from: number;
}

export interface Conversation {
  id: number;
  path: string;
  from: number;
}
