import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function MainCategory({ data }) {
    const settings = {
        rows: 2,
        slidesPerRow: 4,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handleImageClick = (index) => {
        window.location.href = `submain?productCategory=${index}`;
    };

    return (
        <>
            <Slider {...settings}>
                {data.productCategoryList.map((category) => (
                    <div className="main-category" key={category.idx} onClick={() => handleImageClick(category.idx)} >
                        <Image 
                        className="main-category-img" 
                        src={category.imageFile.subFileList[0].url} 
                        alt="placeholder" 
                        width={500} 
                        height={300} 
                        />
                        <div className="main-category-name">{category.name}</div>
                    </div>
                ))}
            </Slider>
        </>
    );
}
