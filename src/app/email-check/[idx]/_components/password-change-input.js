import InputField from "@/_components/input-field";

export default function PasswordChangeInput() {
  return (
    <div class="password">
        <label className="name">비밀번호를 입력해주세요 <span className="star">*</span></label>
        <div className="email-send">
            <InputField type="email" placeholder="이메일을 입력해주세요" />
        </div>
        <label className="name">비밀번호를 확인해주세요 <span className="star">*</span></label>
        <div className="email-check">
            <InputField type="text" placeholder="인증번호를 입력해주세요" />
        </div>
        <button className="change-button">비밀번호 변경</button>
    </div>
  );
}
