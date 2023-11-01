export default function ProfitManagementLog() {
    return(
        <div className="profit-log">
            {/* <!-- 제목 (버튼) --> */}
            <div className="profit-log-header">
                <button>
                    <span className="profit-log-text">수익금 내역</span>
                </button>
                <button>
                    <span className="profit-log-text">출금 내역</span>
                </button>
            </div>

            {/* <!-- 바디 --> */}
            <div className="profit-log-body">
                {/* <!-- 제목 (기간) --> */}
                <div className="log-text">
                    <span>2023년 8월</span>
                </div>
                <hr />

                {/* <!-- 실제 내역들 --> */}
                <div className="profit-log-body-logs">
                    <div className="profit-log-body-logs-top">
                        <div className="time">
                            <span>23.08.13 16:02</span>
                        </div>
                        <div className="profit">
                            <span>2961 원</span>
                        </div>
                    </div>
                    <div className="profit-log-body-logs-bottom">
                        <div className="profit-log-body-logs-bottom-left">
                            <div className="nickname">
                                <span>#41318</span>
                            </div>
                            <div className="real_price">
                            &nbsp;&nbsp;실 거래 금액 : <span>3000</span>원
                            </div>
                        </div>
                        <div className="profit-log-body-logs-bottom-right">
                            <div className="status">완료</div>
                        </div>
                    </div>
                </div>

                {/* <!-- 출금 버튼 --> */}
                <div className="profit-log-body-withdraw-btn">
                    <button>출금하기</button>
                </div>
            </div>
        </div> 
    );
}