"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import Header from "@/_components/header";
import Footer from "@/_components/footer";
import Logo from "./logo";
import { getAccessToken } from "@/util/cookie";
import { errorHandle } from "@/util/token-manage";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function MainLayout({children}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken('accessToken')}`,
    };
    console.log("여기야아ㅑㅇ");
    // Fetch 데이터
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.10.10.12:8080/api/v1/header", {
          method: "GET",
          headers: headers,
        });
        console.log(headers);
        if (!response.ok) {
          errorHandle(response);
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

  // // 로딩 상태 렌더링
  // if (!data) {
  //   return <p>로딩중..</p>
  // }

  console.log({ ...data });
  
  return (
    <html lang="kr">
      <body>
        <Logo />
        <Header data={data}/>
        <div className="container">{children}</div>
        <Footer data={data} />
      </body>
    </html>
  );
}
