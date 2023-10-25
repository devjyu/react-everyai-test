import React from "react";

export default function DropDown({isOpen, onClose}) {
    return isOpen? (
        <div className="profile-dropdown">
            <ul>
                <li>프로필 관리</li>
                <li>마이 페이지</li>
                <li>로그아웃</li>
            </ul>
        </div>
    ) : null;
}