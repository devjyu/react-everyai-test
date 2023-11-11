import Image from "next/image";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Review({ data }) {
    const [visibleItems, setVisibleItems] = useState(1);

    const showMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
    };
    console.log("debug : ", data);

    const ratings = data.reviewList.map((item) => item.rating);

    // 평균을 계산하기 위해 ratings의 총합과 요소 수를 사용합니다.
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
    const roundedAverage = Math.round(average * 100) / 100;

    const reviewLength = data.reviewList.length;

    const settings = {
        rows: 1,
        slidesPerRow: 4,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        data && data.reviewList ? (
            <div className="content-detail_container review-container">
                <div className="content-detail_container-title review-title">
                    <div className="review-title-text">리뷰</div>
                    <div className="review-title-rating">
                        <div className="review-title-rating-score">{roundedAverage}&nbsp;</div>
                        <div className="review-title-rating-star">
                            {/* <img src="img/star.png" alt="리뷰 별" />
                            <img src="img/star.png" alt="리뷰 별" />
                            <img src="img/star.png" alt="리뷰 별" />
                            <img src="img/star.png" alt="리뷰 별" />
                            <img src="img/star.png" alt="리뷰 별" /> */}
                        </div>
                        <div className="review-title-rating-count">{reviewLength}건</div>
                    </div>
                </div>
                <div className="review-content">
                    <div className="review-content-photo_review">
                        <div className="review-content-photo_review-text">
                            포토리뷰 {reviewLength}건
                        </div>
                        <div className="review-content-photo_review-img">
                            <Slider {...settings}>
                                {data.reviewList.map((review, index) => (
                                    <div key={index}>
                                        <Image
                                            src={review.ImageUrl}
                                            width={100}
                                            height={100}
                                            alt="placeholder" />
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>
                    <div className="review-content-all_review">
                        <div className="review-content-all_review-text">
                            전체리뷰 {reviewLength} 건
                        </div>
                        {data.reviewList.slice(0, visibleItems).map((review, index) => (
                            <div className="review-content-all_review-content" key={index}>
                                <div className="review-content-all_review-content-detail">
                                    <div className="review-content-all_review-content-detail-user_profile">
                                        <Image
                                            src={review.profileImageUrl}
                                            width={50}
                                            height={50}
                                            alt="placeholder" />
                                    </div>
                                    <div class="review-content-all_review-content-detail-user_review">
                                        <div>
                                            <div>{review.user} | {review.date}</div>
                                        </div>
                                        <div>{review.rating}</div>
                                        <div>작업일 : {review.jobDuration}일 | 주문 금액 : {review.orderAmount}원</div>
                                        <div>
                                            {review.review}
                                        </div>
                                    </div>
                                </div>
                                <div className="review-content-all_review-reply">
                                    <div className="review-content-all_review-reply-arrow">
                                        {/* <img src="img/detail/detail-review-arrow.png" /> */}
                                    </div>
                                    <div className="review-content-all_review-reply-content">
                                        <div className="review-content-all_review-reply-username">
                                        {review.comments.user} | {review.comments.date}
                                        </div>
                                        <div className="review-content-all_review-reply-detail">
                                            <p>
                                            {review.comments.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="all-show-button">
                    {data.reviewList.length > visibleItems && (
                        <button onClick={showMoreItems}>더 보기</button>
                    )}
                </div>
            </div>
        ) : null
    )
};