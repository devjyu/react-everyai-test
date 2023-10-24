import InputField from "@/_components/input-field";

export default function JoinPassword() {
  return (
    <div className="password">
      <label>
        비밀번호 <span className="star">*</span>
      </label>
      <div>
        <InputField
          type="password"
          placeholder="8자리 이상의 영문(대문자), 숫자, 특수문자 조합"
        />
      </div>
      <div>
        <InputField type="password" placeholder="비밀번호를 다시 입력해주세요" />
      </div>
    </div>
  );
}
