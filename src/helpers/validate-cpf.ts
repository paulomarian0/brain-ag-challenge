import { cpf } from "cpf-cnpj-validator";

export const validateCpf = (input?: string) => {
  if (!input) return;

  return cpf.isValid(input);
};
