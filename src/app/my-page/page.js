"use client";
import "@/app/my-page/style.css";
import { useState, useEffect } from "react";
import MainLayout from "@/_components/main-layout";
import MyPageTitle from "./_components/title";
import MyPageUserInfo from "./_components/user-info";
import MyPageSuggest from "./_components/suggest";
import MyPageSellInfo from "./_components/sell-info";
import MyPageServiceList from "./_components/service-list";
import { getAccessToken } from "@/util/cookie";
import { errorHandle } from "@/util/token-manage";

export default function MyPage() {
  const [data, setData] = useState(null);
//   const accessToken = getAcesseToken();

  useEffect(() => {
    // if (!accessToken) {
    //   // Redirect the user to the login page or display a message indicating they need to log in
    // //   location.replace("/login");
    //   return null; // Render nothing if the access token is undefined
    // }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken('accessToken')}`,
    };
    console.log("여기야아ㅑㅇ");
    // Fetch 데이터
    const fetchData = async () => {
        console.log("여기는??");
      try {
        const response = await fetch("http://10.10.10.12:8080/api/v1/mypage", {
          method: "GET",
          headers: headers,
        });
        console.log("뭐야?", response);
        if (!response.ok) {
            errorHandle(response);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        // 데이터 조작 로직
        const manipulatedData = manipulateData(json);

        // 상태 업데이트
        setData(manipulatedData);
      } catch (error) {
        console.error("Fetching data failed", error);
        if (error.response) {
            console.log("Response data:", error.response.data);
          }
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

  console.log("ㅎ", data);

  return (
    <MainLayout>
      <MyPageTitle />
      <MyPageUserInfo {...data} />
      <MyPageSuggest />
      <MyPageSellInfo />
      <MyPageServiceList />
    </MainLayout>
  );
}