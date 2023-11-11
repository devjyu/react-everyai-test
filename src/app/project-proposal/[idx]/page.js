"use client";
import '@/app/globals.css';
import "@/app/project-proposal/[idx]/style.css";

import MainLayout from "@/_components/main-layout";
import Info from "./_components/info";
import ProposalButton from "./_components/proposal-button";
import Title from "./_components/title";
import ProjectProposalData from '@/repository/data/project-proposal.json'


export default function ServiceDetail() {
  return (
    <MainLayout>     
      <Title {...ProjectProposalData}/>
      <Info {...ProjectProposalData}/>
      <ProposalButton  {...ProjectProposalData}/>
    </MainLayout>
  )
}
