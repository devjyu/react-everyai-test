"use client";
import '@/app/bookmark/style.css';
import { useEffect, useState } from "react";
import MainLayout from '@/_components/main-layout';
import BookmarkTitle from './_components/title';
import BookmarkServiceList from './_components/service-list';
import BookmarkData from '@/repository/data/bookmark.json';

export default function Bookmark() {

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   // Fetch 데이터
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('http://localhost:8080/api/v1/main');
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }
    //       const json = await response.json();
  
    //       // 데이터 조작 로직
    //       const manipulatedData = manipulateData(json);
  
    //       // 상태 업데이트
    //       setData(manipulatedData);
    //     } catch (error) {
    //       console.error("Fetching data failed", error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
    // // 데이터를 조작하는 함수
    // const manipulateData = (data) => {
    //   // 여기에 데이터를 조작하는 로직 추가
    //   // 예: data.map(...), data.filter(...), etc.
    //   return data;
    // };
  
    // // 로딩 상태 렌더링
    // if (!data) {
    //   return <p>Loading...</p>;
    // }
  
    // console.log({...data})

    return(
        <MainLayout>
            <BookmarkTitle />
            {/* 서버와 통신할 때 이걸로 사용 */}
            {/* <BookmarkServiceList {...data}/> */}
            <BookmarkServiceList {...BookmarkData}/>
        </MainLayout>
    );
}