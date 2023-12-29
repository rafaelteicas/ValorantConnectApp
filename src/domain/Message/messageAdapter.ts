import {MessageAPI, MessageResponse} from './messageTypes';

function toMessage(messageApi: MessageAPI): MessageResponse {
  return {
    message: messageApi.data.message,
    userId: messageApi.data.userId,
  };
}

export const messageAdapter = {
  toMessage,
};
