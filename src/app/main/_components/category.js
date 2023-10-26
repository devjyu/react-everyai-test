import Image from "next/image";

export default function MainCategory({data}) {
  const placeholderURL = 'https://via.placeholder.com/300';
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
  return (
    <div className="main-inner-box">
      {/* <!-- 카테고리  --> */}
      {/* <!-- 사진수정 필요 --> */}
      <div classNames="main-inner-center-box">
        <div className="main-category-box">
          {data.productCategoryList.map((category, index) => (
            <div className="main-category" key={index}>
              <Image className="main-recommand-img" src={placeholderURL } alt="placeholder" width={300} height={300}/>
              <div className="main-category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
}
