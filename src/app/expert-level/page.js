import '@/app/expert-level/style.css';
import MainLayout from '@/_components/main-layout';

export default function ExpertLevel() {
    return(
        <MainLayout>
            <div className="title">내 전문가 등급</div>
            <hr />
            <div className="info">
                <span className="personal-info">전문가 닉네임</span>님의
                <span className="personal-info">조회 기준 월초 ~ 월말</span>월 <br />
                전문가 등급은 <span className="personal-info">전문가 등급</span>입니다.
            </div>
            <div className="expert-grade-body">
                <div className="my-expert-grade-status-box">
                    <div className="my-expert-grade-status-box-header">
                        <span className="my-status">내 현황</span>
                        <span className="personal-sub-info">(조회 기준 월초 ~ 조회 기준 월말)</span>
                    </div>
                    <div className="my-expert-grade-status-box-body">
                        <div className="my-expert-grade-status-box-body-sale">
                            {/* <!-- 이 DIV에만 오른쪽 실선 적용되서 style 직접 적용시켰습니다. --> */}
                            <div className="my-expert-grade-status-box-body-sale-left">
                                <div className="sales">누적 판매 건수</div>
                                <div className="sales">
                                    <span className="personal-info">누적 판매 건수</span>건
                                </div>
                            </div>
                            <div className="my-expert-grade-status-box-body-sale-right">
                                <div className="sales">누적 판매 금액</div>
                                <div className="sales">
                                    <span className="personal-info">누적 판매 금액</span>원
                                </div>
                            </div>
                        </div>
                        <div className="my-expert-grade-status-box-rating">
                            <div>
                                <div className="my-expert-grade-status-box-rating-title">만족도</div>
                                <div className="my-expert-grade-status-box-rating-bar">
                                    <img src="https://via.placeholder.com/30" alt="" />
                                </div>
                                <div className="my-expert-grade-status-box-rating-score">4.9</div>
                            </div>
                            <div>
                                <div className="my-expert-grade-status-box-rating-title">메시지 응답률</div>
                                <div className="my-expert-grade-status-box-rating-bar">
                                    <img src="https://via.placeholder.com/30" alt="" />
                                </div>
                                <div className="my-expert-grade-status-box-rating-score">99%</div>
                            </div>
                            <div>
                                <div className="my-expert-grade-status-box-rating-title">만족도</div>
                                <div className="my-expert-grade-status-box-rating-bar">
                                    <img src="https://via.placeholder.com/30" alt="" />
                                </div>
                                <div className="my-expert-grade-status-box-rating-score">93%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-expert-grade-status-footer">
                    <p>ㆍ내 현황은 매일 0시에 업데이트 됩니다.</p>
                    <p>
                    ㆍ다음 등급 심사일은 {10}월 1일입니다. 등급 심사일로부터 2개월
                    이내에 패널티 상태였다면, NEW등급이 적용됩니다.
                    </p>
                    <p>
                    ㆍ누적 판매 건수 / 금액 조건을 만족하였더라도, 그 외 조건을 미충족한
                    전문가는 NEW등급이 적용됩니다.
                    </p>
                </div>
                <div className="expert-grade-info">
                    <div className="expert-grade-info-title">
                        <span>전문가 등급 안내</span>
                    </div>
                    <div className="expert-grade-info-table">
                        <table>
                            <tr className="title-color">
                                <th className="left-delete">등급</th>
                                <th>누적 판매 금액</th>
                                <th>누적판매건수</th>
                                <th className="right-delete">서비스 평점</th>
                            </tr>
                            <tr className="dark-color">
                                <td className="left-delete">Lv. 0</td>
                                <td>-</td>
                                <td>서비스 제작 후 판매 0 건</td>
                                <td className="right-delete">-</td>
                            </tr>
                            <tr className="light-color">
                                <td className="left-delete">Lv. 1</td>
                                <td>-</td>
                                <td>서비스 제작 후 판매 1 건 이상</td>
                                <td className="right-delete">-</td>
                            </tr>
                            <tr className="dark-color">
                                <td className="left-delete">Lv. 2</td>
                                <td>100 만원 이상</td>
                                <td>서비스 제작 후 판매 50 건 이상</td>
                                <td className="right-delete">4.0 이상</td>
                            </tr>
                            <tr className="light-color">
                                <td className="left-delete">Lv. 3</td>
                                <td>500 만원 이상</td>
                                <td>서비스 제작 후 판매 100 건 이상</td>
                                <td className="right-delete">4.3 이상</td>
                            </tr>
                            <tr className="dark-color">
                                <td className="left-delete">Master</td>
                                <td>1000 만원 이상</td>
                                <td>서비스 제작 후 판매 100 건 이상</td>
                                <td className="right-delete">4.5 이상</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>

    );
}