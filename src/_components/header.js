"use client";
import Image from "next/image";
import InputField from "./input-field";
import Dropdown from "./dropdown/dropdown";

export default function Header({data}) {
  return (
    <header>
      <div className="search">
        <InputField
          type="text"
          placeholder="검색어를 입력해주세요"
          className="search-field"
        />
        <button type="button" className="search-button">
          <Image src={"/search.png"} alt="검색" width={30} height={30} />
        </button>
      </div>
      <Dropdown data={data} />
    </header>
  );
}

