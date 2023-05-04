import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../constants/color";
import Button from "../../components/Button";
import NoExistLogo from "../../assets/404";
import PATH from "../../constants/path";
import media from "../../styles/media";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: white;
  padding-top: 10rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  h1 {
    font-weight: 700;
    color: white;
    font-size: 10rem;
    -webkit-text-stroke-width: 1px; /* border의 두께 설정 */
    -webkit-text-stroke-color: ${COLORS.BLUE}; /* border의 색상 설정 */
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${COLORS.GREY[600]};
`;

const SubTitle = styled.div`
  font-size: 1.4rem;
  color: ${COLORS.GREY[400]};
  white-space: pre-line;
  text-align: center;
  line-height: 1.4;
  margin: 1rem 0 2rem 0;
`;

const StyledButton = styled(Button)`
  font-size: 1.6rem;
  padding: 1.3rem 8rem;
  border-radius: 20rem;
  ${media.medium} {
    font-size: 1.8rem;
    padding: 1.5rem 10rem;
  }
`;
export default function NoExist() {
  const navigate = useNavigate();
  return (
    <Container>
      <NoExistLogo />
      <h1>PAGE NOT FOUND</h1>
      <Title>원하시는 페이지를 찾을 수 없습니다.</Title>
      <SubTitle>
        {`찾으려는 페이지의 주소가 잘못되었거나,
        주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.`}
      </SubTitle>
      <StyledButton
        title="홈으로"
        onClick={() => {
          navigate(
            `${PATH.MAIN}/${localStorage.getItem("privateAccountBookId")}`,
          );
        }}
      />
    </Container>
  );
}
