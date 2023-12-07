import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../../constants/color";
import ImgButton from "../../ImgButton";
import PATH from "../../../constants/path";
import API from "../../../api/config";

const Container = styled.div`
  font-size: 1.4rem;
  text-align: center;
  color: ${COLORS.GREY[500]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top: 0.1rem solid ${COLORS.GREY[300]};
  padding-top: 3.5rem;
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
  padding-top: 0.8rem;
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
  const navigate = useNavigate();
  const currentURL = window.location.href;

  useEffect(() => {
    // URL에서 인가 코드 값을 추출.
    const searchParams = new URLSearchParams(window.location.search);
    const authCode = searchParams.get("token");
    const authCreate = searchParams.get("created");
    const userName = searchParams.get("userName");
    const loginType = searchParams.get("loginType");
    const privateAccountBookId = searchParams.get("privateAccountBook");
    const email = searchParams.get("email");

    if (typeof authCreate === "string") {
      if (authCreate === "false") {
        if (typeof authCode === "string") {
          if (typeof privateAccountBookId === "string") {
            localStorage.setItem("accessToken", authCode);
            localStorage.setItem("privateAccountBookId", privateAccountBookId);
          }
        }

        localStorage.setItem("created", authCreate);
      } else {
        navigate(PATH.SOCIAL, { state: { userName, loginType, email } });
      }
    }
  }, []);

  return (
    <Container>
      SNS로 간편하게 로그인
      <SNSWrapper>
        <ImgWrapper>
          <SNSIMG
            href={
              currentURL.includes("localhost:3000")
                ? API.LOCAL_GOOGLE_AUTH_URL
                : API.GOOGLE_AUTH_URL
            }
            size={5}
            ImgSrc="https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-6/386747770_334969355719214_550912831526851437_n.png?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=RJcxPL59psQAX8NmVol&_nc_ht=scontent-gmp1-1.xx&oh=00_AfBmg-QBM9cTbkn7_6KtnQ1t9einLbBHUnhvOwqDQdiCFQ&oe=6575F97F"
          />
          <Label>Google</Label>
        </ImgWrapper>
        <ImgWrapper>
          <SNSIMG
            href={
              currentURL.includes("localhost:3000")
                ? API.LOCAL_KAKAO_AUTH_URL
                : API.KAKAO_AUTH_URL
            }
            size={5}
            ImgSrc="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"
          />
          <Label>Kakao</Label>
        </ImgWrapper>
      </SNSWrapper>
    </Container>
  );
}
