export default function JoinStartButton() {
    return(
        <div className="choice-button">
            {/* <!-- 의뢰인 --> */}
            <button>
                <span className="font-large">의뢰인으로 가입하기</span>
                <span className="font-small">외주 / 아웃소싱 맡길 곳을 찾고 있나요?</span>
            </button>
            {/* <!-- 전문가 --> */}
            <button>
                <span className="font-large">전문가로 가입하기</span>
                <span className="font-small">내가 가진 기술로 수익을 창출하고 싶나요?</span>
            </button>
        </div>
    );
}