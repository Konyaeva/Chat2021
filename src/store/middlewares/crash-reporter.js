export const crashReporter = () => (next) => (action) => {
  try {
    return next(action);
  } catch (e) {
    console.error("report:", e, action);
  }
};
