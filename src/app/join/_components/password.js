import InputField from "@/_components/input-field";
import { useState } from "react";

export default function PasswordInput({ value, onChange }) {
  const [password, setPassword] = useState(value || "");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  const handlePasswordValidation = (input) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(input)) {
      setPasswordValidationMessage("올바른 비밀번호 형식이 아닙니다.");
    } else {
      setPasswordValidationMessage("올바른 비밀번호 형식입니다.");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onChange(newPassword);
    setPassword(newPassword);
    handlePasswordValidation(newPassword);

    setPasswordMatchMessage(
      newPassword === passwordConfirm
        ? "비밀번호가 일치합니다."
        : "비밀번호가 일치하지 않습니다."
    );
  };

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);

    // Check password match
    setPasswordMatchMessage(
      password === newPasswordConfirm
        ? "비밀번호가 일치합니다."
        : "비밀번호가 일치하지 않습니다."
    );
  };

  return (
    <div className="password">
      <label>
        비밀번호 <span className="star">*</span>
      </label>
      <div>
        <InputField
          type="password"
          placeholder="8자리 이상의 영문(대문자), 숫자, 특수문자 조합"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordValidationMessage && (
          <p
            className={`message ${
              passwordValidationMessage.includes("올바른 비밀번호 형식입니다.")
                ? "success"
                : "error"
            }`}
          >
            {passwordValidationMessage}
          </p>
        )}
      </div>
      <div>
        <InputField
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          disabled={
            !passwordValidationMessage.includes("올바른 비밀번호 형식입니다.")
          }
        />
        {passwordMatchMessage && passwordConfirm && (
          <p
            className={`message ${
              passwordMatchMessage.includes("비밀번호가 일치합니다.") ? "success" : "error"
            }`}
          >
            {passwordMatchMessage}
          </p>
        )}
      </div>
      {/* 추가적인 비밀번호 확인 로직을 여기에 추가할 수 있습니다 */}
    </div>
  );
}
