import SelectField from "@/app/_components/select-field";

export default function JoinBusiness() {

    const businessOptions  = [
        'IT 개발',
        '콘텐츠 제작',
        '음식/주점',
        '쇼핑몰',
        '제조업',
        '마케팅/광고',
        '미용/뷰티',
        '병의원/제약',
        '금융/보험',
        '여행/숙박',
        '부동산',
        '학원/교육',
        '기타',
    ];
    
    return (
        <div className="business">
            <label>(비즈니스)분야 <span className="star">*</span></label>
            <div>
                <SelectField className="business-select" placeholder="선택하기(단일분야)" options={businessOptions} />
            </div>
        </div>
    );
}