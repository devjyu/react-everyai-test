import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./dropdown";

export default function ProfileDropDown() {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const openDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    const closeDropDown = () => {
        setIsDropDownOpen(false);
    };

    return(
        <div className="profile-image">
            <Image src="" alt="프로필" width={40} height={40} onClick={openDropDown}/>
            <DropDown isOpen={isDropDownOpen} onClose={closeDropDown} />
        </div>
    );
}
