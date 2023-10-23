import Image from "next/image";
import styles from '@/app/page.module.css';
import "./main.css";
import Container from "./_components/container";
import MainCategory from "./main-components/main-category";
import MainAdvertisementBanner from "./main-components/main-advertisement-banner";
import MainServiceList from "./main-components/main-service-list";

export default function Home() {
  return (
    <Container>
      <MainCategory />
      <MainAdvertisementBanner />
      <MainServiceList />
    </Container>
  )
}
