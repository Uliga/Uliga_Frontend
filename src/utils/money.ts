import REGEX from "../constants/regex";

const getMoneyUnit = (money: number | string) => {
  const newMoney = money.toString().replace(REGEX.MONEY, ",");
  return newMoney;
};

export default getMoneyUnit;
