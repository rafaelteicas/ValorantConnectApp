import {messageAdapter} from './messageAdapter';
import {messageApi} from './messageAPI';
import {Conversation, Message, MessagePathAPI} from './messageTypes';

async function sendMessage(data: Message) {
  await messageApi.sendMessage(data);
}

async function getMessage(path: MessagePathAPI): Promise<any> {
  const response = await messageApi.getMessage(path);
  return response.map(messageAdapter.toMessage);
}

async function getConversations(id: string): Promise<Conversation[]> {
  const response = await messageApi.getConversations(id);
  return response;
}

async function getConversation(path: string): Promise<any> {
  const response = await messageApi.getConversation(path);
  return response.map(messageAdapter.toMessage);
}

async function setConversation(path: any): Promise<void> {
  await messageApi.setConversation(path);
}

export const messageService = {
  sendMessage,
  getMessage,
  getConversations,
  getConversation,
  setConversation,
};
