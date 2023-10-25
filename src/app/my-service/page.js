import '@/app/globals.css';
import "@/app/my-service/style.css";

import MainLayout from "@/_components/main-layout";
import Middle from './_components/service-list';
import Top from './_components/title';


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Top />
      <Middle />
    </MainLayout>
  )
}
