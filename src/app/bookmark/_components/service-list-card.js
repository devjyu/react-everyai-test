import Image from 'next/image';

export default function BookmarkServiceCard({ bookmark }) {

    const handleBookmarkClick = (event) => {
        event.stopPropagation();
        alert("찜을 해제하였습니다.");
        console.log("여기");
    };

    const goServiceDetail = (index) => {
        window.location.href = `/service-detail/${index}`;
    };

    return (
        <div className="service-card" onClick={() => goServiceDetail(bookmark.idx)}>
            <div className="service-image">
                <Image src={bookmark.thumbnailUrl} alt="Post image" width={300} height={100} />
                <div className="image-icon" onClick={(event) => handleBookmarkClick(event)}>
                    <Image src={'/heart.png'} alt="Heart" width={30} height={30} />
                </div>
            </div>

            <div className="wishlist-information">
                <div className="wishlist-information-expert">
                    <span className="level">{bookmark.user.exertLevel}</span>
                    <span className="nickname">{bookmark.user.nickname}</span>
                </div>
                <div className="wishlist-information-title">
                    <span className="service-title">{bookmark.title}</span>
                </div>
                <div className="wishlist-information-grade">
                    ⭐
                    <span className="wishlist-information-grade-detail">
                        {bookmark.averageRating}({bookmark.reviewCount})
                    </span>
                </div>
                <div className="service-price-box">
                    <span className="price">{bookmark.price}원</span>
                </div>
            </div>
        </div>
    );
};
