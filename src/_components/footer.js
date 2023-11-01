import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-left-element">
          <Link href={'/community'}>
            <div>
              <Image src="http://via.placeholder.com/40" alt="" width={40} height={40} />
            </div>
          </Link>
          <div>커뮤니티</div>
        </div>
        <div className="footer-left-element">
          <Link href={'/bookmark'}>
            <div>
              <Image src="http://via.placeholder.com/40" alt="" width={40} height={40} />
            </div>
          </Link>
          <div>찜목록</div>
        </div>
      </div>
      <div className="footer-center">
        <Link href={'/main'}>
          <div className="footer-center-element">
            <Image src="http://via.placeholder.com/80" alt="" width={80} height={80} />
          </div>
        </Link>
        <div className="footer-center-circle"></div>
      </div>
      <div className="footer-right">
        <div className="footer-right-element">
          <Link href={'/message'}>
            <div>
              <Image src="http://via.placeholder.com/40" alt="" width={40} height={40} />
            </div>
          </Link>
          <div>메시지</div>
        </div>
        <div className="footer-right-element">
          <Link href={'/my-page'}>
            <div>
              <Image src="http://via.placeholder.com/40" alt="" width={40} height={40} />
            </div>
          </Link>
          <div>마이페이지</div>
        </div>
      </div>
    </footer>
  );
}
