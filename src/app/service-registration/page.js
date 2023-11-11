"use client"
import '@/app/globals.css';
import "@/app/service-registration/style.css";

import MainLayout from "@/_components/main-layout";
import SaveContent from './_components/save-content';
import Title from './_components/title';

import ServiceRegistrationData from '@/repository/data/service-registration.json'


export default function ServiceDetail() {
  return (
    <MainLayout>
      <Title />
      <SaveContent {...ServiceRegistrationData}/>
    </MainLayout>
  )
}
