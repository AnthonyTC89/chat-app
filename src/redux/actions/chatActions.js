// eslint-disable-next-line
export const setupSocket = () => {
  return dispatch => {
    const socket = new WebSocket('ws://localhost:3000');
    socket.onopen = () => {
      dispatch({
        type: 'SETUP_SOCKET',
        payload: socket,
      });
    };
  };
};
