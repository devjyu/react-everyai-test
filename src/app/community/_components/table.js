export default function CommunityTable({data}) {

    const sortedData = [...data.content];
    sortedData.sort((a, b) => {
        if (a.user.nickname === 'admin') return -1;
        if (b.user.nickname === 'admin') return 1;
        return 0;
    });

    return(
        <div className="inner-container-body">
            <div className="inner-container-body-filter-btn">
                <button type="button">전체글</button>
                <button>개념글</button>
                <button>추천글</button>
            </div>
            
                <div className="inner-container-body-table" >
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>작성자</th>
                                <th>조회수</th>
                                <th>추천수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((community, index) => (
                            <tr key={index}>
                                <td>{community.user.nickname === 'admin' ? "공지" : community.idx}</td>
                                <td>{community.title}</td>
                                <td>{community.createDate}</td>
                                <td>{community.user.nickname}</td>
                                <td>{community.viewCount}</td>
                                <td>{community.recommendCount}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            
            <div className="inner-container-body-write-btn">
                <button>글쓰기</button>
            </div>

            <div className="inner-container-body-search">
                <div>
                    <select className="search-options">
                        <option value="option1" selected>전체</option>
                        <option value="option2">제목</option>
                        <option value="option3">내용</option>
                        <option value="option4">작성자</option>
                    </select>
                    <input type="text" />
                    <button>검색</button>
                </div>
            </div>

            <div className="inner-container-body-paging">
                <ul>
                    <a href="#">
                        <li>&lt;&lt;</li>
                    </a>
                    <a href="#">
                        <li>&lt;</li>
                    </a>
                    <a href="#">
                        <li>{1}</li>
                    </a>
                    <a href="#">
                        <li>{2}</li>
                    </a>
                    <a href="#">
                        <li>{3}</li>
                    </a>
                    <a href="#">
                        <li>{4}</li>
                    </a>
                    <a href="#">
                        <li>{5}</li>
                    </a>
                    <a href="#">
                        <li>&gt;</li>
                    </a>
                    <a href="#">
                        <li>&gt;&gt;</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}