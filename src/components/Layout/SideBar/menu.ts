import PATH from "../../../constants/path";

const menu = [
  {
    title: "가계부",
    theme: "normal",
    iconName: "book",
    iconSize: "1.25rem",
    path: PATH.MAIN,
    subMenu: [
      {
        title: "작성",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
        path: PATH.WRITE,
      },
      {
        title: "캘린더",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
        path: PATH.MAIN,
      },
      {
        title: "내역",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
        path: PATH.HISTORY,
      },
    ],
  },
  {
    title: "금융 일정",
    theme: "normal",
    iconName: "calendar",
    iconSize: "1.4rem",
    path: PATH.SCHEDULE,
  },
  {
    title: "예산",
    theme: "normal",
    iconName: "pig",
    iconSize: "1.45rem",
    path: PATH.BUDGET,
  },
  {
    title: "분석",
    theme: "normal",
    iconName: "chart",
    iconSize: "1.25rem",
    path: PATH.DATE_RANGE_CHART,
    subMenu: [
      {
        title: "주간별 · 월별",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
        path: PATH.DATE_RANGE_CHART,
      },
      {
        title: "카테고리별 분석",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
        path: PATH.CATEGORY_CHART,
      },
    ],
  },
  {
    title: "청약 · 대출 · 보험",
    theme: "normal",
    iconName: "bank",
    iconSize: "1.25rem",
    path: PATH.FINANCIAL,
  },
];

const bottomMenu = [
  {
    title: "설정",
    theme: "primary",
    path: `${PATH.SETTING}${PATH.ME}`,
  },
  {
    title: "로그아웃",
    theme: "primary",
    path: "",
  },
];

export { menu, bottomMenu };
