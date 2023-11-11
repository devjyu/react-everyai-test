import '@/app/advertisement-banner/[idx]/style.css';
import MainLayout from "@/_components/main-layout";
import MainData from "@/repository/data/advertisement-banner-detail.json";
import Content from './_components/content';

export default function AdvertisementBannerDetail() {

    // console.log("헤헤"+Data.advertisementAdminBannerList[0]);
    
    // if (!Data || !Data.advertisementAdminBannerList) {
    //     // data나 advertisementAdminBannerList가 존재하지 않을 경우 처리
    //     return <div>Loading...</div>; // 혹은 원하는 오류 메시지를 반환할 수 있습니다.
    // }
    return(
        <MainLayout>
            <Content {...MainData}/>
        </MainLayout>
    );
}