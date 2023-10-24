export default function JoinAgree() {
  return (
    <div className="join-agree">
      <div className="join-old">
        <div className="orderup">만 14세 이상입니다.</div>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="join-terms-of-service">
        <div className="terms-of-service">서비스 이용약관에 동의합니다.</div>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="join-personal-information">
        <div className="personal-information">
          개인정보수집 이용에 동의합니다
        </div>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="join-marketing">
        <div className="marketing">
          마켓팅 수신 홍보목적의 개인정보
          <br />
          수집 및 이용에 동의합니다. (선택)
        </div>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="join-activate">
        <div className="activate">
          1년 미접속 시에도 계정을 활성화
          <br /> 상태로유지합니다. (선택)
        </div>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="join-all-agree">
        <div className="all-agree">모두 동의하기</div>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
