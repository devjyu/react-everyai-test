import InputField from "@/_components/input-field";

export default function SaveContent() {
    return (
        <>
            <div class="save-content">
                <div class="save-content-detail">
                    <div class="save-content-text">서비스 제목</div>
                    <div class="save-content-input">
                        <InputField placeholder={"30자 내외로 작성해주세요"}/>
                    </div>
                </div>

                <div class="save-content-detail">
                    <div class="save-content-text">상위 카테고리</div>
                    <div class="save-content-input">
                        <select name="category">
                            {/* <!-- TODO 임시 카테고리 --> */}
                            <option value="" disabled selected>선택</option>
                        </select>
                    </div>
                </div>
                <div class="save-content-detail">
                    <div class="save-content-text">하위 카테고리</div>
                    <div class="save-content-input">
                        <select name="sub-category">
                            {/* <!-- TODO 임시 카테고리 --> */}
                            <option value="" disabled selected>선택</option>
                        </select>
                    </div>
                </div>
                <div class="details-info">세부 정보</div>
                <hr class="hr-2" />
                <div class="save-content-detail">
                    <div class="save-content-text">제목</div>
                    <div class="save-content-input">
                    <InputField placeholder={"30자 내외로 작성해주세요"}/>
                    </div>
                </div>
                <div class="save-content-detail">
                    <div class="save-content-text">설명</div>
                    <div class="save-content-input">
                        <textarea class="save-content-explanation" placeholder="제공하는 서비스를 300자 내외로 적어주세요"
                            rows="2"></textarea>
                    </div>
                </div>
                <div class="save-content-detail">
                    <div class="save-content-text">금액(VAT 포함)</div>
                    <div class="save-content-input" id="price">
                        {/* <!-- 뒤에 원 붙이는건 자바스크립트로 --> */}
                        <InputField placeholder={"기본 금액을 입력 해 주세요"}/>
                    </div>
                </div>
                <div class="save-content-detail">
                    <div class="save-content-text">작업일</div>
                    <div class="save-content-input" id="period">
                        {/* <!-- 뒤에 일 붙이는건 자바스크립트로 --> */}
                        <input placeholder="작업일을 입력해주세요" />

                    </div>
                </div>


                <div class="save-content-detail">
                    <div class="save-content-text">썸네일 이미지</div>
                    <div class="save-content-input-file">
                        <InputField type={"file"}/>
                        <div class="save-content-upload-explanation">
                            <span>1장만 등록가능</span>
                        </div>
                    </div>
                </div>

                <div class="save-content-detail">
                    <div class="save-content-text">사진 등록</div>
                    <div class="save-content-input-file">
                        {/* <!-- 파일 여러개 업로드 해야됨 --> */}
                        <InputField type={"File"} />
                        <div class="save-content-upload-explanation">
                            <span>최대 3장까지 등록가능</span>
                        </div>
                    </div>
                </div>

                <div class="save-content-detail">
                    <div class="save-content-text">동영상 등록</div>
                    <div class="save-content-input-file">
                        {/* <!-- 동영상 업로드--> */}
                        <InputField type={"File"} />
                        
                        <div class="save-content-upload-explanation">
                            <span>최대 300MByte까지 등록가능</span>
                        </div>
                    </div>
                </div>

                <div class="save-content-detail">
                    <div class="save-content-text">수정 횟수</div>
                    <div class="save-content-input " id="revisions">
                        {/* <!-- 뒤에 회 붙이는건 자바스크립트로 --> */}
                        <input placeholder="수정 횟수를 입력해주세요" />

                    </div>
                </div>
            </div>
            <button class="save-button">
                <span>서비스 등록하기</span>
            </button>
        </>
    );
}
