export const generateUser = (start = 0, count = 1) => {
  return [...Array(count).keys()].map((item) => ({
    id: item + 1 + start,
    isLoaded: false,
  }));
};
export const initialUserData = (prev, data) => {
  return prev.map((item, i) => ({ ...data[i], ...item, isLoaded: true }));
};
export const newUserData = (prev, data, selectId) => {
  return prev.map((item) => {
    //selectId plus one and two because load next card
    if (item.id === selectId + 2)
      return { ...data[0], ...item, isLoaded: true };
    if (item.id === selectId + 1)
      return { ...data[1], ...item, isLoaded: true };
    return item;
  });
};
export const generateRandomJob = () => {
  const jobs = [
    "Frontend Developer",
    "Backend developer",
    "Designer",
    "Product Manager",
    "Devops Developer",
    "Mobile Developer",
  ];
  const randomIndex = Math.floor(Math.random() * jobs.length);
  return jobs[randomIndex];
};
