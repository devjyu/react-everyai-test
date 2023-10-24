export default function JoinEmail() {
    return (
        <>
            <div className="email">
                <label className="name">이메일 <span className="star">*</span></label>
                <div className="email-send">
                    <input type="email" placeholder="이메일을 입력해주세요" />
                    <button className="email-send-button">인증번호 전송</button>
                </div>
                <div className="email-check">
                    <input type="text" placeholder="인증번호를 입력해주세요" />
                    <button className="email-check-button">확인</button>
                </div>
            </div>            
        </>
    );
}