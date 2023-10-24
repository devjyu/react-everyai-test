import InputField from "@/app/_components/inputfield";

export default function JoinEmail() {
    return (
        <>
            <div className="email">
                <label className="name">이메일 <span className="star">*</span></label>
                <div className="email-send">
                    <InputField type="email" placeholder="이메일을 입력해주세요" />
                    <button className="email-send-button">인증번호 전송</button>
                </div>
                <div className="email-check">
                    <InputField type="text" placeholder="인증번호를 입력해주세요" />
                    <button className="email-check-button">확인</button>
                </div>
            </div>            
        </>
    );
}