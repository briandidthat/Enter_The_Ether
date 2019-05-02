import validator from "validator";

export default (val, rules, extraData = null) => {
  let isValid = true;
  let errorMessage = "";
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = validator.isEmail(val);
        if (!isValid) errorMessage = "Doesn't look like a valid email.";
        break;
      case "isPhone":
        isValid = validator.isMobilePhone(val, "any");
        if (!isValid) errorMessage = "Doesn't look like a valid phone number.";
        break;
      case "minLength":
        isValid = validator.isLength(val, { min: rules[rule] });
        if (!isValid)
          errorMessage = `Must be at least ${rules[rule]} characters.`;
        break;
      case "maxLength":
        isValid = validator.isLength(val, { max: rules[rule] });
        if (!isValid)
          errorMessage = `Must be no longer than ${rules[rule]} characters.`;
        break;
      case "required":
        isValid = !validator.isEmpty(val);
        if (!isValid) errorMessage = "This field is required.";
        break;
      case "isAlphanumeric":
        isValid = validator.isAlphanumeric(val);
        if (!isValid) errorMessage = "Only letters and numbers are allowed.";
        break;
      case "equalTo":
        isValid = validator.equals(val, extraData);
        if (!isValid) errorMessage = "Must match the previous entry.";
        break;
      case "erc20":
        isValid = /^(0x){1}[0-9a-fA-F]{40}$/i.test(val);
        if (!isValid)
          errorMessage = "ERC20 address does not appear to be valid.";
        break;
      case "url":
        isValid = validator.isURL(val);
        if (!isValid) errorMessage = "URL does not appear to be valid.";
        break;
      case "isDate":
        const regEx = /^(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])-\d{4}$/;
        isValid = val.match(regEx);

        if (!isValid) errorMessage = "Date must be formatted MM-DD-YYYY.";
        break;
      default:
        break;
    }

    if (!isValid) break;
  }

  return { isValid: isValid, errorMessage: errorMessage };
};
