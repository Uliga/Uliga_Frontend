import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import Input from "../../Input";
import COLORS from "../../../constants/color";
import ColorChips from "./colorChips";
import { BookInfoTypes } from "../../../interfaces/book";
import useSettingBook from "../../../hooks/book/useSettingBook";
import Button from "../../Button";
import Badge from "../../Badge";
import { deleteCategoryDialogAtom } from "../../../stores/atoms/context";

const Form = styled.form`
  padding: 1rem 0 2rem 0;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
`;

const InfoWrapper = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[500]};
  overflow: scroll;
  height: 7rem;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.5rem; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${COLORS.GREY[200]}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.GREY[100]}; /*스크롤바 뒷 배경 색상*/
  }
`;

const ColorWrapper = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[500]};
`;
const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.55rem 2.7rem;
  font-size: 1.37rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: 38rem;
  height: 7rem;
`;

const Bages = styled.div`
  width: 38rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 0;
  display: flex;
  gap: 1.4rem;
  button {
    border-radius: 20rem;
    font-size: 1.5rem;
    padding: 1.2rem 2.6rem;
  }
`;

export default function EditBook({
  book,
  setIsCollapse,
}: {
  book: BookInfoTypes;
  setIsCollapse: any;
}) {
  const {
    relationship,
    onChangeRelationship,
    setRelationship,
    onChangeCategory,
    category,
    categories,
    email,
    onChangeEmail,
    addCategory,
    addEmail,
    emails,
    removeCategory,
    removeEmail,
    defaultCategories,
    setDefaultCategories,
    removeDefaultCategory,
    setDefaultEmails,
    avatar,
    setAvatar,
    mutateUpdateBook,
  } = useSettingBook();

  const [dialogOpen, setDialogOpen] = useRecoilState(deleteCategoryDialogAtom);

  useEffect(() => {
    setRelationship(book.info.relationShip);
    setDefaultCategories(book.categories.map(ele => ele.value));
    setDefaultEmails(book.members.map(ele => ele.email));
    setAvatar(book.info.avatarUrl);
  }, [book]);

  useEffect(() => {
    if (dialogOpen.isDeleted) {
      removeDefaultCategory(dialogOpen.value);
    }
  }, [dialogOpen.isDeleted]);

  return (
    <Form>
      <Input
        value={book.info.accountBookName}
        label="가계부 이름"
        size={38}
        readOnly
      />
      <Input
        value={relationship}
        onChange={onChangeRelationship}
        label="관계"
        size={38}
      />
      {!book.info.isPrivate && (
        <>
          <InputWrapper>
            <Input
              value={email}
              onChange={onChangeEmail}
              label="사용자 추가"
              size={29}
            />
            <StyledButton
              title="초대"
              theme="quaternary"
              onClick={() => {
                addEmail();
              }}
            />
          </InputWrapper>
          <InfoWrapper>
            현재 구성원
            <Bages>
              {book.members.map(ele => (
                <Badge
                  size={1.2}
                  title={`${ele.username}<${ele.email}>`}
                  color={COLORS.GREY[400]}
                />
              ))}
              {emails.map(ele => (
                <Badge
                  size={1.2}
                  title={ele}
                  iconColor={COLORS.GREY[500]}
                  color={COLORS.GREY[400]}
                  onClick={() => {
                    removeEmail(ele);
                  }}
                />
              ))}
            </Bages>
          </InfoWrapper>
        </>
      )}
      <InputWrapper>
        <Input
          value={category}
          onChange={onChangeCategory}
          label="카테고리 추가"
          size={29}
        />
        <StyledButton
          title="추가"
          theme="quaternary"
          onClick={() => {
            addCategory();
          }}
        />
      </InputWrapper>
      <InfoWrapper>
        현재 카테고리 관리
        <Bages>
          {defaultCategories.map(ele => (
            <Badge
              size={1.2}
              title={ele}
              iconColor={COLORS.GREY[500]}
              onClick={e => {
                e?.preventDefault();
                setDialogOpen({ open: true, value: ele, isDeleted: false });
                // removeDefaultCategory(ele);
              }}
            />
          ))}
          {categories.map(ele => (
            <Badge
              size={1.2}
              title={ele}
              iconColor={COLORS.GREY[500]}
              onClick={e => {
                e?.preventDefault();
                removeCategory(ele);
              }}
            />
          ))}
        </Bages>
      </InfoWrapper>
      <ColorWrapper>
        내 아바타 색상
        <ColorChips avatar={avatar} setAvatar={setAvatar} />
      </ColorWrapper>
      <ButtonWrapper>
        <Button
          title="취소"
          theme="unfocus"
          onClick={() => {
            setIsCollapse({ open: false, id: book.info.accountBookId });
          }}
        />
        <Button
          title="수정"
          onClick={() => {
            mutateUpdateBook.mutate({
              id: book.info.accountBookId,
              newBookData: {
                name: book.info.accountBookName,
                relationship,
                categories: [...categories, ...defaultCategories.map(v => v)],
                members: emails,
                avatarUrl: avatar,
              },
            });
          }}
        />
      </ButtonWrapper>
    </Form>
  );
}
