import Image from "next/image";

export default function MainServiceList() {
  return (
    <div class="main-service-box">
      <div class="main-inner-service-box">
        <div class="main-inner-service-recommand-box">
          <div class="main-how-recommand">이런 서비스는 어때요?</div>
          <div class="main-ai-recommand">
            <button class="ai-recommand-button">ai추천</button>
          </div>
        </div>
        <div class="main-recommand-box">
          <div class="main-inner-service">
            <div class="main-recommand">
              <Image src="" alt="" />
              <div class="main-recommand-name">IT 프로그래밍</div>
            </div>
            <div class="main-recommand">
              <Image src="" alt="" />
              <div class="main-recommand-name">IT 프로그래밍</div>
            </div>
            <div class="main-recommand">
              <Image src="" alt="" />
              <div class="main-recommand-name">IT 프로그래밍</div>
            </div>
            <div class="main-recommand">
              <Image src="" alt="" />
              <div class="main-recommand-name">IT 프로그래밍</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
