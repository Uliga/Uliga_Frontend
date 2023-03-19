import REGEX from "../constants/regex";

const getMoneyUnit = (money: number) => {
  const newMoney = money.toString().replace(REGEX.MONEY, ",");
  return newMoney;
};

export default getMoneyUnit;
