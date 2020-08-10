const defaultChat = [];

const chat = (state = defaultChat, { type, message }) => {
  switch (type) {
    case 'UPDATE_CHAT':
      return [...state, message];
    default:
      return state;
  }
};

export default chat;
