export const setupSocket = () => (dispatch) => {
  const socket = new WebSocket('ws://localhost:8080');
  socket.onopen = () => {
    dispatch({
      type: 'SETUP_SOCKET',
      payload: socket,
    });
  };
};
