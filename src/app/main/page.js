"use client"
import MainData from "@/repository/data/main.json";
import MainLayout from "@/_components/main-layout";
import "@/app/main/main.css";
import MainCategory from "./_components/category";
import MainServiceList from "./_components/service-list";
import AdvertisementBanner from "./_components/banner";

export default function Main() {
  
  return (
    <MainLayout>
      <MainCategory {...MainData} />
      <AdvertisementBanner {...MainData} />
      <MainServiceList {...MainData} />
    </MainLayout>
  )
}
