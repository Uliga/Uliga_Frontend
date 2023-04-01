export default function getDateUnit(day: any) {
  const date = `${day.getFullYear()}-${
    day.getMonth() + 1 < 10
      ? `0${(day.getMonth() + 1).toString()}`
      : (day.getMonth() + 1).toString()
  }-${
    day.getDate() < 10
      ? `0${day.getDate().toString()}`
      : day.getDate().toString()
  }`;

  return date;
}

export function getFullDateUnit(day: any) {
  const time = day.toLocaleTimeString().split(" ")[1];

  const date = `${day.getFullYear()}-${
    day.getMonth() + 1 < 10
      ? `0${(day.getMonth() + 1).toString()}`
      : (day.getMonth() + 1).toString()
  }-${
    day.getDate() < 10
      ? `0${day.getDate().toString()}`
      : day.getDate().toString()
  } ${time}`;

  return date;
}

export function getDayOfWeek(date: string) {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[new Date(date).getDay()];

  return dayOfWeek;
}
