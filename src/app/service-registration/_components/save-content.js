import InputField from "@/_components/input-field";
import SelectFields from "@/_components/select-fields";
import { useEffect, useState } from 'react';


export default function SaveContent({ data }) {

    const [selectedCategory, setSelectedCategory] = useState("전체 카테고리");
    const [subCategories, setSubCategories] = useState([]);
    const MAX_TITLE_LENGTH = 30; // 최대 제목 길이
    const MAX_DETAILTITLE_LENGTH = 30; // 최대 제목 길이
    const MAX_DESCRIPTION_LENGTH = 300; // 최대 제목 길이
    const [detailTitleLength, setDetailTitleLength] = useState(0); // 제목의 길이 상태
    const [titleLength, setTitleLength] = useState(0); // 제목의 길이 상태
    const [descriptionLength, setDescriptionLength] = useState(0); // 제목의 길이 상태

    const handleCategoryChange = (e) => {
        const categoryidx = e.target.value;
        setSelectedCategory(categoryidx);
    };

    useEffect(() => {
        if (selectedCategory !== '전체 카테고리') {
            const selectedProductCategory = data.productCategoryList.find(category => category.idx === parseInt(selectedCategory));
            if (selectedProductCategory) {
                setSubCategories(selectedProductCategory.productSubCategoryList || []);
            }
        } else {
            setSubCategories([]);
        }
    }, [selectedCategory, data.productCategoryList]);

    const [formData, setFormData] = useState({
        title: '',
        productCategoryIdx: '',
        productSubcategoryIdx: '',
        detailTitle: '',
        description: '',
        price: '',
        workDay: '',
        thumbnailFile: '',
        imageFileList: [],
        videoFile: '',
        updateCount: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleCombinedChange = (e) => {
        handleInputChange(e);
        handleCategoryChange(e);
    };
    const handlevideoFileChange = (e) => {
        handleInputChange(e);
        handleFileChange(e);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file.size > 300000000) { // 1MB 제한
          alert('파일의 크기는 300MB 이하여야 합니다.');
          event.target.value = null; // 파일 선택 취소
          const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        }
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // 파일 처리 로직 추가
      };
    const handleInputChangeList = (e) => {
        const imageLists = e.target.files; //최종1건 한번에 받은 파일리스트 (obj임)

        console.log(imageLists, "파일 데이터"); // 한번에 받은 파일리스트 (obj임)

        let imageUrlLists = [...formData.imageFileList]; // 현재 myImage를 복사하고 깊은 복사? 얕은복사?

        console.log(imageUrlLists, "미리보기 파일 배열");

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > 3) {
            imageUrlLists = imageUrlLists.slice(0, 3);
            alert("3장까지 등록가능합니다")
            return;
        }

        setFormData({ ...formData, imageFileList: imageUrlLists });
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, 'thumbnailFile': imageUrl });
        }
    };


    // 유효성 체크
    const handleTitleChange = (e) => {
        handleInputChange(e);
        handleTitleValidationCheck(e);
    };
    const handleDetailTitleChange = (e) => {
        handleInputChange(e);
        handleDetailTitleValidationCheck(e);
    };
    const handleDescriptionChange = (e) => {
        handleInputChange(e);
        handleDescriptionValidationCheck(e);
    };

    const handleTitleValidationCheck = (event) => {
        const { value } = event.target;
        setFormData({ ...formData, title: value }); // 제목 업데이트
        setTitleLength(value.length); // 길이 업데이트
    };
    const handleDetailTitleValidationCheck = (event) => {
        const { value } = event.target;
        setFormData({ ...formData, detailTitle: value }); // 제목 업데이트
        setDetailTitleLength(value.length); // 길이 업데이트
    };
    const handleDescriptionValidationCheck = (event) => {
        const { value } = event.target;
        setFormData({ ...formData, description: value }); // 제목 업데이트
        setDescriptionLength(value.length); // 길이 업데이트
    };
    const validateForm = () => {
        if (
            formData.title === "" ||
            formData.title.length >= 30 ||
            formData.productCategoryIdx === "" ||
            formData.productSubcategoryIdx === "" ||
            formData.detailTitle === "" ||
            formData.detailTitle.length >= 30 ||
            formData.description === "" ||
            formData.description.length >= 300 ||
            formData.price === "" ||
            formData.workDay === "" ||
            formData.thumbnailFile === "" ||
            formData.updateCount === ""
        ) {
            return false; // 유효성 검사 실패
        }
        return true; // 유효성 검사 성공
    };

    const handleSave = () => {
        if (!validateForm()) {
            alert("필수값을 입력해주세요!");
            return;
        } else {
            //     const url = 'api/v1/service'; // 서버의 엔드포인트 URL을 여기에 넣으세요.

            //     fetch(url, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(formData)
            //     })
            //         .then(response => response.json())
            //         .then(data => {
            //             console.log('서버 응답:', data);
            //             // 성공적으로 응답을 받았을 때 실행되는 코드를 여기에 추가하세요.
            //         })
            //         .catch(error => {
            //             console.error('오류 발생:', error);
            //             // 오류 발생 시 실행되는 코드를 여기에 추가하세요.
            //         });
            // };
        }
    };

    console.log("debug : " + JSON.stringify(formData));
    console.log("selected category debug : " + selectedCategory);
    return (
        <>
            <div className="save-content">
                <div className="save-content-detail">
                    <div className="save-content-text">서비스 제목 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input">
                        <InputField placeholder={"30자 내로 작성해주세요"}
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    
                </div>
                {titleLength > MAX_TITLE_LENGTH && (
                            <span style={{ color: "red" }}>
                                30자 내로 작성해야합니다.
                            </span>
                        )}
                <div className="save-content-detail">
                    <div className="save-content-text">상위 카테고리 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input">
                        <SelectFields className="category-detail"
                            value={formData.selectedCategory} placeholder={"전체 카테고리"}
                            onChange={handleCombinedChange}
                            options={data.productCategoryList}
                            name="productCategoryIdx"
                        >
                            {data.productCategoryList.map((category) => (
                                <option value={category.name} key={category.idx}>{category.name}</option>
                            ))}
                        </SelectFields>
                    </div>
                </div>
                <div className="save-content-detail">
                    <div className="save-content-text">하위 카테고리 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input">
                        <SelectFields
                            className="category-detail"
                            placeholder={"하위 카테고리"}
                            options={subCategories}
                            onChange={handleCombinedChange}
                            name="productSubcategoryIdx"
                        >
                            {subCategories.map((subcategory, index) => (
                                <option value={subcategory.idx} key={index}>
                                    {subcategory.name}
                                </option>
                            ))}
                        </SelectFields>
                    </div>
                </div>
                <div className="details-info">세부 정보</div>
                <hr className="hr-2" />
                <div className="save-content-detail">
                    <div className="save-content-text">제목  <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input">
                        <InputField placeholder={"30자 내외로 작성해주세요"}
                            type="text"
                            name="detailTitle"
                            value={formData.detailTitle}
                            onChange={handleDetailTitleChange} />
                    </div>
                </div>
                {detailTitleLength > MAX_DETAILTITLE_LENGTH&& (
                            <span style={{ color: "red" }}>
                                30자 내로 작성해야합니다.
                            </span>
                        )}
                <div className="save-content-detail">
                    <div className="save-content-text">설명 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input">
                        <InputField className="save-content-explanation" placeholder="제공하는 서비스를 300자 내로 적어주세요"
                            rows="2"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleDescriptionChange} />
                    </div>
                </div>
                {descriptionLength > MAX_DESCRIPTION_LENGTH && (
                            <span style={{ color: "red" }}>
                                300자 내로 작성해야합니다.
                            </span>
                        )}
                <div className="save-content-detail">
                    <div className="save-content-text">금액(VAT 포함) <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input" id="price">
                        {/* <!-- 뒤에 원 붙이는건 자바스크립트로 --> */}
                        <InputField placeholder={"기본 금액을 입력 해 주세요"}
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className="save-content-detail">
                    <div className="save-content-text">작업일 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input" id="period">
                        {/* <!-- 뒤에 일 붙이는건 자바스크립트로 --> */}
                        <InputField placeholder="작업일을 입력해주세요"
                            type="number"
                            name="workDay"
                            value={formData.workDay}
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className="save-content-detail">
                    <div className="save-content-text">썸네일 이미지 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input-file">
                        <InputField type={"file"}
                            name="thumbnailFile"
                            onChange={handleThumbnailChange} />
                        <div className="save-content-upload-explanation">
                            <span>1장만 등록가능</span>
                        </div>
                    </div>
                </div>

                <div className="save-content-detail">
                    <div className="save-content-text">사진 등록</div>
                    <div className="save-content-input-file">
                        {/* <!-- 파일 여러개 업로드 해야됨 --> */}
                        <InputField type={"File"} multiple
                            name="imageFileList"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleInputChangeList} />
                        <div className="save-content-upload-explanation">
                            <span>최대 3장까지 등록가능</span>
                        </div>
                    </div>
                </div>

                <div className="save-content-detail">
                    <div className="save-content-text">동영상 등록</div>
                    <div className="save-content-input-file">
                        {/* <!-- 동영상 업로드--> */}
                        <InputField type={"File"}
                            name="videoFile"
                            value={formData.videoFile}
                            onChange={handlevideoFileChange} />

                        <div className="save-content-upload-explanation">
                            <span>최대 300MByte까지 등록가능</span>
                        </div>
                    </div>
                </div>

                <div className="save-content-detail">
                    <div className="save-content-text">수정 횟수 <span style={{ color: "red" }}>*</span></div>
                    <div className="save-content-input " id="revisions">
                        {/* <!-- 뒤에 회 붙이는건 자바스크립트로 --> */}
                        <InputField placeholder="수정 횟수를 입력해주세요"
                            type={"number"}
                            name="updateCount"
                            value={formData.updateCount}
                            onChange={handleInputChange} />

                    </div>
                </div>
            </div>
            <button className="save-button" onClick={handleSave}>
                <span>서비스 등록하기</span>
            </button>
        </>
    );
}
