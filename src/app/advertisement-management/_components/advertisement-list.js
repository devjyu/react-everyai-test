
export default function AdvertisementList({ data }) {

    return (
        <>
            {data.advertisementList.map((advertisement, index) => (
                <div class="my-ad-manage-content" key={index}>
                    <div class="my-ad-manage-type">
                        <div class="my-ad-manage-type-1">{advertisement.type}</div>
                        <div class="my-ad-manage-type-2">
                            {advertisement.isEnd ? '완료' : '진행'}
                        </div>
                    </div>
                    <div class="my-ad-manage-ad_term">{advertisement.startDate}~{advertisement.endDate}</div>
                    <div class="my-ad-manage-service_name">{advertisement.title}</div>
                    <div class="my-ad-manage-price">결제 금액 : {advertisement.price}</div>
                </div>
            ))}
        </>
    );
}
