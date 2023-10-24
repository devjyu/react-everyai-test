export default function SubmainServiceCard() {
    return (
        // <!-- 서비스 리스트 -->
        <div className="service-card-list">
            {/* <!-- 개별 서비스 --> */}
            <div className="service-card-list-inner-box">

                <div className="service-card">
                    {/* <!-- 서비스 이미지  --> */}
                    <div className="service-image">
                        {/* <img src="img/square.png" alt="게시물 이미지" /> */}
                        <div className="image-icon">icon</div>
                    </div>

                    {/* <!-- 서비스 작성자 --> */}
                    <div className="service-writer">
                        <span id="badge">&#123;MASTER&#125;</span>
                        <span className="font-bold">&#123;하늘 그리다&#125;</span>
                    </div>

                    {/* <!-- 서비스 제목 --> */}
                    <div className="service-title">
                        <span>&apos;로고디자인&apos; 심플, 감각적인 로고를 제작해 드립니다.</span>
                    </div>

                    {/* <!-- 서비스 가격 --> */}
                    <div className="service-price-box">
                        <div className="price-icon">&#123;icon&#125;</div>
                        <span className="price">&#123;50,000&#125;~</span>
                    </div>

                    {/* <!-- 서비스 평가 --> */}
                    <div className="service-rating-box">
                        <div className="rating-score-box">
                            <div className="rating-icon">&#123;icon&#125;</div>
                            <span className="rating-score">&#123;4.9&#125;</span>
                        </div>
                        {/* <!-- 평가 점수와 갯수 분리 "|" --> */}
                        |
                        <div className="rating-count"><span>&#123;137&#125;</span>개의 평가</div>
                    </div>
                </div>
            </div>
        </div>

    );
}
