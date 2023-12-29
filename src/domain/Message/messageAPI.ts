import {api} from '@api';

import {
  ConversationAPI,
  Message,
  MessageAPI,
  MessagePathAPI,
} from './messageTypes';

async function sendMessage(data: Message): Promise<void> {
  await api.post('/message', data);
}

async function getMessage(path: MessagePathAPI): Promise<MessageAPI[]> {
  const response = await api.get('/message', {params: path.path});
  return response.data.data;
}

async function getConversations(id: string): Promise<ConversationAPI[]> {
  const response = await api.get(`/conversation/${id}`);
  return response.data.posts;
}

async function getConversation(path: string): Promise<MessageAPI[]> {
  const response = await api.get('/conversation', {
    params: {
      path: path,
    },
  });

  return response.data.data;
}

async function setConversation(path: any): Promise<void> {
  await api.post('/conversation', path);
}

export const messageApi = {
  sendMessage,
  getMessage,
  getConversations,
  getConversation,
  setConversation,
};
