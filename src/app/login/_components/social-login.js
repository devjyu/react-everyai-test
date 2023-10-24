import Image from "next/image";

export default function SocialLogin() {
    return (
        <>
            {/* <!-- 소셜 로그인 --> */}
            <div className="social-login">
                <div className="kakao-login">
                    <Image src="/kakao-logo.png" width="50" height="50" />
                    <button className="kakao-login-button">카카오 로그인</button>
                </div>
                <div className="naver-login">
                    <Image src="/naver-logo.png" width="50" height="50" />
                    <button className="naver-login-button">네이버 로그인</button>
                </div>
                <div className="google-login">
                    <Image src="/google-logo.png" width="50" height="50" />
                    <button className="google-login-button">구글로 로그인</button>
                </div>
            </div>
        </>
    )
}



