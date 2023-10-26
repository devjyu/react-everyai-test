"use client"
import MainData from "@/repository/data/main.json";
import MainLayout from "@/_components/main-layout";
import "@/app/main/main.css";
import AdvertisementBanner from "./_components/banner";
import MainCategory from "./_components/category";

import MainServiceList from "./_components/service-list";

export default function Main() {
  
  return (
    <MainLayout>
      <MainCategory{...MainData} />
      <AdvertisementBanner />
      <MainServiceList{...MainData} />
    </MainLayout>
  )
}
