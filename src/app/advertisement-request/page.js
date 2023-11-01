import '@/app/advertisement-request/style.css';
import MainLayout from '@/_components/main-layout';

export default function AdvertisementRequest() {
    return(
        <MainLayout>
            <div className="title">광고신청</div>
            <hr />
            <div className="advertisement-setting-inner-box">
                <div className="ad-type">광고 유형 선택</div>
                <div className="ad-type-inner-box">
                    <div className="ad-type-inner-box-details1">루키</div>
                    <div className="ad-type-inner-box-details2">50,000원</div>
                    <div className="ad-type-inner-box-details3">
                        <input type="radio" name="advertisement-type" value="" />
                    </div>
                </div>
                <div className="ad-type-inner-box">
                    <div className="ad-type-inner-box-details1">일반</div>
                    <div className="ad-type-inner-box-details2">100,000원</div>
                    <div className="ad-type-inner-box-details3">
                        <input type="radio" name="advertisement-type" value="" />
                    </div>
                </div>
                <div className="ad-type-inner-box">
                    <div className="ad-type-inner-box-details1">플러스</div>
                    <div className="ad-type-inner-box-details2">200,000원</div>
                    <div className="ad-type-inner-box-details3">
                        <input type="radio" name="advertisement-type" value="" />
                    </div>
                </div>
                <div className="service-select">서비스 선택</div>
                <div>
                    <select name="" className="service-title-select-">
                    <option value="" disabled selected>눌러서 선택하기</option>
                    </select>
                </div>
                <div className="ad-period-setting">광고 기간 선택</div>
                <div>
                    <select name="" className="ad-period-setting-select">
                    <option value="" disabled selected>눌러서 선택하기</option>
                    </select>
                </div>
                <div className="ad-detail-warning">
                    <span>⚠ 광고 상세 안내<br />
                    <li>
                        광고가 적용된 이후에는 광고 상품, 서비스 및 후기를 변경할 수
                        없습니다.
                    </li>
                    <li>
                        서비스 휴가 사용 또는 자발적인 서비스 판매중단 시 광고를
                        일시중지하거나, 기간을 연장할 수 없습니다.
                    </li>
                    <br />

                    취소 및 환불 안내 <br />
                    <li>
                        구매 즉시 광고가 서비스에 적용되며, 광고가 적용된 이후 중도해지
                        시. 환불이 불가합니다.
                    </li>
                    <li>
                        서비스 이용약관 및 운영정책을 위반하여 판매중단, 서비스 이요
                        제한 및 기타 조치를 받을 경우, 광고 기간은 연장되지 않으며
                        환불이 불가능합니다.
                    </li>
                    </span>
                </div>
                <div className="ad-payment-button"><button>광고 결제하기</button></div>
                &nbsp;
                <div></div>
            </div>
        </MainLayout>
    );
}