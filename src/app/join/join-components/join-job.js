export default function JoinJob() {
    return(
        <div className="job">
            <label>직업 <span className="star">*</span></label>
            <div>
                <select className="job-select" placeholder="선택하기">
                    <option value="" disabled selected>선택하기</option>
                    <option value="직장인">직장인</option>
                    <option value="공무원">공무원</option>
                    <option value="소상공인">소상공인</option>
                    <option value="프리랜서">프리랜서</option>
                    <option value="창업자">창업자</option>
                    <option value="대학(원)생">대학(원)생</option>
                    <option value="취업준비생">취업준비생</option>
                    <option value="기타">기타</option>
                </select>
            </div>
        </div>
    );
}