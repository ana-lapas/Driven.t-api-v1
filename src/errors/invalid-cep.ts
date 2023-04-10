import { ApplicationError } from '@/protocols';

export function invalidCEP(): ApplicationInvalidateDataError {
  return {
    name: 'InvalidCEP',
    message: 'Invalid CEP'
  };
}

type ApplicationInvalidateDataError = ApplicationError & {
};
