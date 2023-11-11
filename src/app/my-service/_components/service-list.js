import Image from "next/image";

export default function ServiceList({ data }) {

  const updateClick = (index) => {
    window.location.href = `/service-update/${index}`;
  };
  const serviceRegistrationClick = () => {
    window.location.href = `/service-registration`;
  };

  function handleDelete(idx) {
  const isConfirmed = window.confirm('삭제 하시겠습니까?');
  if (isConfirmed) {
    fetch(`http/10.10.10.13:8080/api/v1/service/mine/${idx}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('삭제되었습니다.');
        // 여기에 적절한 처리를 추가할 수 있습니다.
        window.location.reload();
      })
      .catch(error => {
        console.error('오류 발생:', error);
        // 여기에 오류 처리를 추가할 수 있습니다.
      });
  } else {
    alert("삭제가 취소 됐습니다")
    // 사용자가 '아니오'를 선택한 경우에 실행될 코드를 여기에 추가합니다.
  }
  }

  return (
    <>
      {/* <!-- 내부 컨테이더 바디(내용) --> */}
      <div class="inner-container-body">

        {/* <!-- 전체 내 서비스 리스트 --> */}
        <div class="inner-container-body-service-list">

          {data.serviceList.map((service, index) => (
            // {/* <!-- 내 서비스 개별 div --> */ }
            < div className="inner-container-body-service" key={index}>
              <div className="left">
                <Image
                  className="main-category-img"
                  src={service.thumbnailUrl}
                  alt="placeholder"
                  width={100}
                  height={100}
                />
              </div>
              <div className="middle">
                <div className="middle-service-number">
                  <span>#{String(service.idx).padStart(6, '0')}</span>
                </div>
                <div className="middle-service-description">
                  <span>{service.title} </span>
                </div>
                <div className="middle-service-rating">
                  <div className="middle-service-rating-left">현재 평점 및 리뷰</div>
                  <div class="middle-service-rating-right">⭐ {service.averageReviewRating} ({service.reviewCount})</div>
                </div>
              </div>
              <div className="right">
                <div onClick={() => updateClick(service.idx)}>수정</div>
                <div onClick={()=>handleDelete(service.idx)}>삭제</div>
              </div>
            </div>
          ))}

        </div>
        <div className="inner-container-body-service-add-btn" onClick={serviceRegistrationClick}>
          <button id="service-add-btn">서비스 등록하기</button>
        </div>
      </div >
    </>


  );
}
