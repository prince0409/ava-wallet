export const truncateAddress = (address: string): string => {
  if (address.length < 8) return address;
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};
