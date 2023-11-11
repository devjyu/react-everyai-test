
export default function ServiceInfo({ data, getBadgeClass}) {
    return (
        <>
            <div class="content-container">
                <div class="title-container">
                    <div class="title-1-category">{data.serviceInfo.category}  &gt;  {data.serviceInfo.subCategory}</div>
                    <div class="title-2">
                        <div className={getBadgeClass(data.expertInfo.expertLevel)}> {data.expertInfo.expertLevel}  </div>
                        <div class="title-2-heart">
                            <div class="title-2-heart-img">
                                <image src={data.serviceInfo.thumbnailImage} width={30} height={30} alt="" />
                            </div>
                            <div class="title-2-heart-count">&nbsp;{data.serviceInfo.likeCount}</div>
                        </div>
                    </div>
                    <div class="title-3-title">{data.expertInfo.expertName}</div>
                </div>
                <hr />
            
            <div class="option-detail-container">
                <div class="option-detail-price">
                    <p class="option-detail-price-1">{data.serviceInfo.servicePrice}원</p>
                    <p class="option-detail-price-2">(VAT포함)</p>
                </div>
                <div class="option-detail-condition">
                    <p class="option-detail-condition-1">
                        {data.serviceInfo.serviceDescription}
                    </p>
                    <p class="option-detail-condition-2">
                        {data.serviceInfo.workingDay}일이내 제작 | 수정 횟수 {data.serviceInfo.revisions}회까지 가능
                    </p>
                </div>
            </div>
</div>
        </>
    )
};