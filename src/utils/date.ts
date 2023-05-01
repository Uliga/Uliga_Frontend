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

export function getLastDate() {
  const lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();
  return lastDate;
}

export function getRemainDate(selectDate: number) {
  const lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();
  const curDate = new Date().getDate();
  let remainDate;
  if (curDate <= selectDate) {
    remainDate = selectDate - curDate;
  } else {
    remainDate = lastDate - curDate + selectDate;
  }
  return remainDate;
}

export function getDateRangeUnit(startDay: number, endDay: number) {
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    startDay,
  );
  const endDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    endDay,
  );
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  const startString = dateFormat.format(startDate);
  const endString = dateFormat.format(endDate);
  return `(${startString} - ${endString})`;
}
