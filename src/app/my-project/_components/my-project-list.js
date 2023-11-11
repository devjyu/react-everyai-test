import Image from "next/image";

export default function MyProjectList({ data }) {

  const projectUpdateClick = (index) => {
    window.location.href = `project-update/${index}`;
  };
  const recievedProjectClick = (index) => {
    window.location.href = `recieved-proposal/${index}`;
  };
  function handleDelete(idx) {
    const isConfirmed = window.confirm('삭제 하시겠습니까?');
    if (isConfirmed) {
      fetch(`http/10.10.10.13:8080/api/v1/project/mine/${idx}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('삭제되었습니다.');
          // 여기에 적절한 처리를 추가할 수 있습니다.
          window.location.reload();
        })
        .catch(error => {
          console.error('오류 발생:', error);
          // 여기에 오류 처리를 추가할 수 있습니다.
        });
    } else {
      alert("삭제가 취소 됐습니다")
      // 사용자가 '아니오'를 선택한 경우에 실행될 코드를 여기에 추가합니다.
    }
  }
  return (
    <>
      {/* <!-- 바디 --> */}
      <div className="inner-container-body">
        {/* <!-- 내 프로젝트 전체 리스트 --> */}
        <div className="inner-container-body-project-list">

          {data.projectList.map((project) => (

            < div className="inner-container-body-project-item" key={project.idx} >
              {/* <!-- 왼쪽 --> */}
              < div className="project-item-left" >
                <div className="project-item-left-image">
                  <Image src={project.thumbnailUrl} alt="프로젝트 썸네일" width={150} height={150} />
                  <div>d-{project.dDay}</div>
                </div>

              </div>

              {/* <!-- 중간 --> */}
              <div className="project-item-middle">
                <div className="project-item-middle-number">
                  #<span>{String(project.idx).padStart(6, '0')}</span>
                </div>
                <div className="project-item-middle-title">
                  <span>{project.title}</span>
                </div>
                <div className="project-item-middle-price">
                  예산<span> {project.price} </span>원
                </div>
              </div>

              {/* <!-- 오른쪽 --> */}
              <div className="project-item-right">
                <div className="project-item-right-top">
                  <div onClick={() => projectUpdateClick(project.idx)}>수정</div>
                  <div onClick={() => handleDelete(project.idx)}>삭제</div>
                </div>
                <div className="project-item-right-middle"
                  style={{
                    backgroundColor: project.status === 'end' ? '#adadad' : '#3e9ce4', // 값에 따라 색상을 설정합니다.
                    color: project.status === 'end' ? 'black' : 'white',
                  }}>
                  <span> {project.status} </span>
                </div>
                <div className="project-item-right-bottom"
                  onClick={() => recievedProjectClick(project.idx)}>
                  받은 제안 보러가기
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
