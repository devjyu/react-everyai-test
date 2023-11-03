import { useState, useEffect } from "react";
import InputField from "@/_components/input-field";
import SelectField from "@/_components/select-field";
import CheckboxField from "@/_components/check-field";
import PasswordInput from "./password";

export default function JoinForm({ data }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    userJobIdx: "",
    userBusinessIdx: "",
    isAgreeMarketing: false,
    isActiveOverYear: false,
  });

  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      if (!passwordRegex.test(value)) {
        setPasswordValidationMessage(
          "비밀번호는 8-15자 이어야 하며, 대소문자, 숫자, 특수문자를 포함해야 합니다."
        );
      } else {
        setPasswordValidationMessage("올바른 비밀번호 형식입니다.");
      }
    }
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

  console.log(JSON.stringify(userData));
  // console.log(setAllCheck + "+" + setAgeCheck + "+" + setServiceCheck);

  // //이메일, 비밀번호, 비밀번호 확인
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [passwordConfirm, setPasswordConfirm] = useState('')

  // //오류메시지 상태저장
  // const [emailMessage, setEmailMessage] = useState('')
  // const [passwordMessage, setPasswordMessage] = useState('')
  // const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

  // // 유효성 검사
  // const [isEmail, setIsEmail] = useState(false)
  // const [isPassword, setIsPassword] = useState(false)
  // const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

  // const handleFormSubmit = (e) => {
  //     e.preventDefault();
  //     if (formData()) {
  //         alert(JSON.stringify(formData));
  //     } else {
  //         alert("실패");
  //     }
  // };

  // const onChangeEmail = ((e) => {
  //     const emailRegex =
  //     /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //     const emailCurrent = e.target.value
  //     setEmail(emailCurrent)

  //     if (!emailRegex.test(emailCurrent)) {
  //     setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
  //     setIsEmail(false)
  //     } else {
  //     setEmailMessage('올바른 이메일 형식이에요 : )')
  //     setIsEmail(true)
  //     }
  // }, [])

  // const onChangePasswordConfirm = (
  //     (e) => {
  //     const passwordConfirmCurrent = e.target.value
  //     setPasswordConfirm(passwordConfirmCurrent)

  //     if (password === passwordConfirmCurrent) {
  //         setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
  //         setIsPasswordConfirm(true)
  //     } else {
  //         setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
  //         setIsPasswordConfirm(false)
  //     }
  //     },
  //     [password]
  // )

  // const [email, setEmail] = useState('');
  // const [exists, setExists] = useState(false);

  // const EmailDuplication = async (event) => {
  //     const value = event.target.value;
  //     setEmail(value);
  //     try {
  //         const response = await fetch('/api/v1/auth/email-duplication', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({ email: value }),
  //         });
  //         const data = await response.text();
  //         if (data === 'exists') {
  //             setExists(true);
  //             console.log(data);
  //         } else {
  //             setExists(false);
  //         }
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  return (
    <form>
      <div className="email">
        <label className="name">
          이메일 <span className="star">*</span>
        </label>
        <div className="email-send">
          <InputField
            type="email"
            placeholder="이메일을 입력해주세요"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <button type="button" className="email-send-button">
            인증번호 전송
          </button>
        </div>
        {/* {email.length > 0 && <p className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</p>} */}
        <div className="email-check">
          <InputField
            type="text"
            placeholder="인증번호를 입력해주세요"
            onChange={() => {}}
          />
          <button type="button" className="email-check-button">
            확인
          </button>
        </div>
      </div>
      <PasswordInput
        value={userData.password}
        onChange={handleInputChange}
        passwordValidationMessage={passwordValidationMessage}
      />
      <div className="job">
        <label>
          직업 <span className="star">*</span>
        </label>
        <div>
          <SelectField
            className="job-select"
            placeholder={"선택하기"}
            options={data.userJobList}
            name="userJobIdx"
            value={userData.userJobIdx}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="business">
        <label>
          (비즈니스)분야 <span className="star">*</span>
        </label>
        <div>
          <SelectField
            className="business-select"
            placeholder="선택하기(단일분야)"
            options={data.userBusinessList}
            name="userBusinessIdx"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="join-agree">
        <CheckboxField
          className="checkbox"
          label="모두 동의하기"
          checked={allCheck}
          onChange={allBtnEvent}
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
          label="1년 미접속 시에도 계정을 활성화 상태로유지합니다. (선택)"
          checked={activeCheck}
          onChange={activeBtnEvent}
          name="isActiveOverYear"
          value={userData.isActiveOverYear}
        />
      </div>
      <button type="submit" className="join-membership">
        버튼을 눌러서 회원가입 완료!
      </button>
    </form>
  );
}
