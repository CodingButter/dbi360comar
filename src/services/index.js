const paramsToObject = (entries) => {
  const result = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
};
export const getUrlParams = ({ search }) => {
  const urlParams = new URLSearchParams(search.slice(1));
  const entries = urlParams.entries();
  return paramsToObject(entries);
};
