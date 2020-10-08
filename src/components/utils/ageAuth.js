export const validateAge = (age) => {
  let validAge = true;
  let ageError = '';
  if (age < 18 || age > 45) {
    validAge = false;
    ageError = 'Age must be between 18 or 45';
  }
  return {
    validAge,
    ageError
  }
}