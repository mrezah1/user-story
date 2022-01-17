const baseUrl = "https://randomuser.me/api";
export const getMultiUser = async (count = 1) => {
  const res = await fetch(`${baseUrl}/?results=${count}`);
  const { results } = await res.json();
  return results;
};
export const getUser = async () => {
  const res = await fetch(`${baseUrl}`);
  const { results } = await res.json();
  return results;
};
