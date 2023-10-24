"use client";
import "@/app/service-detail/[id]/service-detail.css";
import '@/app/globals.css';

import MainLayout from "@/_components/main-layout";
import Preview from "./_components/service-detail-preview";
import Review from "./_components/service-detail-review";
import Agree from "./_components/service-detail-agree";
import Profile from "./_components/service-detail-profile";
import Content from "./_components/service-detail-content";
import Service from "./_components/service-detail-service";


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
