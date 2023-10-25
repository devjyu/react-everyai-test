export default function JoinSuccessText() {
    return(
        <div className="join-success-text">
            <p>Congraulations to <span className="nickname">#5555</span></p>
            <p className="success-text">
                회원가입에 성공하였습니다!
            </p>
            <p className="success-nickname-text">
                앞으로 활동하게 될 닉네임은<br /> <span className="nickname">#5555</span>입니다
            </p>
        </div>
    );
}