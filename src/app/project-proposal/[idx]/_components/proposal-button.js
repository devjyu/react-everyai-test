export default function ProposalButton({data}) {
    return (
        <div className="inner-container-body-suggest-button">
        {data.isEnd ? (
            <button disabled className="suggest-button">마감</button>
        ) : (
            <button className="suggest-button">프로젝트 체택하기</button>
        )}
    </div>
    );
}
