import Image from "next/image";

export default function JoinStartLogo() {
    return(
        <div>
            <Image src={"/logo.png"} alt="로고" width={250} height={100}/>
        </div>
    );
}