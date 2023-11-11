"use client"
import '@/app/globals.css';
import "@/app/my-service/style.css";

import MainLayout from "@/_components/main-layout";
import ServiceList from './_components/service-list';
import Title from './_components/title';
import MyServiceData from '@/repository/data/my-service.json'



export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title />
      <ServiceList {...MyServiceData} />
    </MainLayout>
  )
}
