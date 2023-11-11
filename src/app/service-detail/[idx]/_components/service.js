import React, { useState, useEffect } from "react";

export default function Service({data}) {

  const [contentHeight, setContentHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect (() => {
    const element = document.querySelector('#content-detail-container');
    console.log("element:", element); // 값 확인을 위한 콘솔 출력
      if (element) {
        const height = element.clientHeight;
        setContentHeight(height);
      };
  }, []);

  const AllView = () => {
    SetButtonText();
    SetContainerHeight();
  };

  const SetButtonText = () => {
      setClicked(!clicked);
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
          {data.serviceInfo.serviceDescription}

          
        </div>
        <button id="more-button" className={contentHeight <= 500 ? 'more-button hidden' : 'more-button'} onClick={AllView}>{clicked ? '상세설명 접기' : '더보기'}</button>
      </div>
    </div>
  );
}
