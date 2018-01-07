const capitalize = str => str[0].toUpperCase() + str.slice(1);
const capWords = words =>
  words
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");

export { capitalize, capWords };
