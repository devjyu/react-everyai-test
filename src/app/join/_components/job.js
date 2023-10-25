import SelectField from "@/_components/select-field";

export default function JoinJob() {

    const jobOptions  = [
        '직장인',
        '공무원',
        '소상공인',
        '프리랜서',
        '창업자',
        '대학(원)생',
        '취업준비생',
        '기타',
    ];

    return(
        <div className="job">
            <label>직업 <span className="star">*</span></label>
            <div>
                <SelectField className="job-select" placeholder="선택하기" options={jobOptions} />
            </div>
        </div>
    );
}