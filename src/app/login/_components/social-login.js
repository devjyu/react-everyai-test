import Image from "next/image";

export default function SocialLogin() {
    const gokakaoLogin = () => {
        location.href = `http://10.10.10.12:8080/login/kakao`;
    }

    const goNaverLogin = () => {
        location.href = `http://10.10.10.12:8080/login/naver`;
    }

    const goGoogleLogin = () => {
        location.href = `http://10.10.10.12:8080/login/google`;
    }

    return (
        <>
            {/* <!-- 소셜 로그인 --> */}
            <div className="social-login">
                <Image src={"/카카오 로그인.png"} alt="카카오로고" width="350" height="50" onClick={gokakaoLogin}/>
                <Image src={"/네이버 로그인.png"} alt="네이버로고" width="350" height="50" onClick={goNaverLogin}/>
                <Image src={"/구글 로그인.png"} alt="구글로고" width="350" height="50" onClick={goGoogleLogin} />
            </div>
        </>
    )
}