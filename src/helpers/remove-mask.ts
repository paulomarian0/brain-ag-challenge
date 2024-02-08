export const removeCpfCnpjMask = (input?: string) => {
  if (!input) return;

  return input.replace(/\D/g, "");
};
