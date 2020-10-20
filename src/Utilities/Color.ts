
export const hexToByte = (hex: string, opacity: number | undefined = 1): number[] => {
  const hexNoHash = hex.replace("#", "");

  const arr: number[] = [];

  for (let i = 0, lgth = hexNoHash.length; i < lgth; i += 2) {
    const s = parseInt(hexNoHash.substr(i, 2), 16);
    arr.push(s);
  }

  return [...arr, opacity];
};
