export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export const formatVerificationCode = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.slice(0, 4);
};
