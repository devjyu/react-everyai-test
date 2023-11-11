import { useState, useEffect } from "react";
import PasswordField from "./password";
import JobSelect from "./job-select";
import BusinessSelect from "./business-select";
import AgreeCheck from "./agree-check";
import EmailInput from "./email";

export default function JoinForm({ data }) {
  const [userData, setUserData] = useState({
    email: "",
    code: "",
    password: "",
    userJobIdx: "",
    userBusinessIdx: "",
    isAgreeMarketing: false,
    isActiveOverYear: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // 체크박스 상태관리
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [serviceCheck, setServiceCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [activeCheck, setActiveCheck] = useState(false);

  // Function to handle "모두 동의하기" checkbox
  const allBtnEvent = () => {
    if (allCheck === false) {
      // Set all checkboxes to true if "모두 동의하기" is checked
      setAllCheck(true);
      setAgeCheck(true);
      setServiceCheck(true);
      setPrivacyCheck(true);
      setMarketingCheck(true);
      setActiveCheck(true);
    } else {
      // Set all checkboxes to false if "모두 동의하기" is unchecked
      setAllCheck(false);
      setAgeCheck(false);
      setServiceCheck(false);
      setPrivacyCheck(false);
      setMarketingCheck(false);
      setActiveCheck(false);
    }
  };

  // 체크박스 개별 함수
  const ageBtnEvent = () => {
    ageCheck ? setAgeCheck(false) : setAgeCheck(true);
  };

  const serviceBtnEvent = () => {
    serviceCheck ? setServiceCheck(false) : setServiceCheck(true);
  };

  const privacyBtnEvent = () => {
    privacyCheck ? setPrivacyCheck(false) : setPrivacyCheck(true);
  };

  const marketingBtnEvent = () => {
    marketingCheck
      ? (setMarketingCheck(false),
        setUserData({ ...userData, isAgreeMarketing: false }))
      : (setMarketingCheck(true),
        setUserData({ ...userData, isAgreeMarketing: true }));
  };

  const activeBtnEvent = () => {
    activeCheck
      ? (setActiveCheck(false),
        setUserData({ ...userData, isActiveOverYear: false }))
      : (setActiveCheck(true),
        setUserData({ ...userData, isActiveOverYear: true }));
  };

  // Check if all individual checkboxes are checked and update "모두 동의하기" checkbox accordingly
  useEffect(() => {
    if (
      ageCheck &&
      serviceCheck &&
      privacyCheck &&
      marketingCheck &&
      activeCheck
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, serviceCheck, privacyCheck, marketingCheck, activeCheck]);

  const validationFields = () => {
    if (!userData.email.trim()) {
      alert("이메일을 입력해주세요.");
      return false;
    }
    // if (!userData.code.trim()) {
    //   alert("이메일 인증을 해주세요.");
    //   return false;
    // }
    if (!userData.password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return false;
    }
    if (!userData.userJobIdx) {
      alert("직업을 선택해주세요.");
      return false;
    }
    if (!userData.userBusinessIdx) {
      alert("(비즈니스)분야를 선택해주세요.");
      return false;
    }
    if (!ageCheck || !serviceCheck || !privacyCheck) {
      alert("동의사항을 모두 체크해주세요.");
      return false;
    }
    // 이메일 버튼이 클릭되었는지 확인
    const emailSendButton = document.querySelector(".email-send-button");
    const emailCheckButton = document.querySelector(".email-check-button");

    if (!emailSendButton || !emailCheckButton) {
      alert("이메일 확인 버튼을 먼저 클릭해주세요.");
      return false;
    }
    return true;
  };

  console.log(userData);
  return (
    <form>
      <EmailInput
        value={userData.email}
        onChange={(newEmail) => setUserData({ ...userData, email: newEmail })}
      />
      <PasswordField
        value={userData.password}
        onChange={(newPassword) =>
          setUserData({ ...userData, password: newPassword })
        }
      />
      <JobSelect
        data={data}
        userData={userData}
        handleInputChange={handleInputChange}
      />
      <BusinessSelect
        data={data}
        userData={userData}
        handleInputChange={handleInputChange}
      />
      <AgreeCheck
        allCheck={allCheck}
        ageCheck={ageCheck}
        serviceCheck={serviceCheck}
        privacyCheck={privacyCheck}
        marketingCheck={marketingCheck}
        activeCheck={activeCheck}
        allBtnEvent={allBtnEvent}
        ageBtnEvent={ageBtnEvent}
        serviceBtnEvent={serviceBtnEvent}
        privacyBtnEvent={privacyBtnEvent}
        marketingBtnEvent={marketingBtnEvent}
        activeBtnEvent={activeBtnEvent}
        userData={userData}
      />
      <button type="submit" className="join-membership">
        버튼을 눌러서 회원가입 완료!
      </button>
      <button type="button" className="validation" onClick={validationFields}>
        유효성 검사
      </button>
    </form>
  );
}
