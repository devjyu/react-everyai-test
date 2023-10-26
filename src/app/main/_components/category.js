import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MainCategory({ data }) {
  // const placeholderURL = 'https://via.placeholder.com/300';
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('/repository/data/main.json'); // 데이터를 가져옵니다.
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     console.log(jsonData);
  //   };

  //   fetchData();
  // }, []);

  const settings = {
    rows: 2,
    slidesPerRow: 4,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <>
      
        <Slider {...settings}>
        {data.productCategoryList.map((category, index) => (
                  <div className="main-category" key={index}>
                    <Image className="main-recommand-img" src={category.imageFile.subFileList[0].url} alt="placeholder" width={500} height={300} />
                    <div className="main-category-name">{category.name}</div>
                  </div>
                ))}
        </Slider>
      {/* <div className="main-inner-box">
        <!-- 카테고리  -->
        <!-- 사진수정 필요 -->
        <div classNames="main-inner-center-box">

          <div className="main-category-box">
      
              <Slider {...settings}>
               
              </Slider>



          </div>
        </div>
      </div> */}
    </>
  );
}
