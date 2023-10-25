import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-left-element">
          <div>
            <Image src="" alt="커뮤니티" width={40} height={40} /> 
          </div>
          <div>커뮤니티</div>
        </div>
        <div className="footer-left-element">
          <div>
            <Image src="" alt="찜" width={40} height={40} /> 
          </div>
          <div>찜목록</div>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-center-element">
          <Image src="" alt="홈" width={80} height={80} /> 
        </div>
        <div className="footer-center-circle"></div>
      </div>
      <div className="footer-right">
        <div className="footer-right-element">
          <div>
            <Image src="" alt="메시지" width={40} height={40} /> 
          </div>
          <div>메시지</div>
        </div>
        <div className="footer-right-element">
          <div>
            <Image src="" alt="마이페이지" width={40} height={40} />
          </div>
          <div>마이페이지</div>
        </div>
      </div>
    </footer>
  );
}
