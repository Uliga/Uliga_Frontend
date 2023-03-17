import styled from "styled-components";
import COLORS from "../../../constants/color";
import Badge from "../../../components/Badge";
import Icon from "../../../components/Icon";
import IconButton from "../../../components/IconButton";

const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  color: ${COLORS.GREY[600]};
  gap: 1.5rem;
  padding: 4rem;
  flex-direction: column;
  h3 {
    font-weight: 700;
    font-size: 2rem;
    padding: 2rem 0 1rem 0;
  }
  p {
    font-weight: 200;
    font-size: 1.3rem;
    padding: 0rem 0 1rem 0;
  }
`;
const MiddleContainer = styled.div`
  gap: 2rem;
  width: 100%;
  max-width: 140rem;
  display: flex;
`;

const BankingAdd = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 85rem;
  border-top: 1px solid ${COLORS.GREY[300]};
`;
const BankingAddForm = styled.div`
  width: 55rem;
  border-right: 1px solid ${COLORS.GREY[300]};
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

const ScheduleBoxContainer = styled.div`
  width: 27rem;
  height: 45rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 2rem;
  h4 {
    font-weight: 700;
    padding-bottom: 2rem;
  }
  color: ${COLORS.GREY[600]};
`;

const ScheduleBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
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
const ScheduleWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  h5 {
    font-size: 1.35rem;
    color: ${COLORS.GREY[500]};
  }
`;
const ScheduleInfoDesk = styled.div`
  margin-top: 7rem;
  align-items: center;
  background-color: ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding-top: 1rem;
`;

const StyledBadge = styled(Badge)`
  border-radius: 0.5rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  justify-content: center;
  font-weight: 300;
  width: 5rem;
`;
const dot1 = styled.span`
  color: ${COLORS.RED.LIGHT};
  margin-left: 9rem;
  font-size: 1rem;
`;

const dot2 = styled.span`
  color: ${COLORS.YELLOW};
  margin-left: 9rem;
  font-size: 1rem;
`;

const dot3 = styled.span`
  color: ${COLORS.GREEN.DARK};
  margin-left: 9rem;
  font-size: 1rem;
`;
const ScheduleInfo = styled.div`
  //width: 70%;
  display: flex;
  justify-content: right;
  gap: 1px;
  p {
    width: 100%;
    text-align: right;
    margin-right: 2rem;
    font-size: 0.5rem;
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
  // &:focus {
  //   color: ${COLORS.LIGHT_BLUE};
  // }
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
`;
const StyledIcon = styled(Icon)`
  margin: 2rem 1rem 0 1rem;
`;
const BankingAddInfoWrapper = styled.div`
  margin: 0.5rem;
`;
const StyledIconButton = styled(IconButton)`
  background-color: transparent;
  margin: 2rem 1rem 0 1rem;
`;

export {
  Container,
  MiddleContainer,
  BankingAdd,
  BankingAddList,
  BankingAddForm,
  StyledBadge,
  ScheduleWrapper,
  ScheduleBoxContainer,
  ScheduleBoxWrapper,
  ScheduleInfoDesk,
  dot1,
  dot2,
  dot3,
  ScheduleInfo,
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
  StyledIconButton,
  Division,
  MemberList,
};
