import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-left-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40 */}
          </div>
          <div>커뮤니티</div>
        </div>
        <div className="footer-left-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40*/}
          </div>
          <div>찜목록</div>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-center-element">
          <Image src="" alt="" /> {/*http://via.placeholder.com/80*/}
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40 */}
          </div>
          <div>메시지</div>
        </div>
        <div className="footer-right-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40*/}
          </div>
          <div>마이페이지</div>
        </div>
      </div>
    </footer>
  );
}
