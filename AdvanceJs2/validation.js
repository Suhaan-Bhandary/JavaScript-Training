// Create a validation class similar to ‘yup’ and add validations for required, min and max for strings.
// Expose an isValid method that returns true or false based on the argument passed

class Validation {
  constructor(value) {
    this.value = value;
    this.errors = [];
  }

  required(message) {
    if (!this.value) {
      this.errors.push(message || "String is required");
    }

    return this;
  }

  min(length, message) {
    if (this.value && this.value?.length < length) {
      this.errors.push(
        message || `String should be atleast of length is ${length}`,
      );
    }

    return this;
  }

  max(length, message) {
    if (this.value && this.value?.length > length) {
      this.errors.push(message || `String length can be at max ${length}`);
    }

    return this;
  }

  isValid() {
    return this.errors.length === 0;
  }

  getErrors() {
    return this.errors;
  }
}

// Validating a username
const username = "suhaan";
const usernameValidator = new Validation(username);
const isValid = usernameValidator.required().min(3).max(5).isValid();

console.log("isValid:", isValid);
console.log("Errors:", usernameValidator.getErrors());
