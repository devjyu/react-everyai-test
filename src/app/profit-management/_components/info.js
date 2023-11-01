export default function ProfitManagementInfo() {
    return(
        <div className="inner-container-body">
            {/* <!-- 상단 수익금, 출금 정보 --> */}
            <div className="profit-status">
                {/* <!-- 수익금, 출금 정보 상단 --> */}
                <div className="profit-status-top">
                    <div className="profit-text">출금 가능 수익금</div>
                    <div className="top-price">800,000원</div>
                </div>
                {/* <!-- 수익금, 출금 정보 중간부 --> */}
                <div className="profit-status-middle">
                    <div className="profit-status-middle-left">
                        <div className="profit-text">예상 수익금</div>
                        <div className="middle-price">135,700원</div>
                    </div>
                    <div className="profit-status-middle-right">
                        <div className="profit-text">출금 완료 수익금</div>
                        <div className="middle-price">135,700원</div>
                    </div>
                </div>
                {/* <!-- 수익금, 출금 정보 하단 --> */}
                <div className="profit-status-bottom">
                    <div className="profit-stauts-bottom-account-body">
                        <div className="profit-stauts-bottom-account-body-title">
                            <span>출금 정보</span>
                        </div>
                        <div>
                            <span>신한은행 43039*******(이름)</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hr'/>
        </div>
    );
}