export default function changeDateUnit(day: any) {
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
