const getRandomInt = (min, max) => {
  const random = min + Math.random() * (max - min + 1);
  return Math.floor(random);
};

export default getRandomInt;
