import Image from "next/image";
import styles from '@/app/page.module.css';
<<<<<<< HEAD
import '@/app/globals.css';
import "@/app/submain/submain.css";
=======
import MainLayout from "@/app/_components/main-layout";
import "@/app/main/main.css";
>>>>>>> db3e4527d2c9c0631da452dff0790a3c382c5572
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
