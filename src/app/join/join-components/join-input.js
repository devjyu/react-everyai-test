export default function JoinInput() {
    return (
        <>
            <div className="email">
                <label className="name">이메일 <span className="star">*</span></label>
                <div className="email-send">
                    <input type="email" placeholder="이메일을 입력해주세요" />
                    <button className="email-send-button">인증번호 전송</button>
                </div>
                <div className="email-check">
                    <input type="text" placeholder="인증번호를 입력해주세요" />
                    <button className="email-check-button">확인</button>
                </div>
            </div>
            <div className="password">
                <label>비밀번호 <span className="star">*</span></label>
                <div>
                    <input type="password" placeholder="8자리 이상의 영문(대문자), 숫자, 특수문자 조합" />
                </div>
                <div>
                    <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
                </div>
            </div>
            <div className="occupation">
                <label>직업 <span className="star">*</span></label>
                <div className="occupation-select">
                    <select id="occupation" placeholder="선택하기">
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
            <div className="business">
                <label>(비즈니스)분야 <span className="star">*</span></label>
                <div className="business-select">
                    <select id="business" placeholder="선택하기">
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
            <div className="join-old">
                <div className="orderup">만 14세 이상입니다.</div>
                <div className="checkbox"><input type="checkbox" name="" id="old" /></div>
            </div>
            <div className="join-terms-of-service">
                <div className="terms-of-service">서비스 이용약관에 동의합니다.</div>
                <div className="checkbox">
                <input type="checkbox" name="" id="terms-of-service" />
                </div>
            </div>
            <div className="join-personal-information">
                <div className="personal-information">개인정보수집 이용에 동의합니다</div>
                <div className="checkbox">
                <input type="checkbox" name="" id="personal-information" />
                </div>
            </div>
            <div className="join-marketing">
                <div className="marketing">마켓팅 수신 홍보목적의 개인정보<br />수집 및 이용에 동의합니다. (선택)</div>
                <div className="checkbox">
                <input type="checkbox" name="" id="marketing" />
                </div>
            </div>
            <div className="join-activate">
                <div className="activate">1년 미접속 시에도 계정을 활성화<br /> 상태로유지합니다. (선택)</div>
                <div className="checkbox">
                <input type="checkbox" name="" id="activate" />
                </div>
            </div>
            <div className="join-all-agree">
                <div className="all-agree">모두 동의하기</div>
                <div className="checkbox">
                <input type="checkbox" name="" id="all-agree" />
                </div>
            </div>
            <button className="join-membership">버튼을 눌러서 회원가입 완료!</button>
        </>
    );
}