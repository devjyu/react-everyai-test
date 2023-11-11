import Image from "next/image";
import { useEffect, useState, useRef } from 'react';

export default function RegistrationButton() {
    const projectRegistrationClick = () => {
        window.location.href = "/project-registration";
      };
    return (
        <>
            <div class="inner-container-body-btn"  onClick={projectRegistrationClick}>
                <button>프로젝트 등록하기</button>
            </div>
        </>
    );
}
