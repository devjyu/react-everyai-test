import Image from "next/image";

export default function Logo() {

    const goMain = () => {
        location.href = `/main`;
    }
    return(
        <div className="ai-logo" onClick={goMain}>
            <Image src={"/logo.png"} alt="로고" width={50} height={50}/>
        </div>
    );
}