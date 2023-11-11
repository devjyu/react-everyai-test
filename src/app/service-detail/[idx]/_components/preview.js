import Image from "next/image";

export default function Preview({ data }) {
    return (
        <>
            <div class="preview-container">
                <img src={data.serviceInfo.thumbnailImage} alt="미리보기 사진" />
            </div>
            
        </>
    )
};