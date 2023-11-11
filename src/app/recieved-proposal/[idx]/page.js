import '@/app/globals.css';
import "@/app/recieved-proposal/[idx]/style.css";

import MainLayout from "@/_components/main-layout";
import RecievedProposal from './_components/recieved-proposal-list';
import Title from './_components/title';
import RecievedProposalData from "@/repository/data/recieved-proposal.json"


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title {...RecievedProposalData}/>
      <RecievedProposal {...RecievedProposalData}/>
    </MainLayout>
  )
}
