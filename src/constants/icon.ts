type IconProps = {
  [index: string]: string;
}; // key에 string으로 접근할 수 있도록 인덱스 선언

const ICONS: IconProps = {
  checkFill: "bi bi-check-circle-fill",
  book: "bi bi-journals",
  pig: "bi bi-piggy-bank",
  chart: "bi bi-clipboard-data",
  bank: "bi bi-bank",
  personGear: "bi bi-person-gear",
  list: "bi bi-list",
  arrowLeft: "bi bi-chevron-left",
  arrowRight: "bi bi-chevron-right",
  close: "bi bi-x-lg",
  plus: "bi bi-plus-lg",
  dots: "bi bi-three-dots",
  notice: "bi bi-patch-exclamation-fill",
  check: "bi bi-check",
  circleCheck: "bi bi-plus-circle",
  message: "bi bi-envelope",
  messageOpen: "bi bi-envelope-open-fill",
};

export default ICONS;
