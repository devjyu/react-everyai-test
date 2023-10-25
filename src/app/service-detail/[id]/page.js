"use client";
import "@/app/service-detail/[id]/service-detail.css";
import '@/app/globals.css';

import MainLayout from "@/_components/main-layout";
import Preview from "./_components/preview";
import Review from "./_components/review";
import Agree from "./_components/agree";
import Profile from "./_components/profile";
import Content from "./_components/content";
import Service from "./_components/service";


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
