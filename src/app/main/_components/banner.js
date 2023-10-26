import Image from "next/image";
import { useEffect, useState, useRef } from 'react';

export default function AdvertisementBanner({ data }) {
    const [currentInedex, setCurrentIndex] = useState(0);
    const bannerSliderInnerRef = useRef(null);
    const bannerSliderWidth = useRef(0);

    useEffect(() => {
        const bannerSliderImg = document.querySelector('.banner-slider_img');
        bannerSliderInnerRef.current = document.querySelector('.banner-slider_inner');

        bannerSliderWidth.current = bannerSliderImg.offsetWidth;
        const sliderEffect = () => {
            setCurrentIndex((prevIndex) => {
                let nextIndex = prevIndex + 1;
                bannerSliderInnerRef.current.style.transition = 'all 0.6s';
                bannerSliderInnerRef.current.style.transform = `translateX(-${bannerSliderWidth.current * nextIndex}px)`;

                if (nextIndex === data.advertisementAdminBannerList.length) {
                    setTimeout(() => {
                        bannerSliderInnerRef.current.style.transition = '0s';
                        bannerSliderInnerRef.current.style.transform = 'translateX(0px)';
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
        <div className="banner-slider-wrap">
            <div className="banner-slider_inner">
                {data.advertisementAdminBannerList.map((thumbnail, index) => (
                    <div className="banner-slider" key={index} onClick={() => handleImageClick(index)}>
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
    );
}
