export const parseFormat = ({ open, close }: any, message?: string): string => {
  return `${open}${message ?? ''}${close}`;
};
