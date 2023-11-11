"use client"
import MainLayout from "@/_components/main-layout";
import "@/app/advertisement-management/style.css";
import AdvertisementData from "@/repository/data/advertisement-management.json";
import Title from "./_components/title";
import PeriodSetting from "./_components/period-setting";
import AdvertisementList from "./_components/advertisement-list";

export default function Main() {
  return (
    <MainLayout>
      <Title {...AdvertisementData} />
      <PeriodSetting {...AdvertisementData}/>
      <AdvertisementList {...AdvertisementData} />
    </MainLayout>
  )
}