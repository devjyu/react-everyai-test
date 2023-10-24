import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="search">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="search-field"
        />
        <button type="button" className="search-button">
          <Image src="" alt="" /> {/*https://via.placeholder.com/30*/}
        </button>
      </div>
      <div className="user-infor">
        <div>
          <Image src="" alt="" /> {/*https://via.placeholder.com/40*/}
        </div>
        <div className="nickname">닉네임</div>
      </div>
      <div className="alarm">
        <div className="alarm-image">
          <Image src="" alt="" /> {/*https://via.placeholder.com/30x50  */}
        </div>
        <div className="alarm-state-image"></div>
      </div>
    </header>
  );
}


