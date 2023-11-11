export default function Title({data}) {
    function handleDelete(idx) {
        const isConfirmed = window.confirm('취소하시겠습니까?');
        if (isConfirmed) {
        fetch(`http://10.10.10.13/api/v1/service/work/${idx}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // 필요에 따라 헤더를 추가할 수 있습니다.
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log('삭제되었습니다.');
            // 여기에 적절한 처리를 추가할 수 있습니다.
            window.location.reload();
          })
          .catch(error => {
            console.error('오류 발생:', error);
            // 여기에 오류 처리를 추가할 수 있습니다.
          });
        } else {
            alert("취소되었습니다")
          }
      }
    return (
        <>    <div class="title">
            <div>주문정보확인</div>
            <div>
                {data.userstatus === "expert" ? (
                    <button>작업일 연장</button>
                ) : null}
                <button onClick={() => handleDelete(data.serviceIdx)}>거래취소요청</button></div>
        </div>
            <hr />
        </>


    );
}
