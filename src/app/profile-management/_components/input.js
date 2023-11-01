import Image from "next/image";
import InputField from "@/_components/input-field";
import SelectField from "@/_components/select-field";

export default function ProfileManagementInput() {
    const bankOptions = ['부산은행', '국민은행', 'IBK 기업은행', '새마을금고'];
    return(
        <div className="profile-manage-container-body">
            {/* <!-- 프로필 사진 변경 --> */}
            <div className="profile-manage-container-body-image">
                <Image src="https://via.placeholder.com/100" alt="" width={100} height={100}/>
                <InputField type="file" />
            </div>
            <hr />

            {/* <!-- 프로필 정보 변경 --> */}
            <div className="profile-manage-container-body-info">
                {/* <!-- 닉네임 변경 --> */}
                <div className="profile-manage-container-body-info-nickname">
                    <span className="sub-title">닉네임 변경</span>
                    <div>
                        <InputField
                            type="text"
                            placeholder=" 한글, 대소문자, 특수문자 미포함 10글자 이하로 작성해주세요"
                        />
                    </div>
                </div>

                {/* <!-- 자기 소개 변경 --> */}
                <div className="profile-manage-container-body-info-intro">
                    <span className="sub-title">자기 소개</span>
                    <div>
                    {/* <!-- row로 세로 길이 조정 --> */}
                        <InputField
                            className="intro"
                            type="text"
                            placeholder=" 600자 내로 입력해주세요"
                        />
                    </div>
                </div>

                {/* <!-- 출금은행 --> */}
                <div className="profile-manage-container-body-info-intro">
                    <span className="sub-title">출금 은행</span>
                    <div>
                        {/* <!-- row로 세로 길이 조정 --> */}
                        <SelectField className="select-bank" placeholder="출금은행을 입력해주세요" options={bankOptions}/>
                    </div>
                </div>

                {/* <!-- 출금 계좌 변경 --> */}
                <div className="profile-manage-container-body-info-bank-account">
                    <span className="sub-title">출금 계좌</span>
                    {/* <!-- 버튼까지 함께 넣기 위해 css 따로 설정 --> */}
                    <div className="profile-manage-container-body-info-bank-account-inputform">
                        <InputField
                            type="text"
                            placeholder=" 출금 계좌를 입력해주세요"
                        />
                        <button>확인</button>
                    </div>
                </div>
                {/* <!-- 프로필 수정 버튼 --> */}
                <button className="profile-change-button">내 프로필 수정하기</button>
            </div>
        </div>
    );
}