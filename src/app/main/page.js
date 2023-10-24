import Image from "next/image";
import styles from '@/app/page.module.css';
import '@/app/globals.css';
import "@/app/submain/submain.css";
import MainCategory from "./main-components/main-category";
import MainAdvertisementBanner from "./main-components/main-advertisement-banner";
import MainServiceList from "./main-components/main-service-list";

export default function Main() {
  return (
    <>
      <MainCategory />
      <MainAdvertisementBanner />
      <MainServiceList />
    </>
  )
}
