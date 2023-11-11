"use client"
import MainLayout from "@/_components/main-layout";
import "@/app/my-project/style.css";
import MyProjectData from "@/repository/data/myproject.json";
import RegistrationButton from "./_components/registration-button";
import Title from "./_components/title";
import MyProjectList from "./_components/my-project-list";

export default function MyProject() {
  return (
    <MainLayout>
      <Title />
      <MyProjectList {...MyProjectData} />
      <RegistrationButton/>
    </MainLayout>
  )
}