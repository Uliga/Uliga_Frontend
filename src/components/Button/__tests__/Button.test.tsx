import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../index";

// describe는 테스트 케이스를 하나로 묶어주는 단위라고 생각하면 된다.
describe("버튼 컴포넌트 단위 테스트", () => {
  // it 또는 test 둘 중 아무거나 사용해도 문제없다.
  it("버튼이 dom에 존재하는지 확인한다.", () => {
    const buttonTitle = "버튼 컴포넌트입니다.";
    // getByText 함수를 사용해서 렌더링 된 요소에서 특정 텍스트를 찾을 수 있다.
    const { getByText } = render(<Button title={buttonTitle} />);
    // 위에서 반환된 getByText함수를 사용해서 buttonTitle이라는 변수에 저장된 문자열을 가진 요소를 찾는다.
    const button = getByText(buttonTitle);
    // 해당 버튼이 dom에 존재하는지 확인한다.
    expect(button).toBeInTheDocument();
    // toMatchSnapshot Matcher를 사용해서 현재 렌더링 결과와 저장된 스냅샷을 비교하여 테스트한다.
    expect(button).toMatchSnapshot();
  });

  it("버튼이 제대로 클릭되는지 확인한다.", () => {
    const buttonTitle = "onClick event를 가지고 있는 버튼 컴포넌트입니다.";
    // jest.fn() 메서드를 사용해서 대체 콜백 함수를 생성.
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button title={buttonTitle} onClick={onClickMock} />,
    );
    const button = getByText(buttonTitle);
    // fireEvent 메서드를 이용해서(@testing-library/react의 기본 메서드) 버튼을 클릭하는 이벤트를 트리거한다.
    // 여기서 이벤트를 트리거한다는 말은 사용자가 실제로 버튼을 클릭한 것 처럼 시뮬레이션한다는 뜻이다.
    fireEvent.click(button);
    // 위에서 생성된 Mock함수가 제대로 호출되었는지 toHaveBeenCalled() 메서드로 확인한다.
    expect(onClickMock).toHaveBeenCalled();
  });

  it("버튼의 disabled 속성이 제대로 적용되었는지 확인한다.", () => {
    const buttonTitle = "disabled 속성을 가지고 있는 버튼 컴포넌트입니다.";
    const { getByText } = render(<Button title={buttonTitle} disabled />);
    const button = getByText(buttonTitle);
    // 해당 요소가 비활성화(disabled) 상태인지 Matcher를 통해 확인한다.
    expect(button).toBeDisabled();
  });

  it("버튼의 css 속성이 제대로 들어가있는지 확인한다.", () => {
    const buttonTitle =
      "secondary theme과 large size 속성을 가지고 있는 버튼 컴포넌트입니다.";
    const { getByText } = render(
      <Button title={buttonTitle} theme="secondary" size="large" />,
    );
    const button = getByText(buttonTitle);
    // toHaveStyle Matcher를 사용해서 확인한다.
    expect(button).toHaveStyle(`
      font-size: 1.2rem;
      padding: 0.5rem 1.5rem;
      background-color: #FFC144;
      color: #FFF;
    `);
    // toMatchSnapshot Matcher를 사용해서 현재 렌더링 결과와 저장된 스냅샷을 비교하여 테스트한다.
    expect(button).toMatchSnapshot();
  });
});
