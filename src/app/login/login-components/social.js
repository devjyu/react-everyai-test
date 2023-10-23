import DashboardLayout from '@/app/login/layout'

export default function social() {
    return (
        <>
            {/* <!-- 소셜 로그인 --> */}
            <div className="social-login">
                <button id="login-kakao">카카오 로그인</button>
                <button id="login-naver">네이버 로그인</button>
                <button id="login-google">구글 로그인</button>
            </div>
        </>
    )
}



