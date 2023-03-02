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
};

export default ICONS;
