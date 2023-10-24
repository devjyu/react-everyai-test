import Image from "next/image";
import styles from '@/app/page.module.css';
import MainLayout from "@/app/_components/main-layout";
import "@/app/main/main.css";
import MainCategory from "./main-components/main-category";
import MainAdvertisementBanner from "./main-components/main-advertisement-banner";
import MainServiceList from "./main-components/main-service-list";

export default function Main() {
  return (
    <MainLayout>
      <MainCategory />
      <MainAdvertisementBanner />
      <MainServiceList />
    </MainLayout>
  )
}
