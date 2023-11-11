import Image from "next/image";

export default function OrderDetail({ data }) {
    const orderNum=String(data.serviceIdx).padStart(6, '0');
    return (
        <>
            <div id="payment-order-list">
                <div class="payment-main-title">
                    <span>구매한 상품</span>
                </div>
                {/* <!-- 주문내역 --> */}
                <div className="payment-order-list-detail">
                    <Image src={data.serviceThumbnailUrl} alt="결제 이미지" width={150} height={150} />
                    <div className="payment-order-title">
                        <div className="font-12">{orderNum} | {data.paymentDay}</div>
                        <div><span className="font-15">{data.serviceTitle}paymentDay</span></div>
                        <div className="payment-company">
                            <div className="payment-company-img">
                                <Image src={data.expertProfileUrl} className="profile-image" alt="프로필 이미지" width={50} height={50} />
                                <span>{data.expertName}</span>
                                <button>문의하기</button>
                            </div>
                        </div>
                        <span className="font-12">작업물 도착예정|{data.workDay}</span>
                    </div>
                </div>
                {/*  결제금액  */}
                <div className="amount-payment">
                    <div>결제 금액</div>
                    <hr className="hr-2" />
                    <div className="all-price">
                        <div className="font-25">총 결제금액</div>
                        <div><span className="font-blue font-25">{data.paymentPrice}원</span></div>
                    </div>
                </div>
            </div>
        </>

    );
}
