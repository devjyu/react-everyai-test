import InputField from "@/_components/input-field";
import SelectField from "@/_components/select-field";
import CheckboxField from "@/_components/check-field";

export default function JoinForm() {
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

    return(
        <form>
            <div className="email">
                <label className="name">이메일 <span className="star">*</span></label>
                <div className="email-send">
                    <InputField type="email" placeholder="이메일을 입력해주세요" />
                    <button className="email-send-button">인증번호 전송</button>
                </div>
                <div className="email-check">
                    <InputField type="text" placeholder="인증번호를 입력해주세요" />
                    <button className="email-check-button">확인</button>
                </div>
            </div>     
            <div className="password">
                <label>비밀번호 <span className="star">*</span></label>
                <div>
                    <InputField type="password" placeholder="8자리 이상의 영문(대문자), 숫자, 특수문자 조합" />
                </div>
                <div>
                    <InputField type="password" placeholder="비밀번호를 다시 입력해주세요" />
                </div>
            </div>
            <div className="job">
                <label>직업 <span className="star">*</span></label>
                <div>
                    <SelectField className="job-select" placeholder="선택하기" options={jobOptions} />
                </div>
            </div>
            <div className="business">
                <label>(비즈니스)분야 <span className="star">*</span></label>
                <div>
                    <SelectField className="business-select" placeholder="선택하기(단일분야)" options={businessOptions} />
                </div>
            </div>
            <div className="join-agree">
                <CheckboxField className="checkbox" label="만 14세 이상입니다." />
                <CheckboxField className="checkbox" label="서비스 이용약관에 동의합니다." />
                <CheckboxField className="checkbox" label="개인정보수집 이용에 동의합니다" />
                <CheckboxField className="checkbox" label="마켓팅 수신 홍보목적의 개인정보수집 및 이용에 동의합니다. (선택)" />
                <CheckboxField className="checkbox" label="1년 미접속 시에도 계정을 활성화 상태로유지합니다. (선택)" />
                <CheckboxField className="checkbox" label="모두 동의하기" />
            </div>
            <button className="join-membership">버튼을 눌러서 회원가입 완료!</button>
        </form>
    );
}