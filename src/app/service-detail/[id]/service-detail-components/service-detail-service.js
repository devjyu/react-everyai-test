// import React, { useState } from "react";

export default function Service() {

  const Say = () => {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState({ color: "black" });

    const onClickEnter = () => setMessage("Enter");
    const onClickLeave = () => setMessage("Leave");
  }
    return (
      <div className="content-detail_container service-container">
        <div className="content-detail_container-title service-title">
          <p>서비스 설명</p>
        </div>
        <div className="service-content-container">
          <div className="service-content">
            <p>눈이 큰 올빼미 사진 전문업체입니다</p>
            {/* <img src="img/detail/detail-service.png" alt="서비스 내용 사진" /> */}
            <p style={{ fontSize: '12px' }}>
              *작품의 대한 권리는 의뢰자가 가져가며,<br />
              창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
              제외한 모든 권리를 양도 합니다.
            </p>
          </div>
          <button onCliick="more-button">더 보기</button>
        </div>
      </div>
    );
  }
