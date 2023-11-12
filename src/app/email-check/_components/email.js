import { useState } from "react";
import InputField from "@/_components/input-field";

export default function EmailInputs() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleEmailValidation = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      setEmailValidationMessage("유효한 이메일 주소를 입력하세요.");
      setIsButtonDisabled(false); // 이메일이 유효하지 않으면 버튼 비활성화
    } else {
      setEmailValidationMessage("형식에 맞는 이메일입니다.");
      setIsButtonDisabled(true); // 이메일이 유효하면 버튼 활성화
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleEmailValidation(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleEmailSend = () => {
    // Add logic for handling email send
    console.log("Email send logic here");
  };

  const handleCodeConfirmation = () => {
    // Add logic for handling code confirmation
    console.log("Code confirmation logic here");
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
        />
        <button
          type="button"
          className="email-send-button"
          onClick={handleEmailSend}
          disabled
        >
          {/* Add button text or icon */}
          중복확인
        </button>
      </div>
      {emailValidationMessage !== "" && (
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
      <div className="email-check">
        <InputField
          type="text"
          placeholder="인증번호를 입력해주세요"
          value={code}
          onChange={handleCodeChange}
        />
        <button
          type="button"
          className="email-check-button"
          onClick={handleCodeConfirmation}
        >
          {/* Add button text or icon */}
          확인
        </button>
      </div>
      <button type="submit" className="check-button" disabled>
        이메일 확인하기
      </button>
    </div>
  );
}
