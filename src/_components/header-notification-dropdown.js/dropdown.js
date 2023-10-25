import React from "react";

export default function DropDown({isOpen, onClose}) {
    return isOpen? (
        <div className="notification-dropdown">
            <div className="notification-type">
                <button className="notification-order">주문 알림</button>
                <button className="notification-everyai">EA</button>
            </div>
            <div className="notification-text">알림이 없습니다.</div>
            <div className="notification-info-text">알림은 최대 30일까지이며, 최대 7일로 표현됩니다.</div>
        </div>
    ) : null;
}