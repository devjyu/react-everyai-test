import Image from "next/image";

export default function SubmainServiceCard({data}) {
  
    return (
        // <!-- 서비스 리스트 -->
        <div className="service-card-list">
            {/* <!-- 개별 서비스 --> */}
            <div className="service-card-list-inner-box">
            {data.projectList.map((project) => (

                <div className="service-card"  key={project.idx}>
                    {/* <!-- 서비스 이미지  --> */}
                    <div className="service-image">
                        
                        <Image 
                        className="main-category-img" 
                        src={project.thumbnailUrl} 
                        alt="placeholder" 
                        width={500} 
                        height={500} 
                        />
                        <div className="image-icon">d-{project.dDay}</div>
                    </div>

                    {/* <!-- 서비스 작성자 --> */}
                    <div className="service-writer">
                        <span className={getBadgeClass(project.expertLevel)}> {project.expertLevel} </span>
                        <span className="font-bold"> {project.expertNickName}</span>
                    </div>

                    {/* <!-- 서비스 제목 --> */}
                    <div className="service-title">
                        <span>{project.title}</span>
                    </div>

                    {/* <!-- 서비스 가격 --> */}
                    <div className="service-price-box">
                        <div className="price-icon">&#123;icon&#125;</div>
                        <span className="price">{project.price}</span>
                    </div>

                    {/* <!-- 서비스 평가 --> */}
                    <div className="service-rating-box">
                        <div className="rating-score-box">
                            <div className="rating-icon">⭐</div>
                            <span className="rating-score">{project.reviewAverageRating}</span>
                        </div>
                        {/* <!-- 평가 점수와 갯수 분리 "|" --> */}
                        |
                        <div className="rating-count"><span>{project.reviewCount}</span>개의 평가</div>
                    </div>
                </div>
                 ))}
            </div>
        </div>

    );
}
