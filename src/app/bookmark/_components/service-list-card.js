import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BookmarkServiceCard({ bookmark }) {
    const [isBookmarkAdd, setIsBookmarkAdd] = useState(false);

    const handleBookmarkClick = () => {
        setIsBookmarkAdd(!isBookmarkAdd);
    };

    return (
        <Link href={'/'}>
            <div className="service-card">
                <div className="service-image">
                    <Image src={bookmark.thumbnailUrl} alt="게시물 이미지" width={300} height={100} />
                    <div className="image-icon" onClick={handleBookmarkClick}>
                        <Image src={isBookmarkAdd ? '/heart.png' : '/no-heart.png'} alt="하트" width={30} height={30} />
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
        </Link>
    );
};
