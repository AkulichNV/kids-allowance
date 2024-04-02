import { AbstractControl, ValidatorFn } from "@angular/forms";

export function customValidatorPassword(): ValidatorFn {
  const upperCasePattern = '.*?[A-Z]{1,}';
  const lowerCasePattern = '(?=.*?[a-z]{1,})';
  const digitPattern = '(?=.*?[0-9]{1,})';
  const specialCharPattern = '(?=.*[ -\/:-@\[-\`{-~]{1,})';
  const lengthPattern = '^.{8,}$';

  return (control: AbstractControl): { [key: string]: {message: string} } | null => {

    if (!new RegExp(upperCasePattern).test(control.value)) {
      return {
        Error: {
          message: `Your password must contain at least one uppercase letters`
        }
      };
    }

    if (!new RegExp(lowerCasePattern).test(control.value)) {
      return {
        Error: {
          message: `Your password must contain at least one lowercase letters`
        }
      };
    }

    if (!new RegExp(digitPattern).test(control.value)) {
      return {
        Error: {
          message: `Your password must contain at least one numbers`
        }
      };
    }

    if (!new RegExp(specialCharPattern).test(control.value)) {
      return {
        Error: {
          message: `Your password must contain at least one special character, e.g., ! @ # ? ]`
        }
      };
    }

    if (!new RegExp(lengthPattern).test(control.value)) {
      return {
        Error: {
          message: `Your password must contain at least 8 characters`
        }
      };
    }

   return null;
  };
}
