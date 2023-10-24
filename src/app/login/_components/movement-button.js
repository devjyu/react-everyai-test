import Link from 'next/link'

export default function MovementButton() {
    return (
        // {/* <!-- 회원가입 / 찾기 링크 --> */}
        // {/* <!-- class 이름 수정 필요 --> */}
        <div className="movement">
            <Link href="/join-start">회원가입 </Link>
            <Link href="/email-check">패스워드 변경 </Link>
        </div>
    );
}