import styled from "styled-components";
import React from "react";
import COLORS from "../../constants/color";
import ImgButton from "../../components/common/ImgButton";

const Container = styled.div`
  font-size: 1.4rem;
  text-align: center;
  color: ${COLORS.GREY[500]};
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  gap: 1.7rem;
  color: ${COLORS.GREY[300]};
  a {
    width: 4rem;
    height: 4rem;
    padding: 0;
  }
  padding-top: 2rem;
  flex-direction: column;
`;
const SNSIMG = styled(ImgButton)`
  border-radius: 5rem;
`;
const SNSWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const Label = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
`;

export default function SNSLogin() {
  return (
    <Container>
      SNS로 간편하게 로그인
      <SNSWrapper>
        <ImgWrapper>
          <SNSIMG
            size={5}
            ImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
          />
          <Label>Google</Label>
        </ImgWrapper>
        <ImgWrapper>
          <SNSIMG
            size={5}
            ImgSrc="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"
          />
          <Label>Kakao</Label>
        </ImgWrapper>
      </SNSWrapper>
    </Container>
  );
}
