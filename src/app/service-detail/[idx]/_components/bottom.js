import Image from "next/image";

export default function Bottom() {
    // 현재 URL을 클립보드에 복사하고 알림
    const copyURL = () => {
    let currentUrl = window.document.location.href;
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  
    alert("링크가 복사되었습니다.");
  };
    return (
        <div class="payment-agree-paybtn">
            <div>
                <div>
                    <button type="button">문의하기</button>
                    <button type="button">구매하기</button>
                </div>
                <div>
                    <div className="share-icon">
                        <Image src="https://via.placeholder.com/300" width={50} height={50} alt="" onClick={()=>copyURL()} />
                    </div>
                    <div className="bookmark-icon">
                        <Image src="https://via.placeholder.com/300" width={50} height={50} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};