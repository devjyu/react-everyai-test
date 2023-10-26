import Image from "next/image";

export default function MainServiceList({data}) {

  const placeholderURL = 'https://via.placeholder.com/300';
  
  const handleImageClick = (index) => {
    window.location.href = `service-detail/${index}`;
};
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
          {data.serviceList.map((service) => (
            <div className="main-recommand" key={service.idx} onClick={()=>handleImageClick(service.idx)}>
              <Image className="main-recommand-img" src={placeholderURL } alt="placeholder" width={300} height={300}/>
              <div className="main-recommand-name">{service.title}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
