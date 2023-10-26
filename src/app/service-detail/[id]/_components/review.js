export default function Review() {
  return (
    <div className="content-detail_container review-container">
      <div className="content-detail_container-title review-title">
        <div className="review-title-text">리뷰</div>
        <div className="review-title-rating">
          <div className="review-title-rating-score">{5.0}&nbsp;</div>
          <div className="review-title-rating-star">
            {/* <img src="img/star.png" alt="리뷰 별" />
            <img src="img/star.png" alt="리뷰 별" />
            <img src="img/star.png" alt="리뷰 별" />
            <img src="img/star.png" alt="리뷰 별" />
            <img src="img/star.png" alt="리뷰 별" /> */}
          </div>
          <div className="review-title-rating-count">&#123;42&#125;건</div>
        </div>
      </div>
      <div className="review-content">
        <div className="review-content-photo_review">
          <div className="review-content-photo_review-text">
            포토리뷰 &#123;12,345&#125;건
          </div>
          <div className="review-content-photo_review-img">
            &lt; 사진 사진 사진 사진 사진&gt;
          </div>
        </div>
        <div className="review-content-all_review">
          <div className="review-content-all_review-text">
            전체리뷰 &#123;12,345,678&#125;건
          </div>
          <div className="review-content-all_review-content">
            <div className="review-content-all_review-content-detail">
              <div className="review-content-all_review-content-detail-user_profile">
                {/* <img src="img/detail/detail-service.png" alt="리뷰 프로필사진" /> */}
              </div>
              <div class="review-content-all_review-content-detail-user_review">
                <div>
                  <div>&#123;올빼미가 좋은 토끼&#125; | &#123;23.09.18&#125;</div>
                </div>
                <div>&#123;5.0&#125; 별 별 별 별 별</div>
                <div>작업일 : &#123;0&#125;일 | 주문 금액 : &#123;xx&#125;원</div>
                <div>
                  올빼미 그림 너무 귀엽고 예뻐요! 작업속도도 빠르고 만족도도
                  높습니다. 무엇보다 대표님 짱 친절! 기분좋은 구매였습니다.
                </div>
              </div>
            </div>
            <div className="review-content-all_review-reply">
              <div className="review-content-all_review-reply-arrow">
                {/* <img src="img/detail/detail-review-arrow.png" /> */}
              </div>
              <div className="review-content-all_review-reply-content">
                <div className="review-content-all_review-reply-username">
                  &#123;올빼미 사진관&#125; | &#123;23.09.25&#125;
                </div>
                <div className="review-content-all_review-reply-detail">
                  <p>
                    안녕하세요 대표님!<br />
                    소중한 후기 작성해주셔서 감사드립니다<br />
                    제작하신 로고 디자인이 고객님의 비즈니스에 도움이 되기를
                    바라며,<br />
                    더 나은 브랜드 아이덴티티를 위해 계속 노력하는 올빼미
                    사진관이 되겠습니다.<br />
                    <br />
                    * 2023년 로고 브랜드 소비자 만족도 1위 대상<br />
                    * 대기업경력 디자이너의 브랜딩회의 서비스
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-show-button">
        <button>전체보기</button>
      </div>
    </div>
  );
}
