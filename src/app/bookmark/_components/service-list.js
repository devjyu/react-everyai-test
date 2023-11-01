import Image from 'next/image';

export default function BookmarkServiceList({data}) {
    return(
        <>
            {/* <!-- 서비스 리스트 --> */}
            <div className="service-card-list">
                {data.map((bookmark, index) => (
                    <>
                        {/* <!-- 개별 서비스 --> */}
                        <div className="service-card" key={index}>
                            {/* <!-- 서비스 이미지  --> */}
                            <div className="service-image">
                                <Image src={bookmark.thumbnailUrl} alt="게시물 이미지" width={300} height={100} />
                                <div className="image-icon">💕</div>
                            </div>

                            <div className="wishlist-information">
                                {/* <!-- 서비스 제목 --> */}
                                <div className="wishlist-information-expert">
                                    <span className="level">{bookmark.user.exertLevel}</span>
                                    <span className="nickname">{bookmark.user.nickname}</span>
                                </div>
                                {/* <!-- 서비스 제목 --> */}
                                <div className="wishlist-information-title">
                                    <span className="service-title">{bookmark.title}</span>
                                </div>

                                {/* <!-- 평점 --> */}
                                <div className="wishlist-information-grade">
                                    ⭐
                                    <span className="wishlist-information-grade-detail">{bookmark.averageRating}({bookmark.reviewCount})</span>
                                </div>

                                {/* <!-- 서비스 가격 --> */}
                                <div className="service-price-box">
                                    <span className="price">{bookmark.price}원</span>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}