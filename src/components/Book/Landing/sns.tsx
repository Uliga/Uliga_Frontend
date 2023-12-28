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
            ImgSrc="data:image/png;base64,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"
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
