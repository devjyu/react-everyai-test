"use client";
import "@/app/service-detail/[idx]/service-detail.css";
import '@/app/globals.css';

import MainLayout from "@/_components/main-layout";
import Service from "./_components/service";
import Review from "./_components/review";

import ServiceDetailData from"@/repository/data/service-detail.json"
import ExpertInfo from "./_components/expert-info";
import Preview from "./_components/preview";
import ServiceInfo from "./_components/service-info";
import Bottom from "./_components/bottom";

import { useParams } from 'next/navigation';
import { useState,useEffect } from "react";

export default function ServiceDetail() {
  
    const getBadgeClass = (level) => {
        switch (level) {
          case 'level0':
            return 'yellow';
          case 'level1':
            return 'green';
          case 'level2':
            return 'blue';
          case 'level3':
            return 'red';
          case 'master':
            return 'black';
          default:
            return '';
        }
      };

  const [DetailData, setDetailData] = useState('');
  
  let  id  = useParams();

  useEffect(() => {
    // 선택된 카테고리와 하위 카테고리, 그리고 정렬 방식에 따라 데이터를 가져오는 로직을 추가할 수 있습니다.
    // 예시로 API 호출을 사용한다면 아래와 같이 구현할 수 있습니다.
    console.log("ID value:", id); // id 값 확인
    console.log("ID value:", `api/v1/service-detail/${id}`); // id 값 확인
    
    const fetchData = async () => {
      try {
      // 카테고리와 정렬에 따라 API 호출을 수행하고 데이터를 가져옵니다.
        const response = await fetch(`api/v1/service-detail/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const DetailData = await response.json();
      // 가져온 데이터를 처리하고 설정합니다.
      setDetailData(DetailData);}
      catch (error) {
        console.error("Fetching data failed", error);
      }
    };
    fetchData();
  }, [id]);



  return (
    
    <MainLayout>     
      <Preview {...ServiceDetailData}/>
      <ServiceInfo {...ServiceDetailData}  getBadgeClass={getBadgeClass}/>
      <ExpertInfo {...ServiceDetailData} getBadgeClass={getBadgeClass}/>
      <Service {...ServiceDetailData}/>
      <Review {...ServiceDetailData}/>
      <Bottom {...ServiceDetailData}/>
    </MainLayout>
  )
}
