import Image from "next/image";
import Link from 'next/link';

export default function Content({data}) {
    return(
        <>
            <div>
                <div className='big-title'>
                    <div className="title">{data.advertisement.title}</div>
                    <p className='create-date'>{data.advertisement.createDate}</p>
                </div>
                <hr />
                <div className='advertisement-banner-thumbnail'>
                    <Image src={data.advertisement.thumbnailFile.subFileList.url} alt='광고 배너 썸네일' width={680} height={280}/>
                </div>
                <div className='advertisement-banner-content'>
                    <p>{data.advertisement.content}</p>
                </div>
                <hr />
                <div className='movement-button'>
                    <button><Link href={'/main'}>메인으로 가기</Link></button>
                </div>
            </div>
        </>
    );
}