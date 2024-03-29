type IconProps = {
  [index: string]: string;
}; // key에 string으로 접근할 수 있도록 인덱스 선언

const ICONS: IconProps = {
  checkEmpty: "bi bi-check-circle",
  checkFill: "bi bi-check-circle-fill",
  book: "bi bi-journals",
  pig: "bi bi-piggy-bank",
  chart: "bi bi-clipboard-data",
  bank: "bi bi-bank",
  personGear: "bi bi-person-gear",
  list: "bi bi-list",
  arrowLeft: "bi bi-chevron-left",
  arrowRight: "bi bi-chevron-right",
  arrowDown: "bi bi-chevron-down",
  arrowUp: "bi bi-chevron-up",
  close: "bi bi-x-lg",
  plus: "bi bi-plus-lg",
  dots: "bi bi-three-dots",
  notice: "bi bi-patch-exclamation-fill",
  alarm: "bi bi-bell",
  alarmFill: "bi bi-bell-fill",
  check: "bi bi-check",
  circleCheck: "bi bi-plus-circle",
  circlePlus: "bi bi-plus-circle",
  message: "bi bi-envelope",
  messageOpen: "bi bi-envelope-open-fill",
  wallet: "bi bi-wallet2",
  cancel: "bi bi-x",
  pencil: "bi bi-pencil-fill",
  pencilEmpty: "bi bi-pencil",
  eye: "bi bi-eye",
  eyeSlash: "bi bi-eye-slash",
  circleClose: "bi bi-x-circle",
  exclamation: "bi bi-exclamation-circle-fill",
  calendar: "bi bi-calendar-event",
};

export default ICONS;
