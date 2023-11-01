export default function MyPageSellInfo() {
    return(
        <>
            {/* <!--판매 정보--> */}
            <div className="mypage-sell-info">
                <div className="mypage-sell-info-big-title">
                    <div className='sell-info'>판매정보</div>
                    <div className='all-sell-info'>전체보기</div>
                </div>
                <div className="mypage-sell-info-count">
                    <div className="mypage-sell-info-count-number">
                        <div>3</div>
                    </div>
                    <div className="mypage-sell-info-count-line">­―</div>
                    <div className="mypage-sell-info-count-number">
                        <div>8</div>
                    </div>
                    <div className="mypage-sell-info-count-line">―</div>
                    <div className="mypage-sell-info-count-number">
                        <div>3</div>
                    </div>
                    <div className="mypage-sell-info-count-line">―</div>
                    <div className="mypage-sell-info-count-number">
                        <div>0</div>
                    </div>
                </div>

                <div className="mypage-sell-info-count-title">
                    <div className="mypage-sell-info-count-title-1">작업 완료</div>
                    <div className="mypage-sell-info-count-title-2">작업 진행중</div>
                    <div className="mypage-sell-info-count-title-3">작업물 발송</div>
                    <div className="mypage-sell-info-count-title-4">수정 요청</div>
                </div>
                <div className="mypage-sell-issue">
                    <div className="mypage-sell-issue-delay">
                        <div>발송지연</div>
                        <div>0건</div>
                    </div>
                    <div className="mypage-sell-issue-delay">
                        <div>거래취소</div>
                        <div>0건</div>
                    </div>
                </div>
            </div>
        </>
    );
}