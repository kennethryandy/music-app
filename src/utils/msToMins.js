export const msToMins = (ms) => {
  const mins = Math.floor(ms / 60000);
  const sec = ((ms % 60000) / 1000).toFixed(0);
  return mins + ":" + (sec < 10 ? "0" : "") + sec;
};
