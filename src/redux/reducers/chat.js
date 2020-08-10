const defaultChat = [];

const chat = (state = defaultChat, { type, message }) => {
  switch (type) {
    case 'UPDATE_CHAT':
      if (message === null) {
        return defaultChat;
      }
      return [...state, message];
    default:
      return state;
  }
};

export default chat;
