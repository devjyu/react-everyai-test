import SelectFields from '@/_components/select-field-list';
import SelectField from '@/_components/select-field';
import { useEffect, useState } from 'react';


export default function SubmainTitle({ onDataUpdate, data }) {

  const [title, setTitle] = useState(`홈 > ${data.categoryName}`);
  const [selectedCategory, setSelectedCategory] = useState("전체 카테고리");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState('');
  const [updatedData, setUpdatedData] = useState(null);

  useEffect(() => {
    // 선택된 카테고리와 하위 카테고리, 그리고 정렬 방식에 따라 데이터를 가져오는 로직을 추가할 수 있습니다.
    // 예시로 API 호출을 사용한다면 아래와 같이 구현할 수 있습니다.

    const fetchData = async () => {
      try {
      // 카테고리와 정렬에 따라 API 호출을 수행하고 데이터를 가져옵니다.
      const response = await fetch(`api/v1/submain/service?productCategoryIdx=${selectedCategory}&productSubcategoryIdx=${selectedSubcategory}&sort=${selectedSort}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedData = await response.json();
      // 가져온 데이터를 처리하고 설정합니다.
      setUpdatedData(updatedData);}
      catch (error) {
        console.error("Fetching data failed", error);
      }
    };
    fetchData();
  }, [selectedCategory, selectedSubcategory, selectedSort]);



  const handleCategoryChange = (e) => {
    const categoryidx = e.target.value;
    const selectedCategoryName = data.productCategoryList.find(
      (category) => category.idx === parseInt(categoryidx)
    )?.name;
    setSelectedCategory(categoryidx);
    setTitle(`홈 > ${selectedCategoryName}`);
    onDataUpdate(updatedData);
  };

  const handleSubCategoryChange = (e) => {
    const subCategoryIdx = e.target.value;
    const selectedSubcategory = subCategories.find(
      (subcategory) => subcategory.idx === parseInt(subCategoryIdx)
    );
    if (selectedSubcategory) {
      setTitle(
        `홈 > ${data.categoryName} > ${selectedSubcategory.name}`);
      setSelectedSubcategory(subCategoryIdx);
    }
    onDataUpdate(updatedData);
  };

  useEffect(() => {
    if (selectedCategory !== '전체 카테고리') {
      const selectedProductCategory = data.productCategoryList.find((category) => category.idx === parseInt(selectedCategory));
      if (selectedProductCategory) {
        setSubCategories(selectedProductCategory.productSubCategoryList || []);
        const selectedSubcategory = selectedProductCategory.productSubCategoryList.find(
          (subcategory) => subcategory.idx === parseInt(selectedCategory)
        );

      }
    } else {
      setSubCategories([]);
      setTitle(`홈 > ${data.categoryName}`);
    }
  }, [selectedCategory, data.categoryName, data.productCategoryList]);

  const handleSortChange = (e) => {
    const selectedSortValue = e.target.value;
    setSelectedSort(selectedSortValue);
    onDataUpdate(updatedData);
  };
  
  const oderOptions = [
    '완료 건수',
    '후기 개수',
    '평점순',
    '메세지 응답순',
    '신규 등록순',
  ];

  return (
    <>
      <div className="title">
        <span>{title}</span>
      </div>
      <div class="sort-dropdowns">
        <div>
          <SelectFields className="category-detail"
            value={selectedCategory.name} placeholder={"전체 카테고리"} onChange={handleCategoryChange}
            options={data.productCategoryList}
          >
            {data.productCategoryList.map((category) => (
              <option value={category.name} key={category.idx}>{category.name}</option>
            ))}
          </SelectFields>
          {selectedCategory !== '전체 카테고리' && (
            <SelectFields
              className="category-detail"
              placeholder={"하위 카테고리"}
              options={subCategories}
              value={selectedSubcategory || ""}
              onChange={handleSubCategoryChange}
            >
              {subCategories.map((subcategory, index) => (
                <option value={subcategory.idx} key={index}>
                  {subcategory.name}
                </option>
              ))}
            </SelectFields>
          )}

        </div >

        <div>
          <SelectField className="sort" id="sort" placeholder="정렬" options={oderOptions} onChange={handleSortChange} />
        </div>
      </div>
    </>

  );
}
