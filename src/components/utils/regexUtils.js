const createRegex = letter => (new RegExp(letter, 'gi'));

export const letterSearcher = (letters, word) => {
  let characterFound = false;
  letters.forEach(letter => {
    let regex = createRegex(letter);
    if (regex.test(word)) {
      characterFound = true;
    };
  });
  return characterFound
};

export const letterRemover = (letters, word) => {
  let str = word;
  letters.forEach(letter => {
    let regex = createRegex(letter);
    str = str.replace(regex, '');
  })
  return str;
};
