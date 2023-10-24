import '@/app/globals.css';
import '@/app/submain/submain.css';

import MainLayout from "@/_components/main-layout";
import Title from "./_components/submain-title";
import SubmainSort from "./_components/submain-sort";
import SubmainServiceCard from "./_components/submain-service-card";


export default function Submain() {
  return (
    <MainLayout>
      <Title />
      <SubmainSort />
      <SubmainServiceCard />
    </MainLayout>
  )
}
