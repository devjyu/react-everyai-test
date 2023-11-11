"use client";
import { useState, useEffect } from "react";
import MainLayout from "@/_components/main-layout";
import "@/app/main/main.css";
import AdvertisementBanner from "./_components/banner";
import MainServiceList from "./_components/service-list";
import MainCategory from "./_components/category";
// import { isAccessTokenExpired } from "@/util/token-manage";

export default function Main() {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("여기야아ㅑㅇ");
    // Fetch 데이터
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.10.10.12:8080/api/v1/main", {
          method: "GET",
          headers: headers,
        });
        console.log(headers);
        if (!response.ok) {
          // isAccessTokenExpired(response);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const json = await response.json();

        // 데이터 조작 로직
        const manipulatedData = manipulateData(json);

        // 상태 업데이트
        setData(manipulatedData);
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    };

    fetchData();
  }, []);

  // 데이터를 조작하는 함수
  const manipulateData = (data) => {
    // 여기에 데이터를 조작하는 로직 추가
    // 예: data.map(...), data.filter(...), etc.
    return data;
  };

  // 로딩 상태 렌더링
  if (!data) {
    return <p>로딩중..</p>
  }

  console.log({ ...data });

  return (
    <MainLayout>
      <MainCategory {...data} />
      <AdvertisementBanner {...data} />
      <MainServiceList {...data} />
    </MainLayout>
  );
}
