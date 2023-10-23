import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div class="footer-left">
        <div class="footer-left-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40 */}
          </div>
          <div>커뮤니티</div>
        </div>
        <div class="footer-left-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40*/}
          </div>
          <div>찜목록</div>
        </div>
      </div>
      <div class="footer-center">
        <div class="footer-center-element">
          <Image src="" alt="" /> {/*http://via.placeholder.com/80*/}
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-right-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40 */}
          </div>
          <div>메시지</div>
        </div>
        <div class="footer-right-element">
          <div>
            <Image src="" alt="" /> {/*http://via.placeholder.com/40*/}
          </div>
          <div>마이페이지</div>
        </div>
      </div>
    </footer>
  );
}
