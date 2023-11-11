import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NotificationDropDown from "./notification-dropdown";
import ProfileDropDown from "./profile-dropdown";

export default function Dropdown({ data }) {
  // const Data = data;

  // 프로필 드랍다운
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const profileRef = useRef(null);

  // 알림 드랍다운
  const [isNotificationDropDown, setIsNotificationDropDown] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(e.target) &&
      isProfileDropDown
    ) {
      setIsProfileDropDown(false);
    }
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target) &&
      isNotificationDropDown
    ) {
      setIsNotificationDropDown(false);
    }
  };

  const profileOpenDropDown = () => {
    setIsProfileDropDown(!isProfileDropDown);
    if (isNotificationDropDown) {
      setIsNotificationDropDown(false);
    }
  };

  const nofificationOpenDropDown = () => {
    setIsNotificationDropDown(!isNotificationDropDown);
    if (isProfileDropDown) {
      setIsProfileDropDown(false);
    }
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileDropDown(false);
        setIsNotificationDropDown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const goLogin = () => {
    location.href = `/login`;
  }

  // console.log("유저", data);
  // console.log("닉네임", data.data.nickName);

  return (
    <div className="dropdown-content" ref={dropdownRef}>
      {data ? (
        <>
          <div className="user-infor">
            <div className="profile-image">
              <Image
                src={data.data.profileImage}
                alt="프로필"
                width={40}
                height={40}
                onClick={profileOpenDropDown}
                ref={profileRef}
              />
              <ProfileDropDown isOpen={isProfileDropDown} />
            </div>
            <div className="nickname">{data.data.nickName}</div>
          </div>
          <div className="alarm">
            <div className="notification-image">
              <Image
                src={"/bell.png"}
                alt="알림"
                width={40}
                height={40}
                onClick={nofificationOpenDropDown}
                ref={notificationRef}
              />
              <NotificationDropDown isOpen={isNotificationDropDown} />
            </div>
            <div className="alarm-state-image"></div>
          </div>
        </>
      ) : (
        <div className="user-infor">
          <div className="profile-image" onClick={() => goLogin()}>
            <Image
              src={"/user_nologin.png"}
              alt="프로필"
              width={40}
              height={40}
              onClick={profileOpenDropDown}
              ref={profileRef}
            />
          </div>
        </div>
      )}
    </div>
  );
}