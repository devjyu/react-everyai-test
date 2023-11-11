"use client"
import '@/app/globals.css';
import "@/app/sent-proposal/style.css";

import MainLayout from "@/_components/main-layout";
import SentProposal from './_components/sent-proposal-list';
import Title from './_components/title';
import SentProposalData from '@/repository/data/sent-proposal.json'

export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title {...SentProposalData} />
      <SentProposal {...SentProposalData}/>
    </MainLayout>
  )
}
