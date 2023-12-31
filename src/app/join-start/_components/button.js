export default function JoinStartButton() {

    const goJoinExpert = () => {
        location.href = `/join/expert`;
    }

    const goJoinClient = () => {
        location.href = `/join/client`;
    }

    return(
        <div className="choice-button">
            {/* <!-- 의뢰인 --> */}
            <button type="button" onClick={() => goJoinClient()}>
                <span className="font-large">의뢰인으로 가입하기</span>
                <span className="font-small">외주 / 아웃소싱 맡길 곳을 찾고 있나요?</span>
            </button>
            {/* <!-- 전문가 --> */}
            <button type="button" onClick={() => goJoinExpert()}>
                <span className="font-large">전문가로 가입하기</span>
                <span className="font-small">내가 가진 기술로 수익을 창출하고 싶나요?</span>
            </button>
        </div>
    );
}