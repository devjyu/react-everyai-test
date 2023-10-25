export default function OrderDetail() {
    return (
        <>      
        <div id="payment-order-list">
            <div class="payment-main-title">
                <span>구매한 상품</span>
            </div>
            {/* <!-- 주문내역 --> */}
            <div id="payment-order-list-detail">
                {/* <img id="payment-order-img" src="img/payment/example.png" alt="결제 이미지" width="30%" /> */}
                <div id="payment-order-title">
                    <div class="font-12">&#123;서비스 번호&#125;&#123;결제완료일시&#125;</div>
                    <div><span class="font-15">{"'"} 로고 디자인{"'"} 심플, 감각적인 로고를 제작해 드립니다.</span></div>
                    <div id="payment-company">
                        <div id="payment-company-img">
                            {/* <img id="payment-company-profile" src="img/payment/example.png" alt="결제 이미지" /> */}
                        </div>
                        <span>하늘 그리다</span>
                        <button>문의하기</button>
                    </div>
                    <span class="font-12">작업물 도착예정|&#123;<span class="font-blue">결제완료 일시+작업기간&#125;</span></span>
                </div>
            </div>
            {/*  결제금액  */}
            <div class="amount-payment">
                <div>결제 금액</div>
                <hr class="hr-2" />
                <div class="all-price">
                    <div class="font-25">총 결제금액</div>
                    <div><span class="font-blue font-25">&#123;총 결제금액&#125;</span></div>
                </div>
            </div>
        </div>
        </>

    );
}
