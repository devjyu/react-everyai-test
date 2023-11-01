import Image from "next/image";

export default function MyPageServiceList() {
    return(
        <>
            {/* <!--서비스 관리--> */}
            <div className="mypage-service">
                <div className="mypage-service-list">
                    <Image src="https://via.placeholder.com/300" alt='' width={30} height={30} />
                    <div>내 서비스</div>
                </div>
                <div className="mypage-service-list">
                    <Image src="https://via.placeholder.com/300" alt='' width={30} height={30} />
                    <div>휴가 설정</div>
                </div>
                <div className="mypage-service-list">
                    <Image src="https://via.placeholder.com/300" alt='' width={30} height={30} />
                    <div>수익관리</div>
                </div>
                <div className="mypage-service-list">
                    <Image src="https://via.placeholder.com/300" alt='' width={30} height={30} />
                    <div>나의 광고 관리</div>
                </div>
                <div className="mypage-service-list">
                    <Image src="https://via.placeholder.com/300" alt='' width={30} height={30} />
                    <div>광고 신청</div>
                </div>
                <div className="mypage-service-list">
                    <Image src="https://via.placeholder.com/300" alt='' width={30} height={30} />
                    <div>나의 전문가 등급</div>
                </div>
            </div>
        </>
    );
}