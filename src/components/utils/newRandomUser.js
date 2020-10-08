const randomStringGenerator = () => (Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
const randomEmailGenerator = () => {
  const emailFirstSection = randomStringGenerator();
  const emailSecondSection = randomStringGenerator();
  return `${emailFirstSection}@${emailSecondSection}.com`;
}

export const createRandomUser = (id) => {
  let newName = '';
  let newEmail = randomEmailGenerator();
  for (let i = 0; i < 4; i++) {
    const randomName = randomStringGenerator();
    newName = newName.concat(` ${randomName}`);
  }
  return {
    id: id + 1,
    name: newName,
    age: Math.floor(Math.random() * (45 - 18 + 1)) + 18,
    email: newEmail,
    relocation: true,
    imageURL: "https://picsum.photos/300?random&rnd" + +new Date().getTime(),
    phoneNumber: Math.floor(Math.random() * 10000000000),
  };
}