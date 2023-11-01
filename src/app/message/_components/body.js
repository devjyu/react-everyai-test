import Image from 'next/image';

export default function MessageBody() {
    return(
        <div className="message-list-body">
            {/* <!-- 채팅창 검색창 --> */}
            <div className="search message-search">
                <input type="text" placeholder="검색어를 입력해주세요." className="search-field"  />
                <button type="button" className="search-button">
                    <Image src="https://via.placeholder.com/30" alt="" width={30} height={30}/>
                </button>
            </div>

            {/* <!-- 채팅창 --> */}
            <div className="message-item">
            {/* <!-- 이미지 --> */}
                <div className="message-item-image">
                    <Image src="http://via.placeholder.com/100" alt="" width={70} height={70} />
                </div>
                <div className='message-item-box'>
                    <div className='message-item-first-box'>
                        <div className='message-item-first-box-inner'>
                            <span className='message-nickname'>닉네임</span>
                            <span className='order-status'>거래상태</span>
                        </div>
                        <span className='message-time'>접속시간</span>
                    </div>
                    <div className='message-item-second-box'>
                        <span>메시지 내용</span>
                        ⭐
                    </div>
                </div>
            </div>
        </div>
    );
}