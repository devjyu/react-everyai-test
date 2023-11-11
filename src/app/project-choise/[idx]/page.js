"use client";
import '@/app/globals.css';
import "@/app/project-choise/[idx]/style.css";

import MainLayout from "@/_components/main-layout";
import ProjectData from '@/repository/data/project-choise.json';
import Info from "./_components/info";
import Title from "./_components/title";


export default function ServiceDetail() {
  return (
    <MainLayout>     
      <Title {...ProjectData}/>
      <Info {...ProjectData}/>
    </MainLayout>
  )
}
