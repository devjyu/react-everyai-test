import { useState, useEffect } from "react";
import PasswordField from "./password";
import JobSelect from "./job-select";
import BusinessSelect from "./business-select";
import AgreeCheck from "./agree-check";
import EmailInput from "./email";

export default function ExpertJoinForm({ data }) {
  const [userData, setUserData] = useState({
    role: "EXPERT",
    email: "",
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
    const newAllCheckValue = !allCheck; // 모두 동의하기 상태를 반전합니다.
    setAllCheck(newAllCheckValue); // 모두 동의하기 상태를 업데이트합니다.
    setAgeCheck(newAllCheckValue);
    setServiceCheck(newAllCheckValue);
    setPrivacyCheck(newAllCheckValue);
    setMarketingCheck(newAllCheckValue); // 마케팅 동의 상태를 업데이트합니다.
    setActiveCheck(newAllCheckValue); // 활성화 유지 상태를 업데이트합니다.

    // userData 상태도 함께 업데이트합니다.
    setUserData((prevUserData) => ({
      ...prevUserData,
      isAgreeMarketing: newAllCheckValue,
      isActiveOverYear: newAllCheckValue,
    }));
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
    console.log("실행이 되니?");
    console.log(marketingCheck);
    marketingCheck
      ? (setMarketingCheck(false),
        setUserData({ ...userData, isAgreeMarketing: false }))
      : (setMarketingCheck(true),
        setUserData({ ...userData, isAgreeMarketing: true }));
    console.log("4", marketingCheck);
    console.log(userData);
  };

  const activeBtnEvent = () => {
    console.log("실행");
    console.log(activeCheck);
    activeCheck
      ? (setActiveCheck(false),
        setUserData({ ...userData, isActiveOverYear: false }))
      : (setActiveCheck(true),
        setUserData({ ...userData, isActiveOverYear: true }));
    console.log("6", activeCheck);
    console.log(userData);
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
      console.log("effect ---  : ", marketingCheck);
    } else {
      setAllCheck(false);
      console.log("effect : ", marketingCheck);
    }
  }, [ageCheck, serviceCheck, privacyCheck, marketingCheck, activeCheck]);

  const handleJoin = async () => {
    if (!validationFields()) {
      // If validation fails, exit early
      return;
    } else {
      const response = await fetch(
        "http://10.10.10.12:8080/api/v1/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData, marketingCheck, activeCheck),
        }
      );
      console.log(response);
      if (response.ok) {
        alert("회원가입 완료");
        location.replace("/login");
      } else {
        const responseData = await response.json();
        alert(`오류: ${response.status} - ${responseData.error}`);
      }
    }
  };

  const validationFields = () => {
    if (!userData.email.trim()) {
      alert("이메일을 입력해주세요.");
      return false;
    }
    // 이메일 확인 버튼이 클릭되었는지 확인
    // if (!isEmailVerificationButtonClicked) {
    //   alert("이메일 확인 버튼을 먼저 클릭해주세요.");
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
      alert("이메일 중복 확인 후 인증을 해주세요.");
      return false;
    }
    return true;
  };

  console.log(
    allCheck,
    "마케팅",
    userData.isAgreeMarketing,
    marketingCheck,
    "1년",
    userData.isActiveOverYear,
    activeCheck
  );
  console.log(userData);
  return (
    <form>
      <EmailInput
        value={userData.email}
        onChange={(newEmail) => setUserData({ ...userData, email: newEmail })}
        // setIsEmailVerificationButtonClicked={setIsEmailVerificationButtonClicked}
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
      <button type="submit" className="join-membership" onClick={handleJoin}>
        버튼을 눌러서 회원가입 완료!
      </button>
    </form>
  );
}
