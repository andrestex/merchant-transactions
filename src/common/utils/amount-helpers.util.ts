const calculateRemainingAmount = (
  initialAmount: number,
  percentage: number,
): number => {
  const percentageValue = initialAmount * (percentage / 100);
  const remainingAmount = initialAmount - percentageValue;
  return remainingAmount;
};

const sumAmounts = (amounts: number[]): number => {
  let total = 0;
  for (const amount of amounts) {
    total += amount;
  }
  return total;
};

export const amountHelpers = {
  calculateRemainingAmount,
  sumAmounts,
};
