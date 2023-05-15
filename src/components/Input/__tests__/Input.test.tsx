import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../index";

describe("<Input />", () => {
  it("Input 컴포넌트 스냅샷 테스트", () => {
    const inputValue = "value";
    const testUtils = render(<Input value={inputValue} />);
    expect(testUtils.container).toMatchSnapshot();
  });
  it("Input 컴포넌트가 dom에 존재하는지 확인한다.", () => {
    const inputValue = "value";
    const { getByDisplayValue } = render(<Input value={inputValue} />);
    const inputComponent = getByDisplayValue(inputValue);
    expect(inputComponent).toBeInTheDocument();
  });
  it("Input 컴포넌트 라벨이 dom에 있는지 확인한다.", () => {
    const inputValue = "value";
    const inputLabel = "label";
    const { getByText } = render(
      <Input value={inputValue} label={inputLabel} />,
    );
    const labelElement = getByText(inputLabel);
    expect(labelElement).toBeInTheDocument();
  });
  it("Input 컴포넌트의 placeholder 텍스트가 dom에 있는지 확인한다.", () => {
    const placeholderText = "placeholder";
    const { getByPlaceholderText } = render(
      <Input value="" placeholder={placeholderText} />,
    );
    const inputComponent = getByPlaceholderText(placeholderText);
    expect(inputComponent).toBeInTheDocument();
  });
  it("Input 컴포넌트의 하단 message가 dom에 있는지 확인한다.", () => {
    const messageText = "message";
    const { getByText } = render(<Input value="" message={messageText} />);
    const messageElement = getByText(messageText);
    expect(messageElement).toBeInTheDocument();
  });
});
