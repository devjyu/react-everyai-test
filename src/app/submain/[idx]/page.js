import '@/app/globals.css';
import '@/app/submain/[idx]/submain.css'

import MainLayout from "@/_components/main-layout";
import Title from "./_components/title";
import SubmainSort from "./_components/sort";
import SubmainServiceCard from "./_components/service-card";


export default function Submain() {
  return (
    <MainLayout>
      <Title />
      <SubmainSort />
      <SubmainServiceCard />
    </MainLayout>
  )
}
