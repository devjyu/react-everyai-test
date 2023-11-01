import Image from "next/image";
import Link from "next/link";

export default function MyPageSuggest() {
    return(
        <>
            {/* <!--보낸 제안--> */}
            <div className="mypage-suggest">
                <div className="mypage-suggest-title">
                    <div className="mypage-suggest-title-1">보낸 제안</div>
                    <div className="mypage-suggest-title-2">전체보기</div>
                </div>
                <div className="mypage-suggest-content">
                    <div>작업 가능한 프로젝트를 확인하고<br />금액을 제안해주세요</div>
                    <button>프로젝트 보러가기</button>
                </div>
                <div className="mypage-suggest-profile">
                    <Image src="https://via.placeholder.com/300" alt="" width={30} height={30}/>
                    <Link href={'/profile-management'}>
                        <span>전문가 프로필 관리</span>
                    </Link>
                </div>
            </div>
            <hr className="hr-2" />
        </>
    );
}