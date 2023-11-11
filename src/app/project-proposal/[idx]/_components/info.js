import Image from "next/image";

export default function Info({ data }) {
    return (
        <>
            <div className="inner-container-body-profile-image">
                <Image className="image" src={data.userProfileUrl} alt="placeholder" width={150} height={150} />
            </div>
            <div className="inner-container-body-price">
                <p className="info-title">제안 금액</p>
                <div>
                    <span className="font-25-bold">{data.price}</span>
                </div>
            </div>
            <div className="inner-container-body-description">
                <p className="info-title">제안 내용</p>
                <div>
                    <span>{data.description}</span>
                </div>
            </div>
            <div className="inner-container-body-ready">
                <p className="info-title">전문가 자기소개</p>
                <div>
                    <span>{data.introduction}</span>
                </div>
            </div>
            <div className="inner-container-body-duration">
                <p className="info-title">작업 일수</p>
                <div>
                    <span>{data.workDay}</span>
                </div>
            </div>
        </>
    );
}
