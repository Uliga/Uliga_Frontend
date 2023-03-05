const menu = [
  {
    title: "가계부",
    theme: "normal",
    iconName: "book",
    iconSize: "1.25rem",
    subMenu: [
      {
        title: "작성",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
      },
      {
        title: "캘린더",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
      },
      {
        title: "내역",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
      },
    ],
  },
  {
    title: "예산",
    theme: "normal",
    iconName: "pig",
    iconSize: "1.5rem",
  },
  {
    title: "분석",
    theme: "normal",
    iconName: "chart",
    iconSize: "1.25rem",
    subMenu: [
      {
        title: "주간별 · 월별",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
      },
      {
        title: "카테고리별 분석",
        theme: "normal",
        iconName: "arrowRight",
        iconSize: "1.2rem",
      },
    ],
  },
  {
    title: "청약 · 대출 · 보험",
    theme: "normal",
    iconName: "bank",
    iconSize: "1.25rem",
  },
];

const bottomMenu = [
  {
    title: "내 정보",
    theme: "primary",
  },
  {
    title: "로그아웃",
    theme: "primary",
  },
];

export { menu, bottomMenu };
