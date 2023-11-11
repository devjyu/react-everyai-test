import Image from "next/image";

export default function ExpertInfo({ data, getBadgeClass }) {
   
    return (
        <div className="content-detail_container profile-container">
            <Image
           src={data.expertInfo.profileImage} alt="프로필 이미지" className="detail-profile-image"
           width={150}
           height={150}
            />
            <div className="content-detail_container-title profile-title">
                <div className="profile-title-1">
                    <div className={getBadgeClass(data.expertInfo.expertLevel)}>{data.expertInfo.expertLevel}</div>
                </div>
                <div className="profile-title-2">{data.expertInfo.expertName}</div>
            </div>
            <div className="profile-content">
                <div>평균 응답 시간 : {data.expertInfo.averageResponseTime} 분</div>
                <div className="profile-content-status">
                    <div clclassNameass="profile-content-status-detail right-bold">
                        <span>{data.expertInfo.salesCount} 건</span>
                        <p>판매건수</p>
                    </div>
                    <div className="profile-content-status-detail">
                        <span>{data.expertInfo.averageRating}</span>
                        <p>평점</p>
                    </div>
                </div>
            </div>
        </div>
    )
};