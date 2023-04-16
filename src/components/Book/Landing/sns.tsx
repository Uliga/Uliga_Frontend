import styled from "styled-components";
import React, { useEffect, useState } from "react";
import COLORS from "../../../constants/color";
import ImgButton from "../../ImgButton";
import { getSocialPrivateAccountBookId } from "../../../api/book";
// import { kakaoLogin } from "../../../api/auth";

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
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=78450d299f7e5277f3270c8d1785b163&redirect_uri=http://localhost:3000&response_type=code&prompt=login`;
  const [privateAccountBookId, setPrivateAccountBookId] = useState(null);
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=78450d299f7e5277f3270c8d1785b163&redirect_uri=http://localhost:3000&response_type=code&prompt=login`;
  const KAKAO_AUTH_URL = `http://ec2-15-164-216-11.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/main/${privateAccountBookId}`;
  const GOOGLE_AUTH_URL = `http://ec2-15-164-216-11.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google?redirect_uri=http://localhost:3000`;

  const social = async () => {
    try {
      const response = await getSocialPrivateAccountBookId();
      console.log("ddd", response);
      setPrivateAccountBookId(response);
    } catch (err) {
      console.log(err);
    }
  };
  // if (!privateAccountBookId) {
  //   return null;
  // }

  useEffect(() => {
    // URL에서 인가 코드 값을 추출합니다.
    const searchParams = new URLSearchParams(window.location.search);
    const authCode = searchParams.get("token");
    console.log(authCode);
    if (typeof authCode === "string") {
      localStorage.setItem("accessToken", authCode);
    }
  }, []);
  useEffect(() => {
    // URL에서 인가 코드 값을 추출합니다.
    social();
  }, [localStorage]);

  return (
    <Container>
      SNS로 간편하게 로그인
      <SNSWrapper>
        <ImgWrapper>
          <SNSIMG
            href={GOOGLE_AUTH_URL}
            size={5}
            ImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
          />
          <Label>Google</Label>
        </ImgWrapper>
        <ImgWrapper>
          <SNSIMG
            href={KAKAO_AUTH_URL}
            size={5}
            ImgSrc="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"
          />
          <Label>Kakao</Label>
        </ImgWrapper>
      </SNSWrapper>
    </Container>
  );
}
