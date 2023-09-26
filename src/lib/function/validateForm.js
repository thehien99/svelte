export function validatePhoneNumber(number) {
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return regex.test(number);
}