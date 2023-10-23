import Image from "next/image";
import styles from '@/app/page.module.css';
import "./main.css";

export default function Home() {
  return (
    <div className="container">
      <div className="main-inner-box">
        {/* <!-- 카테고리  --> */}
        {/* <!-- 사진수정 필요 --> */}
        <div classNames="main-inner-center-box">
          <div className="main-category-box">
            <div className="main-category">
              <Image className="main-category-img" src="" />
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
            <div class="main-category">
              <img class="main-category-img" src="img/logo.png"></img>
              <div class="main-category-name">IT 프로그래밍</div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 광고 배너박스 --> */}
      {/* <!-- 수진수정 필요 --> */}
      <div class="main-banner-box">
        <div class="main-inner-banner-box">
          <div>광고배너</div>
        </div>
      </div>
      {/* <!-- 서비스 추천 박스 --> */}
      <div class="main-service-box">
        <div class="main-inner-service-box">
          <div class="main-inner-service-recommand-box">
            <div class="main-how-recommand">
              이런 서비스는 어때요?
            </div>
            <div class="main-ai-recommand">
              <button class="ai-recommand-button">ai추천</button>
            </div>
          </div>
          <div class="main-recommand-box">
            <div class="main-inner-service">
              <div class="main-recommand">
                <img class="main-recommand-img" src="img/logo.png"></img>
                <div class="main-recommand-name">IT 프로그래밍</div>
              </div>
              <div class="main-recommand">
                <img class="main-recommand-img" src="img/logo.png"></img>
                <div class="main-recommand-name">IT 프로그래밍</div>
              </div>
              <div class="main-recommand">
                <img class="main-recommand-img" src="img/logo.png"></img>
                <div class="main-recommand-name">IT 프로그래밍</div>
              </div>
              <div class="main-recommand">
                <img class="main-recommand-img" src="img/logo.png"></img>
                <div class="main-recommand-name">IT 프로그래밍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
