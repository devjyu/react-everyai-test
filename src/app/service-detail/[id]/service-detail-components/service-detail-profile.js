export default function Profile() {
    return (
     
      <div className="content-detail_container profile-container">
        {/* <img src="img/detail/detail-preview.png" alt="프로필 이미지" class="profile-image" /> */}
        <div className="content-detail_container-title profile-title">
          <div className="profile-title-1">
            <div>LEVEL &#123;3&#125;</div>
          </div>
          <div className="profile-title-2">&#123;올빼미 사진관&#125;</div>
        </div>
        <div className="profile-content">
          <div>평균 응답 시간 : &#123;30분 이내&#125;</div>
          <div className="profile-content-status">
            <div class="profile-content-status-detail right-bold">
              <span>&#123;54&#125;건</span>
              <p>판매건수</p>
            </div>
            <div className="profile-content-status-detail">
              <span>&#123;5.0&#125;</span>
              <p>평점</p>
            </div>
          </div>
        </div>
      </div>
    );
}
