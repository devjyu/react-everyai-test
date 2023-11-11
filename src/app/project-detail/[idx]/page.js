"use client";
import '@/app/globals.css';
import "@/app/project-detail/[idx]/style.css";

import MainLayout from "@/_components/main-layout";
import Info from "./_components/info";
import ProposalButton from "./_components/proposal-button";
import Title from "./_components/title";
import ProjectDetailData from '@/repository/data/project-detail.json'


export default function ServiceDetail() {
  return (
    <MainLayout>     
      <Title {...ProjectDetailData}/>
      <Info {...ProjectDetailData}/>
      <ProposalButton  {...ProjectDetailData}/>
    </MainLayout>
  )
}
