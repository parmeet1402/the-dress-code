export const validateName = (name) => {
  if (name === "") {
    return "Please Enter a Name";
  }
  if (name.length < 4) {
    return "Name must be at least 3 characters long";
  }
  //regex for full name

  const regex = /^[a-z A-Z]{3,50}$/;
  if (!regex.test(name)) {
    return "Please keep it simple without special characters or numbers";
  }
  return "";
};

export const validateEmail = (email) => {
  if (email === "") {
    return "Please Enter an Email ID";
  }
  //regex for email
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (email.length < 5 || !regex.test(email)) {
    return "Please Enter Correct Email ID";
  }
  return "";
};

export const validateHeightInFeet = (feet) => {
  if (feet === "") {
    return "Required..";
  }
  //regex for height
  const regex = /^[3-9]|10$/;
  if (!regex.test(feet)) {
    return "Please Enter Correct Value";
  }
  return "";
};

export const validateHeightInInches = (inches) => {
  if (inches === "") {
    return "Required..";
  }
  //regex for height
  const regex = /11|10|[0-9]/;
  if (!regex.test(inches)) {
    return "Please Enter Correct Value";
  }
  return "";
};

export const validateForm = (userData) => {
  if (userData.userName === "") {
    return "Name field is empty";
  }
  if (userData.useEmail === "") {
    return "Email field is empty";
  }
  if (userData.height.feet === "") {
    return "Enter the Feet part of your height";
  }
  if (userData.height.inches === "") {
    return "Enter the Inches part of your height";
  }
  return "";
};
