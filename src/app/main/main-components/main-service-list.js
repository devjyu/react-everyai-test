import Image from "next/image";

export default function MainServiceList() {
  return (
    <div className="main-service-box">
      <div className="main-inner-service-box">
        <div className="main-inner-service-recommand-box">
          <div className="main-how-recommand">이런 서비스는 어때요?</div>
          <div className="main-ai-recommand">
            <button className="ai-recommand-button">ai추천</button>
          </div>
        </div>
        <div className="main-recommand-box">
          <div className="main-inner-service">
            <div className="main-recommand">
              <Image src="" alt="" />
              <div className="main-recommand-name">IT 프로그래밍</div>
            </div>
            <div className="main-recommand">
              <Image src="" alt="" />
              <div className="main-recommand-name">IT 프로그래밍</div>
            </div>
            <div className="main-recommand">
              <Image src="" alt="" />
              <div className="main-recommand-name">IT 프로그래밍</div>
            </div>
            <div className="main-recommand">
              <Image src="" alt="" />
              <div className="main-recommand-name">IT 프로그래밍</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
