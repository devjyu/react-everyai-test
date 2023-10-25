import '@/app/globals.css';
import "@/app/service-registration/style.css";

import MainLayout from "@/_components/main-layout";
import SaveContent from './_components/save-content';
import Title from './_components/title';


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title />
      <SaveContent />
    </MainLayout>
  )
}
