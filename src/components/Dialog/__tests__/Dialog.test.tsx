import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dialog from "../index"; // 다이얼로그 컴포넌트의 실제 파일 경로로 변경해야 합니다.

describe("<Dialog />", () => {
  test("확인 버튼이 클릭되었을 때 동작을 확인합니다", () => {
    let confirmClicked = false; // 확인 버튼 클릭 여부를 저장할 변수
    const handleConfirm = () => {
      confirmClicked = true;
    };

    const { getByText } = render(
      <Dialog
        visible
        title="제목"
        description="설명"
        onConfirm={handleConfirm}
      />,
    );

    const confirmButton = getByText("확인");
    fireEvent.click(confirmButton);

    expect(confirmClicked).toBe(true);
  });
  test("확인 버튼이 클릭되었을 때 onConfirm 이벤트가 호출되는지 확인합니다", () => {
    const onConfirm = jest.fn();

    const { getByText } = render(
      <Dialog visible title="제목" description="설명" onConfirm={onConfirm} />,
    );

    const confirmButton = getByText("확인");
    fireEvent.click(confirmButton);

    expect(onConfirm).toHaveBeenCalled();
  });
  test("취소 버튼이 클릭되었을 때 onCancel 이벤트가 호출되는지 확인합니다", () => {
    const onCancel = jest.fn();

    const { getByText } = render(
      <Dialog
        visible
        title="제목"
        description="설명"
        cancellable
        onCancel={onCancel}
      />,
    );

    const cancelButton = getByText("취소");
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalled();
  });

  test("다이얼로그의 Title과 Description이 스냅샷과 일치해야 합니다", () => {
    const { container } = render(
      <Dialog visible title="Test Title" description="Test Description" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
