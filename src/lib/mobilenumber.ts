export const formatPhoneNumber = (phone: string | undefined): string => {
  if (!phone) return "";
  return phone.replace(/(\+91)(\d+)/, "$1 $2");
};