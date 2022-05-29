export const parseFormat = (code?: number[], message?: string): string => {
  if (!code) {
    code = [0, 0];
  }

  return `\x1b[${code[0]}m${message || ''}\x1b[${code[1]}m`;
};
