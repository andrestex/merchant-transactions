export const splitValuesToMap = (values: string): string[] => {
  return values.split(',').map((e) => e.trim().toLowerCase()) as string[];
};
