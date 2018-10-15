const regExpForEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validate = (name, value) => {
  switch (name) {
    case 'firstName':
    case 'lastName':
      return (value.length >= 2);
    case 'email':
      return regExpForEmail.test(value);
    case 'password':
    case 'password2':
      return (value.length >= 6);
    default:
      return;
  }
};

export default validate;
