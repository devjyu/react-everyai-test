import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div class="search">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          class="search-field"
        />
        <button type="button" class="search-button">
          <Image src="" alt="" /> {/*https://via.placeholder.com/30*/}
        </button>
      </div>
      <div class="user-infor">
        <div>
          <Image src="" alt="" /> {/*https://via.placeholder.com/40*/}
        </div>
        <div class="nickname">닉네임</div>
      </div>
      <div class="alarm">
        <div class="alarm-image">
          <Image src="" alt="" /> {/*https://via.placeholder.com/30x50  */}
        </div>
        <div class="alarm-state-image"></div>
      </div>
    </header>
  );
}


