export default function LoginInput() {
    return(
    // <!-- 입력 박스 -->
    <div className="input-box">
        {/* <!-- 아이디 입력 --> */}
        <div className="input-item">
            <label>등록한 아이디를 입력해주세요</label><br />
            <input type="text" placeholder=" 아이디" />
        </div>
        {/* <!-- 비밀번호 입력 --> */}
        <div className="input-item">
            <label>등록한 비밀번호를 입력해주세요</label><br />
            <input type="password" placeholder=" 패스워드" />
        </div>
        {/* <!-- 로그인 버튼 --> */}
        <button className="login-button">로그인</button>
    </div>
    );
}