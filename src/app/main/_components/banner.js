import Image from 'next/image';

export default function AdvertisementBanner({data}) {
  const placeholderURL = "https://via.placeholder.com/300";

  return (
    <>
      {data.advertisementAdminBannerList.map((thumbnail, index) => (
        <div className="main-banner-box" key={index}>
          <Image src={thumbnail.thumbnailFileEntity.subFileList.url} alt='광고배너' width={700} height={100} />
        </div>
      ))}
    
    </>
  );
}
