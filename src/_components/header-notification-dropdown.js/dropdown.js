import React from "react";

export default function DropDown({isOpen, onClose}) {
    return isOpen? (
        <div className="notification-dropdown">
            <div className="notification-type">
                <div>거래알림</div>
                <div>EA</div>
            </div>
            <div>알림이 없습니다.</div>
        </div>
    ) : null;
}