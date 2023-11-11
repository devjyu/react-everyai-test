import Image from "next/image";
import Link from "next/link";

export default function Footer({data}) {
  const noLoginStatus = () => {
    alert("로그인 후 이용가능합니다.");
    location.replace("/main");
  }
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-left-element">
          <Link href={'/community'}>
            <div>
              <Image src={"/community.png"} alt="" width={40} height={40} />
            </div>
          </Link>
          <div>커뮤니티</div>
        </div>
        <div className="footer-left-element">
          {data ? (
            <>
              <Link href={'/bookmark'}>
                <div>
                  <Image src={"/bookmark.png"} alt="" width={40} height={40} />
                </div>
              </Link>
              <div>찜목록</div>
            </>
          ) : (
            <>
            <div onClick={() => noLoginStatus()}>
              <Image src={"/bookmark.png"} alt="" width={40} height={40} />
            </div>
            <div>찜목록</div>
            </>
          )}

        </div>
      </div>
      <div className="footer-center">
        <Link href={'/main'}>
          <div className="footer-center-element">
            <Image src={"/home.png"} alt="" width={80} height={80} />
          </div>
        </Link>
        <div className="footer-center-circle"></div>
      </div>
      <div className="footer-right">
        {data ? (
        <>
          <div className="footer-right-element">
            <Link href={"/message"}>
              <div>
                <Image src={"/message.png"} alt="" width={40} height={40} />
              </div>
            </Link>
            <div>메시지</div>
          </div>
          <div className="footer-right-element">
            <Link href={'/my-page'}>
              <div>
                <Image src={"/my.png"}alt="" width={40} height={40} />
              </div>
            </Link>
            <div>마이페이지</div>
          </div>
        </>
        ) : (
          <>
            <div className="footer-right-element" onClick={() => noLoginStatus()}>
              <div>
                <Image src={"/message.png"} alt="" width={40} height={40} />
              </div>
              <div>메시지</div>
            </div>
            <div className="footer-right-element" onClick={() => noLoginStatus()}>
              <div>
                <Image src={"/my.png"}alt="" width={40} height={40} />
              </div>
              <div>마이페이지</div>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
