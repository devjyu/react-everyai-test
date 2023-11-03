// PasswordField.jsx
import React from "react";
import PropTypes from "prop-types";
import InputField from "@/_components/input-field";

const PasswordField = ({ value, onChange, passwordValidationMessage }) => {
  return (
    <div className="password">
      <label>
        비밀번호 <span className="star">*</span>
      </label>
      <div>
        <InputField
          type="password"
          name="password"
          placeholder="8자리 이상의 영문(대문자), 숫자, 특수문자 조합"
          value={value}
          onChange={onChange}
        />
        {passwordValidationMessage && (
          <p
            className={`message ${
              passwordValidationMessage.includes("올바른")
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
          name="passwordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
        />
      </div>
      {/* Additional password confirm logic can be added here */}
    </div>
  );
};

PasswordField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  passwordValidationMessage: PropTypes.string.isRequired,
};

export default PasswordField;