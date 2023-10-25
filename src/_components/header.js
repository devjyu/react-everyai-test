"use client";
import Image from "next/image";
import InputField from "./input-field";
import ProfileDropDown from "./header-profile-dropdown/profile-dropdown";
import NofificationDropDown from "./header-notification-dropdown.js/notification-dropdown";

export default function Header() {
  return (
    <header>
      <div className="search">
        <InputField
          type="text"
          placeholder="검색어를 입력해주세요"
          className="search-field"
        />
        <button type="button" className="search-button">
          <Image src="" alt="검색" width={30} height={30}/> 
        </button>
      </div>
      <div className="user-infor">
        <ProfileDropDown />
        <div className="nickname">닉네임</div>
      </div>
      <div className="alarm">
        <NofificationDropDown />
        <div className="alarm-state-image"></div>
      </div>
    </header>
  );
}

