import Image from "next/image";

export default function SubmainServiceCard({ data }) {
  const getBadgeClass = (level) => {
    switch (level) {
      case 'level0':
        return 'yellow';
      case 'level1':
        return 'green';
      case 'level2':
        return 'blue';
      case 'level3':
        return 'red';
      case 'master':
        return 'black';
      default:
        return '';
    }
  };

  const handleImageClick = (index) => {
    window.location.href = `service-detail/${index}`;
  };
  return (
    <>
      {data && data.serviceList && data.serviceList.length > 0 ? (
        <div className="service-card-list">
          <div className="service-card-list-inner-box">
            {data.serviceList.map((service) => (
              <div
                className="service-card"
                key={service.idx}
                onClick={() => handleImageClick(service.idx)}
              >
                <div className="service-image">
                  <Image
                    className="main-category-img"
                    src={service.thumbnailUrl}
                    alt="placeholder"
                    width={500}
                    height={500}
                  />
                  <div className="image-icon">icon</div>
                </div>
                <div className="service-writer">
                  <span className={getBadgeClass(service.expertLevel)}>
                    {service.expertLevel}{" "}
                  </span>
                  <span className="font-bold">{service.expertNickName}</span>
                </div>
                <div className="service-title">
                  <span>{service.title}</span>
                </div>
                <div className="service-price-box">
                  <div className="price-icon">&#123;icon&#125;</div>
                  <span className="price">{service.price}</span>
                </div>
                <div className="service-rating-box">
                  <div className="rating-score-box">
                    <div className="rating-icon">⭐</div>
                    <span className="rating-score">
                      {service.reviewAverageRating}
                    </span>
                  </div>
                  <span>|</span>
                  <div className="rating-count">
                    <span>{service.reviewCount}</span>개의 평가
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="not-data">
          <p>데이터가 없습니다...</p>
        </div>
      )
      }
    </>
  );
}
