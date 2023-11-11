"use client";
import "@/app/order-check/[idx]/style.css";
import '@/app/globals.css';

import MainLayout from "@/_components/main-layout";
import Title from "./_components/title";
import OrderDetail from "./_components/order-detail";
import PurchasedProduct from "./_components/purchased-product";

import OrderData from "@/repository/data/order-check-data.json"

import React, { useEffect } from 'react';
export default function ServiceDetail() {
  useEffect(() => {
    // 데이터가 없는 경우에 대한 처리
    if (!OrderData || !OrderData.data) {
        alert('데이터를 불러올 수 없습니다. 이전 페이지로 이동합니다.');
        // 이전 페이지로 이동하는 코드
        window.history.back();
    }
}, [OrderData]);

if (!OrderData || !OrderData.data) {
  return null; // 데이터가 없을 경우 아무것도 렌더링하지 않음
}

  return (
    <MainLayout>     
      <Title {...OrderData} />
      <OrderDetail {...OrderData}/>
      <PurchasedProduct {...OrderData}/>
    </MainLayout>
  )
}
