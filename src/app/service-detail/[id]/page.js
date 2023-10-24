"use client";
import "@/app/service-detail/[id]/service-detail.css";
import '@/app/globals.css';

import MainLayout from "@/app/_components/main-layout";
import Preview from "./service-detail-components/service-detail-preview";
import Review from "./service-detail-components/service-detail-review";
import Agree from "./service-detail-components/service-detail-agree";
import Profile from "./service-detail-components/service-detail-profile";
import Content from "./service-detail-components/service-detail-content";
import Service from "./service-detail-components/service-detail-service";


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Preview />
      <Content />
      <Profile />
      <Service />
      <Review />
      <Agree />
    </MainLayout>
  )
}
