import "@/app/submain/layout";
import '@/app/globals.css';
import '@/app/submain/submain.css';

import MainLayout from "@/app/_components/main-layout";
import Title from "./submain-components/submain-title";
import SubmainSort from "./submain-components/submain-sort";
import SubmainServiceCard from "./submain-components/submain-service-card";


export default function Submain() {
  return (
    <MainLayout>
      <Title />
      <SubmainSort />
      <SubmainServiceCard />
    </MainLayout>
  )
}
