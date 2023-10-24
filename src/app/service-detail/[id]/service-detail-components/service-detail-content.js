export default function Content() {
    return (
        <div className="content-container">
            <div className="title-container">
                <div className="title-1-category">&#123;사진&#125; &gt; &#123;AI그림&#125;</div>
                <div className="title-2">
                    <div className="title-2-level">LEVEL &#123;3&#125;</div>
                    <div className="title-2-heart">
                        <div className="title-2-heart-img">
                            {/* <img src="img/heart.png" alt="하트 이미지" /> */}
                        </div>
                        <div className="title-2-heart-count">&nbsp;&#123; 12, 345 &#125;</div>
                    </div>
                </div>
                <div className="title-3-title">&#123;올빼미 사진관&#125;</div>
            </div>
            <hr />
            <div className="option-detail-container">
                <div className="option-detail-price">
                    <p className="option-detail-price-1">&#123;149,000&#125;원</p>
                    <p className="option-detail-price-2">&#123;VAT포함&#125;</p>
                </div>
                <div className="option-detail-condition">
                    <p className="option-detail-condition-1">
                    &#123;4년 차 대기업경력 디자이너 2인참여&#125;
                    </p>
                    <p className="option-detail-condition-2">
                        3일이내 제작 | 수정 횟수 3회까지 가능
                    </p>
                </div>
            </div>
        </div>
    );
}
