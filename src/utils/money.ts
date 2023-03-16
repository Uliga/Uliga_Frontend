import REGEX from "../constants/regex";

const changeMoneyUnit = (money: number) => {
  const newMoney = money.toString().replace(REGEX.MONEY, ",");
  return newMoney;
};

export default changeMoneyUnit;
