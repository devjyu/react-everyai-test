import CheckboxField from "@/_components/check-field";

export default function JoinAgree() {
  return (
    <div className="join-agree">
      <CheckboxField className="checkbox" label="만 14세 이상입니다." />
      <CheckboxField className="checkbox" label="서비스 이용약관에 동의합니다." />
      <CheckboxField className="checkbox" label="개인정보수집 이용에 동의합니다" />
      <CheckboxField className="checkbox" label="마켓팅 수신 홍보목적의 개인정보수집 및 이용에 동의합니다. (선택)" />
      <CheckboxField className="checkbox" label="1년 미접속 시에도 계정을 활성화 상태로유지합니다. (선택)" />
      <CheckboxField className="checkbox" label="모두 동의하기" />
    </div>
  );
}
