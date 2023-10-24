import InputField from "@/_components/input-field";

export default function PasswordChangeInput() {
  return (
    // <div className="password">
    //   <label>
    //     비밀번호 <span className="star">*</span>
    //   </label>
    //   <div>
    //     <InputField
    //       type="password"
    //       placeholder="8자리 이상의 영문(대문자), 숫자, 특수문자 조합"
    //     />
    //   </div>
    //   <div>
    //     <InputField
    //       type="password"
    //       placeholder="비밀번호를 다시 입력해주세요"
    //     />
    //   </div>
    // </div>
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
