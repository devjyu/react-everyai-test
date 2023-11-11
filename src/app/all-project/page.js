"use client"
import '@/app/globals.css';
import '@/app/all-project/style.css'

import MainLayout from "@/_components/main-layout";
import Title from "./_components/title";
import SubmainSort from "./_components/sort";
import SubmainServiceCard from "./_components/project-card";

import ProjectData from '@/repository/data/project.json'

export default function Submain() {
  
  return (
    <MainLayout>
      <Title />
      <SubmainSort {...ProjectData}/>
      <SubmainServiceCard {...ProjectData}/>
    </MainLayout>
  )
}
