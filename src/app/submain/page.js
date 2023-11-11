"use client";
import '@/app/globals.css';
import '@/app/submain/submain.css';
import { useState, useEffect } from 'react';

import MainLayout from "@/_components/main-layout";
import SubMainData from "@/repository/data/submain.json";
import SubmainServiceCard from "./_components/service-card";
import SubmainTitle from './_components/title';

export default function Submain() {
  // const [categoryData, setCategoryData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch 데이터
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.10.10.13:8080/api/v1/product-category/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("debug11 : ", json);
        // 데이터 조작 로직
        const manipulatedData = manipulateData(json);

        console.log("debug12 : ", manipulatedData);
        // 상태 업데이트
        setData(manipulatedData);
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    };
    fetchData();
  }, []);

  // 데이터 업데이트 함수
  // const handleDataUpdate = (SubMainData) => {
  //   setSubMainData(SubMainData);
  // };
    // 데이터를 조작하는 함수
    const manipulateData = (data) => {
      // 여기에 데이터를 조작하는 로직 추가
      // 예: data.map(...), data.filter(...), etc.
      console.log("여기옴");
      return data.data.productCategoryList;
    };

  return (
    <MainLayout>
      <SubmainTitle
        //  onDataUpdate={handleDataUpdate}
        {...data} />
      <SubmainServiceCard {...SubMainData} />
    </MainLayout>
  )
}
