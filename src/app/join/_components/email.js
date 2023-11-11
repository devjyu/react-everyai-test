import InputField from "@/_components/input-field";
import { useState, useEffect, useRef } from "react";
import Timer from "../../email-check/_components/timer";

export default function EmailInput({ value, onChange }) {
  const [email, setEmail] = useState(value || "");
  const [code, setCode] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isButtonChanged, setIsButtonChanged] = useState(false);
  const [isEmailAuthenticationSent, setIsEmailAuthenticationSent] =
    useState(false);
  const [isEmailAuthenticationSuccess, setIsEmailAuthenticationSuccess] =
    useState(false);
  const [isVerificationCodeExpired, setIsVerificationCodeExpired] =
    useState(false);
  const [expirationTime, setExpirationTime] = useState(null);
  const [isVerificationConfirmed, setIsVerificationConfirmed] = useState(false);

  const handleEmailValidation = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      setEmailValidationMessage("유효한 이메일 주소를 입력하세요.");
      setIsEmailVerified(false); // 유효하지 않은 경우 상태 변경
    } else {
      setEmailValidationMessage("형식에 맞는 이메일입니다.");
      setIsEmailVerified(false); // 유효한 경우 상태 변경
    }
    setIsButtonChanged(false);
    setIsEmailAuthenticationSent(false); // 중복확인 성공 시 인증번호 전송 상태
    setIsEmailAuthenticationSuccess(false); // 이메일 유효성 검사 시 성공 상태를 재설정합니다.
    setIsVerificationCodeExpired(false); // 이메일 유효성 검사 시 유효시간 만료 상태를 재설정합니다.
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    onChange(newEmail); // 부모 컴포넌트에서 전달받은 onChange 함수 호출
    setEmail(e.target.value);
    handleEmailValidation(e.target.value);
  };

  // 중복확인 fetch
  const handleEmailDuplication = async () => {
    handleEmailValidation(email); // 요청을 보내기 전에 이메일을 유효성 검사합니다.
    if (emailValidationMessage.includes("형식에 맞는 이메일입니다.")) {
      // 이메일이 유효한 경우 이메일 중복 확인을 진행합니다.
      const response = await fetch(
        "http://10.10.10.12:8080/api/v1/auth/email-duplication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      console.log(response);
      if (response.ok) {
        // 이메일이 사용 가능한 경우 메시지를 표시합니다.
        alert("사용 가능한 이메일입니다.");
        setIsEmailVerified(true); // 성공 시 이메일을 더 이상 수정할 수 없게 설정
        setIsButtonChanged(true);
        // 여기서 타이머 시작
      } else {
        // 이메일이 사용할 수 없는 경우 오류 메시지를 표시합니다.
        const responseData = await response.json();
        alert(`오류: ${response.status} - ${responseData.error}`);
      }
    } else {
      alert("이메일을 양식에 맞게 작성해주세요");
    }
  };

  const handleEmailAuthentication = async () => {
    const data = {
      email: email,
      type: "SIGN_UP", // Assuming SIGN_UP is a string
    };
    // 인증번호 전송 로직
    const response = await fetch(
      "http://10.10.10.12:8080/api/v1/auth/email-authentication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    console.log("이메일 인증번호 전송", response);

    if (response.ok) {
      alert("인증번호 전송 완료");
      setIsEmailAuthenticationSent(true);
      setIsEmailAuthenticationSuccess(true);
    } else {
      const responseData = await response.json();
      alert(`오류: ${response.status} - ${responseData.error}`);
    }
  };

  const handleVerificationCodeConfirmation = async () => {
    // 인증번호 확인 로직
    // http://localhost:8080/api/v1/auth/authentication-code
    // 이 부분을 실제 서버 API에 맞게 수정해야 합니다.
    const response = await fetch(
      "http://10.10.10.12:8080/api/v1/auth/authentication-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Adjust the body payload based on your server requirements
        body: JSON.stringify({ email, code }),
      }
    );

    console.log("인증번호 확인", response);

    if (response.ok) {
      alert("인증번호 확인 완료");
      setIsVerificationConfirmed(true);
    } else {
      const responseData = await response.json();
      alert(`오류: ${response.status} - ${responseData.error}`);
    }
  };

  const handleTimeout = () => {
    // 여기서 타임아웃 시 수행할 작업을 추가
    alert("타임 아웃!");
    location.reload();
  };

  return (
    <div className="email">
      <label className="name">
        이메일 <span className="star">*</span>
      </label>
      <div className="email-send">
        <InputField
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmailChange}
          disabled={isEmailVerified || isEmailAuthenticationSent}
        />
        {isEmailVerified ? (
          <button
            type="button"
            className="email-send-button"
            onClick={
              isEmailAuthenticationSent ? undefined : handleEmailAuthentication
            }
            disabled={isEmailAuthenticationSent}
          >
            {isEmailAuthenticationSent ? "전송 완료" : "인증번호 전송"}
          </button>
        ) : (
          <button
            type="button"
            className="email-send-button"
            onClick={handleEmailDuplication}
          >
            {isButtonChanged ? "인증번호 전송" : "중복 확인"}
          </button>
        )}
      </div>
      {emailValidationMessage && (
        <p
          className={`message ${
            emailValidationMessage.includes("형식에 맞는 이메일입니다.")
              ? "success"
              : "error"
          }`}
        >
          {emailValidationMessage}
        </p>
      )}
      {isEmailAuthenticationSuccess && (
        <>
          <div className="email-check">
            <InputField
              type="text"
              placeholder="인증번호를 입력해주세요"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={isVerificationConfirmed}
            />
            <button
              type="button"
              className="email-check-button"
              onClick={handleVerificationCodeConfirmation}
              disabled={isVerificationConfirmed}
            >
              확인
            </button>
          </div>
          {/* <div onTimeout={handleTimeout}></div> */}
          {!isVerificationConfirmed && <Timer onTimeout={handleTimeout} />}
        </>
      )}
    </div>
  );
}
