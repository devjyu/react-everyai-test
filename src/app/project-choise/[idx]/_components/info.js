import Image from "next/image";

export default function Info({ data }) {
    return (
        <>
            <div className="inner-container-body">
                <div className="inner-container-body-profile-image">
                    <Image src={data.ResProject.clientProfileUrl} alt="placeholder" width={500} height={300} />
                    <div>{data.ResProject.userNickname}</div>
                </div>

                <div className="inner-container-body-price">
                    <p className="info-title">예산</p>
                    <div>
                        {data.ResProject.price}
                    </div>
                </div>
                <div className="inner-container-body-description">
                    <p className="info-title">프로젝트 설명</p>
                    <div className='background-f1'>
                        {data.ResProject.description}
                    </div>
                </div>
                <div className="inner-container-body-ready">
                    <p className="info-title">프로젝트 준비 사항</p>
                    <div className='background-f1'>
                        {data.ResProject.projectPreparation}
                    </div>
                </div>
                <div className="inner-container-body-duration">
                    <p className="info-title">작업 기간</p>
                    <div className='background-f1'>
                        {data.ResProject.workDay}
                    </div>
                </div>
            </div>
            <div className="inner-container-body-image">
                <p className="info-title">프로젝트 설명 사진</p>
                <div className="project-explanation">
                    <div>
                        <Image src={data.ResProject.thumbnailUrl} alt="placeholder" width={150} height={150} />
                    </div>
                    {data.ResProject.imageUrlList.map((image, index) => (
                        <div key={index}>
                            <Image src={image.imageUrl} alt="placeholder" width={150} height={150} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
