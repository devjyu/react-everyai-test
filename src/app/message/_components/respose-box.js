export default function MessageResponseBox() {
    return(
        <div className="answer-status">
            <span className="message-response">메시지 응답 현황</span>

            {/* <!-- 내부 박스 --> */}
            <div className="answer-status-box">
                {/* <!-- 메시지 응답률 박스 --> */}
                {/* <!-- 이 DIV에만 오른쪽 실선 적용되서 style 직접 적용시켰습니다. --> */}
                <div className="answer-status-rating">
                    <span className="rating">96%</span>
                    <span className='rating-text'>메시지 응답률</span>
                </div>

                {/* <!-- 평균 응답시간 박스 --> */}
                <div className="answer-status-time">
                    <span className="time">10분 이내</span>
                    <span className='time-text'>평균 응답 시간</span>
                </div>
            </div>
        </div>
    );
}