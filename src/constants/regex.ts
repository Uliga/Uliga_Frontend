const REGEX = {
  ID: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{2,19}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,19}$/,
  NICKNAME: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,19}$/,
};

export default REGEX;
