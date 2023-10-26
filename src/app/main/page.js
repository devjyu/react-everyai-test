"use client"
import Image from "next/image";
import styles from '@/app/page.module.css';
import MainLayout from "@/_components/main-layout";
import "@/app/main/main.css";
import MainCategory from "./_components/category";
import MainAdvertisementBanner from "./_components/advertisement-banner";
import MainServiceList from "./_components/service-list";

export default function Main() {
  return (
    <MainLayout>
      <MainCategory />
      <MainAdvertisementBanner />
      <MainServiceList />
    </MainLayout>
  )
}
