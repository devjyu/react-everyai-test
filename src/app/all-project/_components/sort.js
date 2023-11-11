import SelectFields from '@/_components/select-field-list';
import SelectField from '@/_components/select-field';
import { useEffect, useState } from 'react';

export default function SubmainTitle({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("전체 카테고리");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryChange = (e) => {
    const categoryidx = e.target.value;
    const selectedCategoryName = data.productCategoryList.find(
      (category) => category.idx === parseInt(categoryidx)
    )?.name;
    setSelectedCategory(categoryidx);
  };

  const handleSubCategoryChange = (e) => {
    const subCategoryIdx = e.target.value;
    const selectedSubCategory = subCategories.find(
      (subcategory) => subcategory.idx === parseInt(subCategoryIdx)
    );
    if (selectedSubCategory) {
      setSelectedSubCategory(subCategoryIdx); 
    }
  };

  // console.log("카테고리 번호 : " + selectedCategory);


  useEffect(() => {
    if (selectedCategory !== '전체 카테고리') {
      const selectedProductCategory = data.productCategoryList.find((category) => category.idx === parseInt(selectedCategory));
      if (selectedProductCategory) {
        setSubCategories(selectedProductCategory.productSubCategoryList || []);
        const selectedSubCategory = selectedProductCategory.productSubCategoryList.find(
          (subcategory) => subcategory.idx === parseInt(selectedCategory)
        );
      
      }
    } else {
      setSubCategories([]);
     
    }
  }, [selectedCategory, data.categoryName, data.productCategoryList, subCategories]);


  const oderOptions = [
    '메세지 응답순',
    '신규 등록순',
  ];

  return (
    <>
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
              value={selectedSubCategory || ""}
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
          <SelectField className="sort" id="sort" placeholder="정렬" options={oderOptions} />
        </div>
      </div>
    </>

  );
}
