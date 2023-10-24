export default function JoinBusiness() {
    return (
        <div className="business">
            <label>(비즈니스)분야 <span className="star">*</span></label>
            <div>
                <select className="business-select" placeholder="선택하기">
                    <option value="" disabled selected>선택하기(단일분야)</option>
                    <option value="IT 개발">IT 개발</option>
                    <option value="콘텐츠 제작">콘텐츠 제작</option>
                    <option value="음식/주점">음식/주점</option>
                    <option value="쇼핑몰">쇼핑몰</option>
                    <option value="제조업">제조업</option>
                    <option value="마케팅/광고">마케팅/광고</option>
                    <option value="미용/뷰티">미용/뷰티</option>
                    <option value="병의원/제약">병의원/제약</option>
                    <option value="금융/보험">금융/보험</option>
                    <option value="여행/숙박">여행/숙박</option>
                    <option value="부동산">부동산</option>
                    <option value="학원/교육">학원/교육</option>
                    <option value="기타">기타</option>
                </select>
            </div>
        </div>
    );
}