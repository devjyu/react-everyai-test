import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import Link from "next/link";

export default function AdvertisementBannerTest({ data }) {
    const [currentInedex, setCurrentIndex] = useState(0);
    const bannerSliderInnerRef = useRef(null);
    const bannerSliderWidth = useRef(0);
    const bannerSliderClone = useRef(null); // Use useRef for sliderClone

    useEffect(() => {
        const bannerSliderWrap = document.querySelector('.banner-slider-wrap');
        const bannerSliderImg = document.querySelector('.banner-slider_img'); //visible area
        bannerSliderInnerRef.current = document.querySelector('.banner-slider_inner'); //moving area
        const bannerSlider = document.querySelectorAll('.banner-slider'); //individual image

        bannerSliderWidth.current = bannerSliderImg.offsetWidth; //Get image width value
        bannerSliderClone.current = bannerSliderInnerRef.current.firstElementChild.cloneNode(true); // Store the value in useRef
        bannerSliderInnerRef.current.appendChild(bannerSliderClone.current); //Insert the first image last

        const sliderEffect = () => {
            setCurrentIndex((prevIndex) => {
                let nextIndex = prevIndex + 1;
                bannerSliderInnerRef.current.style.transition = 'all 0.6s';
                bannerSliderInnerRef.current.style.transform = `translateX(-${bannerSliderWidth.current * nextIndex}px)`;

                if (nextIndex === data.advertisementAdminBannerList.length) {
                    setTimeout(() => {
                        bannerSliderInnerRef.current.style.transition = '0s'; //No animation
                        bannerSliderInnerRef.current.style.transform = 'translateX(0px)'; //Initialize to 0px
                    }, 700);

                    nextIndex = 0;
                }
                return nextIndex;
            });
        };

        const interval = setInterval(sliderEffect, 4000);

        return () => clearInterval(interval);
    }, [data.advertisementAdminBannerList.length]);

    const handleImageClick = (index) => {
        window.location.href = `main/banner/${index}`;
    };

    return (
        <>
            <div class="banner-slider-wrap">
                <div className="banner-slider_img">
                    <div className="banner-slider_inner">
                        {data.advertisementAdminBannerList.map((thumbnail) => (
                            <div className="banner-slider" key={thumbnail.idx} onClick={() => handleImageClick(thumbnail.idx)}>
                                <Image
                                src={thumbnail.thumbnailFileEntity.subFileList[0].url}
                                unoptimized={true}
                                alt="광고배너"
                                width={700}
                                height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
