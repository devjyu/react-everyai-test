import { useState } from "react";
import InputField from "@/_components/input-field";
import { setAccessToken, setRefreshToken } from "@/util/cookie";
// import { isAccessTokenExpired } from "@/util/token-manage";

export default function LoginInput({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // 로그인 정보를 서버로 보내고 JWT를 받아오는 로직
    const response = await fetch("http://10.10.10.12:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data.data.accessToken);
      console.log(data.data);

      if (data.data.accessToken) {
        console.log("여기");
        setAccessToken("accessToken", `${data.data.accessToken}`, {
          path: "/",
          secure: true,
          sameSite: "none",
        }),
        setRefreshToken("refreshToken", `${data.data.refreshToken}`, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
      }
      // console.log(isAccessTokenExpired("accessToken")); // 콘솔에 출력하여 확인할 수 있습니다.
      onLogin();
    } else {
      alert("로그인 실패");
    }

  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      {/* <!-- 아이디 입력 --> */}
      <div className="input-item">
        <label>등록한 이메일을 입력해주세요</label>
        <br />
        <InputField
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* <!-- 비밀번호 입력 --> */}
      <div className="input-item">
        <label>등록한 비밀번호를 입력해주세요</label>
        <br />
        <InputField
          type="password"
          placeholder=" 패스워드"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* <!-- 로그인 버튼 --> */}
      <button className="login-button" onClick={handleLogin}>
        로그인
      </button>
    </>
  );
}