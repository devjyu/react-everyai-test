import React, { useState, useEffect } from "react";
import '@/app/service-detail/[id]/service-detail.css'

export default function Service() {

  const [contentHeight, setContentHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect (() => {
    const element = document.querySelector('#content-detail-container');
    console.log("element:", element); // 값 확인을 위한 콘솔 출력
      if (element) {
        const height = element.clientHeight;
        console.log("Content Height:", height); // 값 확인을 위한 콘솔 출력
        setContentHeight(height);
      };
  }, []);

  const AllView = () => {
    SetButtonText();
    SetContainerHeight();
  };

  const SetButtonText = () => {
    if (clicked) {
      // 원래 상태로 돌아오는 작업
      setClicked(false);
    } else {
      // 클릭 시 수행할 작업
      setClicked(true);
    }
  };

  const SetContainerHeight = () => {
    setActive(!active);
  };

  return (
    <div className={active ? 'content-detail_container all-show-service-container' : 'content-detail_container service-container'}id="content-detail-container">
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
            제외한 모든 권리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가         리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가         리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가         리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가         리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가         리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
            창작자는 판매 완료 포트폴리오에 대한 사용을 <br />
          리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가         리를 양도 합니다. *작품의 대한 권리는 의뢰자가 가져가며,<br />
          *작품의 대한 권리는 의뢰자가 가져가며,<br />
          
            {contentHeight}

          </p>
        </div>
        <button id="more-button" className={contentHeight <= 600 ? 'more-button hidden' : 'more-button'} onClick={AllView}>{clicked ? '상세설명 접기' : '더보기'}</button>
      </div>
    </div>
  );
}
