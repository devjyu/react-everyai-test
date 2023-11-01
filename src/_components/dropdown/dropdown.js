import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NotificationDropDown from "./notification-dropdown";
import ProfileDropDown from "./profile-dropdown";

export default function Dropdown() {
    
    const [isProfileDropDown, setIsProfileDropDown] = useState(false);
    const [isNotificationDropDown, setIsNotificationDropDown] = useState(false);
  
    const profileRef = useRef(null);
    const notificationRef = useRef(null);
  
    useEffect(() => {
      document.addEventListener('click', handleDocumentClick);
  
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);
  
    const handleDocumentClick = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setIsProfileDropDown(false);
        setIsNotificationDropDown(false);
      }
    };
  
    const profileOpenDropDown = () => {
      setIsProfileDropDown(!isProfileDropDown);
      if (isNotificationDropDown===true) {
        setIsNotificationDropDown(!isNotificationDropDown);
      }
      
    };
  
    const nofificationOpenDropDown = () => {
      setIsNotificationDropDown(!isNotificationDropDown);
      if (isProfileDropDown===true) {
        setIsProfileDropDown(!isProfileDropDown);
      }
      
    };

    return(
        <>
        <div className="user-infor">
            <div className="profile-image">
            <Image
                src=""
                alt="프로필"
                width={40}
                height={40}
                onClick={profileOpenDropDown}
                ref={profileRef}
            />
            <ProfileDropDown isOpen={isProfileDropDown}/>
            </div>
            <div className="nickname">닉네임</div>
        </div>
        <div className="alarm">
            <div className="notification-image">
            <Image
                src={'/notification.png'}
                alt="알림"
                width={40}
                height={40}
                onClick={nofificationOpenDropDown}
                ref={notificationRef}
            />
            <NotificationDropDown
                isOpen={isNotificationDropDown}
            />
            </div>
            <div className="alarm-state-image"></div>
        </div>
        </>
    );
}