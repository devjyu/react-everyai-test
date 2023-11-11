import React from "react";
import Link from "next/link";
import { removeAccessToken, removeRefreshToken } from "@/util/cookie";

export default function ProfileDropDown({isOpen, onClose}) {

    const logout = () => {
        removeAccessToken("accessToken");
        removeRefreshToken("refreshToken");
        location.replace("/main");
    }

    return isOpen? (
        <div className="profile-dropdown">
            <ul>
                <Link href={'/profile-management'}><li>프로필 관리</li></Link>
                <Link href={'/my-page'}><li>마이 페이지</li></Link>
                <li onClick={() => logout()}>로그아웃</li>
            </ul>
        </div>
    ) : null;
}