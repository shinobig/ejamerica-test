export const validatePhone = (phone) => {
  let validPhone = true;
  let phoneErrors = [];
  const invalidPhone = () => (validPhone = false);

  if (!phone) {
    phoneErrors.push('Please add a 10 digit phone number');
    invalidPhone();
    return {
      validPhone,
      phoneErrors,
    }
  }

  if(phone.toString().length < 10){
    phoneErrors.push('Please add a 10 digit phone number');
    invalidPhone();
    return {
      validPhone,
      phoneErrors,
    }
  }

  return {
    validPhone,
    phoneErrors,
  }

}
