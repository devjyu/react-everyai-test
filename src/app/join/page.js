export default function Join() {
    return(
        <div class="no-container">
        <div class="join">
          <div class="join-title">
            Welcome to
            <span class="join-every-ai">Every AI</span>
          </div>
          <div class="join-title-information">
            이것만 작성하면 5분 안에<br />
            &nbsp;회원가입! - 전문가
          </div>
          <div class="email">이메일 <span class="star">*</span></div>
          <input type="email" id="email" placeholder="&nbsp;&nbsp;이메일을 입력해주세요" />
          <div class="password">비밀번호 <span class="star">*</span></div>
          <input type="password" id="password" placeholder="&nbsp;&nbsp;8자리 이상의 영문(대문자), 숫자, 특수문자 조합" />
          <input type="password" id="passwordCheck" placeholder="&nbsp;&nbsp;비밀번호 재확인" />
          <div class="occupation">직업 <span class="star">*</span></div>
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
          <div class="business">
            업무(비즈니스)분야 <span class="star">*</span>
          </div>
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
          <div class="join-old">
            <div class="orderup">만 14세 이상입니다.</div>
            <div class="checkbox"><input type="checkbox" name="" id="old" /></div>
          </div>
          <div class="join-terms-of-service">
            <div class="terms-of-service">서비스 이용약관에 동의합니다.</div>
            <div class="checkbox">
              <input type="checkbox" name="" id="terms-of-service" />
            </div>
          </div>
          <div class="join-personal-information">
            <div class="personal-information">개인정보수집 &#183 이용에 동의합니다</div>
            <div class="checkbox">
              <input type="checkbox" name="" id="personal-information" />
            </div>
          </div>
          <div class="join-marketing">
            <div class="marketing">마켓팅 수신 &#183 홍보목적의 개인정보<br />수집 및 이용에 동의합니다. (선택)</div>
            <div class="checkbox">
              <input type="checkbox" name="" id="marketing" />
            </div>
          </div>
          <div class="join-activate">
            <div class="activate">1년 미접속 시에도 계정을 활성화<br /> 상태로유지합니다. (선택)</div>
            <div class="checkbox">
              <input type="checkbox" name="" id="activate" />
            </div>
          </div>
          <div class="join-all-agree">
            <div class="all-agree">모두 동의하기</div>
            <div class="checkbox">
              <input type="checkbox" name="" id="all-agree" />
            </div>
          </div>
          <button class="join-membership">버튼을 눌러서 회원가입 완료!</button>
        </div>
      </div>
    );
}