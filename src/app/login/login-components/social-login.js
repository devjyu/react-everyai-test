import Image from "next/image";
import KakaoLogin from "@/app/asset/kakao-logo.png";
import NaverLogin from "@/app/asset/naver-logo.png";
import GoogleLogin from "@/app/asset/google-logo.png";

export default function SocialLogin() {
    return (
        <>
            {/* <!-- 소셜 로그인 --> */}
            <div className="social-login">
                <div className="kakao-login">
                    <Image src={KakaoLogin} />
                    <button className="kakao-login-button">카카오 로그인</button>
                </div>
                <div className="naver-login">
                    <Image src={NaverLogin} />
                    <button className="naver-login-button">네이버 로그인</button>
                </div>
                <div className="google-login">
                    <Image src={GoogleLogin} />
                    <button className="google-login-button">구글로 로그인</button>
                </div>
            </div>
        </>
    )
}



