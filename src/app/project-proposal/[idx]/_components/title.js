export default function Title({ data }) {
    console.log(data);
    return (
        <>
            <div class="inner-container-header">
                <div class="title">
                    <span>{data.nickname}</span>의 제안
                </div>
                <hr />
            </div>
        </>
    );
}
