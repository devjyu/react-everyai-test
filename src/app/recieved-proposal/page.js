import '@/app/globals.css';
import "@/app/sent-proposal/style.css";

import MainLayout from "@/_components/main-layout";
import RecievedProposal from './_components/recieved-proposal-list';
import Title from './_components/title';


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title />
      <RecievedProposal />
    </MainLayout>
  )
}
