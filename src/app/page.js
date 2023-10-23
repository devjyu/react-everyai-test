import Image from "next/image";
import styles from '@/app/page.module.css';
import "./main.css";
import MainCategory from "./main-components/main-category";
import MainAdvertisementBanner from "./main-components/main-advertisement-banner";
import MainServiceList from "./main-components/main-service-list";

export default function Home() {
  return (
    <div className="container">
      <MainCategory />
      <MainAdvertisementBanner />
      <MainServiceList />
      {/* <!-- 서비스 추천 박스 --> */}
    </div>
  )
}
