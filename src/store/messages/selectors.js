export const messageSelector = (roomId) => (state) => {
  return state.messages.messages[roomId] ?? [];
};
