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

  const handleImageClick = (index) => {
    window.location.href = `submain/${index}`;
};


  return (
    <>
      
        <Slider {...settings}>
        {data.productCategoryList.map((category) => (
                  <div className="main-category" key={category.idx} onClick={()=>handleImageClick(category.idx)} >
                    <Image className="main-recommand-img"  src={category.imageFile.subFileList[0].url} alt="placeholder" width={500} height={300} />
                    <div className="main-category-name">{category.name}</div>
                  </div>
                ))}
        </Slider>
     
    </>
  );
}
