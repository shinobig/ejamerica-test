
const createRegex = letter => (new RegExp(letter, 'gi'));

const letterSearcher = (letters, word) => {
  let characterFound = false;
  letters.forEach(letter => {
    let regex = createRegex(letter);
    if (regex.test(word)) {
      characterFound = true;
    };
  })
  return characterFound
}

const letterRemover = (letters, word) => {
  let str = word;
  letters.forEach(letter => {
    let regex = createRegex(letter);
    str = str.replace(regex, '');
  })
  return str;
}

export const validateName = (name) => {
  let validName = true;
  let nameErrors = [];

  const invalidName = () => (validName = false);
  const nameArr = name.split(" ");
  if (nameArr.length < 4) {
    nameErrors.push('Name must be composed by 4 words.');
    invalidName();
    return {
      validName,
      nameErrors
    }
  }

  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i].length < 3 || nameArr[i].length > 5) {
      console.log(nameArr[i]);
      nameErrors.push('Each name must be between 3 and 5 characters.');
      invalidName();
      return {
        validName,
        nameErrors
      }
    }
  }

  if (letterSearcher(['a', 'o', 'u', 'm', 'p'], nameArr[0])) {
    nameErrors.push('First name cannot have “a, o, u, m, p”.');
    invalidName();

    return {
      validName,
      nameErrors
    }
  }

  if (letterRemover(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'o', 'p', 'u', 'y', 't', 'e', 'm'], nameArr[1]).length > 0) {
    nameErrors.push('Seccond word can only use these letters “asdfghjklopuytem”.')
    invalidName();

    return {
      validName,
      nameErrors
    }
  }

  if (letterSearcher(['a', 'e', 'o', 'u'], nameArr[2]) || letterSearcher(['[0-9]'], nameArr[2]) === false) {
    nameErrors.push('Third name cannot have “a,e,o,u” and should include at least 1 number.');
    invalidName();

    return {
      validName,
      nameErrors
    }
  }

  if (nameArr[3].indexOf('t') === -1) {
    nameErrors.push('fourth name should have at least 1 letter “t” lowercase.')
    invalidName();

    return {
      validName,
      nameErrors
    }
  }

  return {
    validName,
    nameErrors
  }
}
