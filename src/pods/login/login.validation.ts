import { Validators, createFormValidation, ValidationSchema } from '@lemoncode/fonk';

const loginFormValidationConstraints: ValidationSchema = {
  field: {
    username: [{validator: Validators.required, message: 'Required field'}],
    password: [{validator: Validators.required, message: 'Required field'}],
  },
}

export const loginFormValidation = createFormValidation(loginFormValidationConstraints);
