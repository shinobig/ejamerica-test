import { letterSearcher } from './regexUtils';

export const validateEmail = (email) => {
  let validEmail = true;
  let emailErrors = [];
  const invalidEmail = () => (validEmail = false);
  
  if (!email) {
    emailErrors.push('Please use a valid email format');
    invalidEmail();
    return {
      emailErrors,
      validEmail
    }
  }

  let emailToEdit = email.slice();


  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(email).toLowerCase())) {
    emailErrors.push('Please use a valid email format');
    invalidEmail();
    return {
      emailErrors,
      validEmail
    }
  }


  const emailArr = emailToEdit.split('@');
  const emailArrSecond = emailArr[1].split('.');;




  if (emailArr[0].length < 4 || emailArr[0].length > 20) {
    emailErrors.push('Before @, please enter only 4 to 20 characters')
    invalidEmail();
    return {
      emailErrors,
      validEmail
    }
  }

  if (letterSearcher(["\\.", "\\-", "\\_", "\\+"], emailArrSecond[0])) {
    emailErrors.push(`Please do not include ".", "-", "_", "+" after @.`);
    invalidEmail();
    return {
      emailErrors,
      validEmail
    }
  }

  if (emailArrSecond[0].length < 5 || emailArrSecond[0].length > 10) {
    emailErrors.push(`After "@" and before "." (com, net, mx) there should be 5 to 10 characteres.`);
    invalidEmail();
    return {
      emailErrors,
      validEmail
    }
  }

  if (emailArrSecond[1].length < 2 || emailArrSecond[1].length > 3) {
    emailErrors.push(`After "." use only 2 to 3 characteres.`);
    invalidEmail();
    return {
      emailErrors,
      validEmail
    }
  }

  return {
    emailErrors,
    validEmail
  }
}
