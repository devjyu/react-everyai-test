import React, {useState} from "react";
import Image from "next/image";
import DropDown from "./dropdown";

export default function NofificationDropDown() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const openDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    const closeDropDown = () => {
        setIsDropDownOpen(false);
    };

    return(
        <div className="notification-image">
            <Image src="" alt="알림" width={30} height={50} onClick={openDropDown}/>
            <DropDown isOpen={isDropDownOpen} onClose={closeDropDown} />
        </div>
    );
}