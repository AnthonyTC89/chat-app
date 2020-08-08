const defaultSession = {
  token: '',
  isLoggedIn: false,
};

const session = (state = defaultSession, { type, token }) => {
  switch (type) {
    case 'UPDATE_SESSION':
      if (token === null) {
        return defaultSession;
      }
      return { token, isLoggedIn: true };
    default:
      return state;
  }
};

export default session;
