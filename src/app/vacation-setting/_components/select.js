import SelectField from "@/_components/select-field";

export default function VacationSettingSelect() {
    const reasonOptions = [
        '주문 폭주로 인해 잠시 판매를 중단합니다.',
        '휴가로 인해 잠시 판매를 중단합니다.',
        '개인 사정으로 잠시 판매를 중단합니다.'
    ];

    const periodOptions = ['1일', '2일', '3일', '4일', '5일', '6일', '1주', '2주', '3주', '한달'];

    return(
        <div className="vacation-setting-inner-box">
            <div>
                <div className="reason-setting">휴가 사유 설정</div>
                <div>
                    <SelectField className="reason-select" options={reasonOptions} placeholder="눌러서 선택하기" />
                </div>
            </div>
            <div>
                <div className="reason-period-setting">휴가 기간 설정</div>
                <div>
                    <SelectField className="reason-select" options={periodOptions} placeholder="눌러서 선택하기" />
                </div>
            </div>
            <div className="vacation-setting-warning">
                <div>⚠ 휴가 중에도 판매 중인 서비스에 대해 결제가 가능하며
                프로젝트 제안 또한 가능합니다.
                </div>
                <div className='warning-text'>(설정한 기간보다 빠른 복귀도 가능합니다.)</div>
            </div>
            <div><button>휴가신청</button></div>
        </div>
    );
}   