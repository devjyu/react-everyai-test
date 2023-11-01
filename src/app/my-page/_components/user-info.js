import Image from "next/image";

export default function MyPageUserInfo() {
    return(
        <>
            {/* <!-- 마이페이지 유저 정보--> */}
            <div className="mypage-user">
                <Image className='mypage-user-profile' src="https://via.placeholder.com/300" alt='프로필' width={100} height={100}/>
                <div className="mypage-user-info">
                    <div className='level-and-title'>
                        <div className="mypage-user-info-title">전문가</div>
                        <div className="mypage-user-info-level">Level2</div>
                    </div>
                    <div>
                        <div className="mypage-user-info-text-name">UNI Maker</div>
                        <button className='transform-button'>의뢰인으로 전환</button>
                    </div>
                </div>
            </div>
        </>
    );
}