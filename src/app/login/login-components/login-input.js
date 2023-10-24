import InputField from "@/app/_components/input-field";

export default function LoginInput() {
    return(
    // <!-- 입력 박스 -->
    <form className="input-box">
        {/* <!-- 아이디 입력 --> */}
        <div className="input-item">
            <label>등록한 아이디를 입력해주세요</label><br />
            <InputField type="text" placeholder=" 아이디" />
        </div>
        {/* <!-- 비밀번호 입력 --> */}
        <div className="input-item">
            <label>등록한 비밀번호를 입력해주세요</label><br />
            <InputField type="password" placeholder=" 패스워드" />
        </div>
        {/* <!-- 로그인 버튼 --> */}
        <button className="login-button">로그인</button>
    </form>
    );
}