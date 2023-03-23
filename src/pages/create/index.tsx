import React from "react";
import COLORS from "../../constants/color";
import Input from "../../components/Input";
import Badge from "../../components/Badge";
import useCreate from "../../hooks/book/useCreate";
import * as S from "./index.styles";
import Detail from "./detail";

export default function Create() {
  const {
    Emails,
    DefaultCategories,
    Categories,
    InputList,
    removeEmail,
    removeCategory,
    onSubmitForm,
  } = useCreate();

  return (
    <S.Container>
      <h2>공유 가계부 생성</h2>
      <S.Wrapper>
        {InputList.map(input => (
          <div key={input.label}>
            <S.InputWrapper>
              <Input
                label={input.label}
                size={input.size}
                placeholder={input.placeholder}
                value={input.value}
                type={input.type}
                onChange={input.onChange}
              />
              {input.required && <S.Required>*</S.Required>}
              {input.Button && (
                <S.AddButton
                  title={input.Button.title}
                  theme={input.Button.theme}
                  onClick={input.Button.onClick}
                />
              )}
            </S.InputWrapper>
            {input.label === "가계부 조직" && <Detail />}
            {input.label === "카테고리 추가" && (
              <>
                <h5>현재 카테고리</h5>
                <S.ETCWrapper>
                  {DefaultCategories.map(category => (
                    <Badge
                      key={category}
                      title={category}
                      color={COLORS.GREY[600]}
                      size={1.2}
                    />
                  ))}
                  {Categories.map(category => (
                    <Badge
                      key={category}
                      iconColor={COLORS.GREY[500]}
                      onClick={() => {
                        removeCategory(category);
                      }}
                      title={category}
                      color={COLORS.GREY[600]}
                      size={1.2}
                    />
                  ))}
                </S.ETCWrapper>
              </>
            )}
            {input.label === "사용자 초대" && (
              <S.ETCWrapper>
                {Emails.map(email => (
                  <Badge
                    key={email}
                    iconColor={COLORS.GREY[500]}
                    onClick={() => {
                      removeEmail(email);
                    }}
                    title={email}
                    color={COLORS.GREY[400]}
                    size={1.2}
                  />
                ))}
              </S.ETCWrapper>
            )}
          </div>
        ))}
      </S.Wrapper>
      <S.CreateButton
        onClick={() => {
          onSubmitForm();
        }}
        width="100%"
        title="공유 가계부 만들기"
      />
    </S.Container>
  );
}
