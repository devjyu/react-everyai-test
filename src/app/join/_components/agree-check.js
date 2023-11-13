import CheckboxField from "@/_components/check-field";

export default function AgreeCheck({
  allCheck,
  ageCheck,
  serviceCheck,
  privacyCheck,
  marketingCheck,
  activeCheck,
  allBtnEvent,
  ageBtnEvent,
  serviceBtnEvent,
  privacyBtnEvent,
  marketingBtnEvent,
  activeBtnEvent,
  userData,
}) {
  return (
    <div className="join-agree">
      <CheckboxField
        className="checkbox"
        label="모두 동의하기"
        checked={allCheck}
        onChange={() => allBtnEvent()}
      />
      <CheckboxField
        className="checkbox"
        label="만 14세 이상입니다."
        checked={ageCheck}
        onChange={ageBtnEvent}
      />
      <CheckboxField
        className="checkbox"
        label="서비스 이용약관에 동의합니다."
        checked={serviceCheck}
        onChange={serviceBtnEvent}
      />
      <CheckboxField
        className="checkbox"
        label="개인정보수집 이용에 동의합니다"
        checked={privacyCheck}
        onChange={privacyBtnEvent}
      />
      <CheckboxField
        className="checkbox"
        label="마켓팅 수신 홍보목적의 개인정보수집 및 이용에 동의합니다. (선택)"
        checked={marketingCheck}
        onChange={marketingBtnEvent}
        name="isAgreeMarketing"
        value={userData.isAgreeMarketing}
      />
      <CheckboxField
        className="checkbox"
        label="1년 미접속 시에도 계정을 활성화 상태로 유지합니다. (선택)"
        checked={activeCheck}
        onChange={activeBtnEvent}
        name="isActiveOverYear"
        value={userData.isActiveOverYear}
      />
    </div>
  );
}
