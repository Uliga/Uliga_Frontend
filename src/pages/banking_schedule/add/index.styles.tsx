import styled from "styled-components";
import COLORS from "../../../constants/color";
import Icon from "../../../components/Icon";
import IconButton from "../../../components/IconButton";

const BankingAdd = styled.div`
  display: flex;
  width: 85rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};
`;
const BankingAddForm = styled.div`
  width: 55rem;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
`;
const BankingAddList = styled.div`
  h4 {
    margin: 1rem 0 0 2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  width: 30rem;
  button {
    margin: 2rem;
    padding: 1rem;
    font-size: 1.4rem;
    bottom: 0;
    border-radius: 0.5rem;
  }
`;

const BankingAddFormBox = styled.div`
  display: flex;
  width: 50rem;
  height: 40rem;
  margin: 2rem 0 1rem 1rem;
  background-color: ${COLORS.GREY[100]};
  border-radius: 0.5rem;
`;
const AddFormLeft = styled.div`
  width: 25rem;
`;
const AddDateForm = styled.div`
  margin: 3rem 0 0 3rem;
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
const Option = styled.div`
  display: flex;
  gap: 1rem;
  p {
    font-size: 1.4rem;
  }
  margin-bottom: 1rem;
  margin-right: 2rem;
`;
const Option3 = styled.div`
  display: flex;
  gap: 10px;
  p {
    font-size: 1.4rem;
  }
  margin-top: -1rem;
`;
const Label = styled.span`
  display: flex;
  font-size: 1.4rem;
  cursor: pointer;
  color: ${COLORS.GREY[400]};
  p {
    margin-top: 1rem;
  }
`;

const OptionInput = styled.input`
  border: none;
  height: 2.2rem;
  background-color: ${COLORS.GREY[100]};
  border-bottom: 1px solid ${COLORS.GREY[400]};
  width: 4rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${COLORS.GREY[400]};
  }
`;

const AddCategoryForm = styled.div`
  margin: 3rem 0 0 3rem;
  //display: flex;
  //gap: 10px;
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
const AddNameForm = styled.div`
  margin: 3rem 0 0 3rem;
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  input {
    &:focus {
      outline: none;
      border: 1px solid ${COLORS.GREY[300]};
    }
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
  }
`;
const AddPriceForm = styled.div`
  margin: 3rem 3rem 0 1rem;
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 200;
  }
  input {
    &:focus {
      outline: none;
      border: 1px solid ${COLORS.GREY[300]};
    }
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
    /* webkit solution */
    ::-webkit-input-placeholder {
      text-align: right;
    }
    /* mozilla solution */
    input:-moz-placeholder {
      text-align: right;
    }
  }
`;
const AddMemberPartitionForm = styled.div`
  margin: 3rem 3rem 0 1rem;
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    font-weight: 200;
  }
`;
const MemberList = styled.div``;
const Division = styled.div`
  margin-left: 3rem;
  display: flex;
  gap: 2rem;
  p {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
  input {
    border-radius: 0rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${COLORS.GREY[300]};
    &:focus {
      outline: none;
      border: none;
      border-bottom: 1px solid ${COLORS.GREY[300]};
    }
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
    /* webkit solution */
    ::-webkit-input-placeholder {
      text-align: right;
    }
    /* mozilla solution */
    input:-moz-placeholder {
      text-align: right;
    }
  }
`;

const AddFormRight = styled.div`
  width: 25rem;
`;

const BankingAddListWrapper = styled.div`
  position: relative;
  margin: 2rem;
  width: 27rem;
  height: 48%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    padding: 1rem;
    font-size: 1.4rem;
    position: absolute;
    bottom: 0;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  background-color: ${COLORS.GREY[100]};
  border-radius: 0.5rem;
  h5 {
    margin-top: 0.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
  h6 {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    color: ${COLORS.GREY[400]};
    font-weight: 200;
  }
  p {
    font-size: 1rem;
    color: ${COLORS.BLUE};
  }
  position: relative;
`;
const StyledIcon = styled(Icon)`
  margin: 2rem 1rem 0 1rem;
`;
const BankingAddInfoWrapper = styled.div`
  margin: 0.5rem;
  width: 15rem;
  div {
    display: flex;
  }
`;
const CancelIconButton = styled(IconButton)`
  color: ${COLORS.GREY[300]};
  position: absolute;
  right: -1rem;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const StyledIconPlusButton = styled(IconButton)`
  background-color: white;
  margin-left: 24rem;
  border-radius: 3rem;
  height: 3rem;
  margin-top: -2.5rem;
  color: ${COLORS.GREY[300]};
`;

export {
  BankingAdd,
  BankingAddList,
  BankingAddForm,
  BankingAddFormBox,
  AddFormLeft,
  AddFormRight,
  AddDateForm,
  AddCategoryForm,
  AddNameForm,
  AddPriceForm,
  Option,
  OptionInput,
  Label,
  Option3,
  AddMemberPartitionForm,
  BankingAddListWrapper,
  Box,
  BankingAddInfoWrapper,
  StyledIcon,
  Division,
  MemberList,
  StyledIconPlusButton,
  CancelIconButton,
};
