import { cnpj } from "cpf-cnpj-validator";

export const validateCnpj = (input?: string) => {
  if (!input) return;

  return cnpj.isValid(input);
};
